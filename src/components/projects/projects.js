import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {connect} from 'react-redux'
import {onToggleTabId} from "../../redux/action/actions";
import './projects.scss';
import Cards from "./Cards";

class Projects extends Component {

    handleClick = tabId => {
        this.props.onToggleActive(tabId);
    }

    render() {
        const {activeTab, cards} = this.props;
        const isShowAllCards = activeTab !== 0;

        const filterActiveTab = () => {

            if (isShowAllCards) {
                return cards.filter(card => card.idTab === activeTab).map((filteredCard, index) => (
                    <Cards
                        filtercard={filteredCard}
                        key={index}
                    />
                ))
            }
            return cards.map((filteredCard, index) => (
                <Cards
                    filtercard={filteredCard}
                    key={index}
                />
            ))
        }

        return (
            <div className="demo-tabs">
                <Tabs
                    activeTab={activeTab}
                    onChange={(tabId) => this.handleClick(tabId)}
                    ripple>
                    <Tab className='tabs'>All</Tab>

                    <Tab className='tabs'>Front-end</Tab>
                    <Tab className='tabs'>React</Tab>
                    <Tab className='tabs'>Javascript</Tab>
                    <Tab className='tabs'>Latest</Tab>
                    <Tab className='tabs'>SHOW ALL</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            <div className="projects-grid">
                                {filterActiveTab()}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeTab: state.activeTab, //can use activetab like props
        cards: state.cards //can use activetab like props
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'SHOW_ALL'}),
        onToggleActive: tabId => dispatch(onToggleTabId(tabId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
