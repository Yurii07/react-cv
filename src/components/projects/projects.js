import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {connect} from 'react-redux'
import {onToggleTabId} from "../../redux/action/actions";

class Projects extends Component {

  handleClick = tabId => {
    console.log(tabId);
    this.props.onToggleActive(tabId);
  }

  render() {
    // console.log('project', this.props);

    return (
        <div className="demo-tabs">
          <Tabs
              activeTab={this.props.activeTab}
              onChange={(tabId) => this.handleClick( tabId)}
              ripple>
            <Tab className='tabs'>All</Tab>
            <Tab className='tabs'>Latest</Tab>
            <Tab className='tabs'>Front-end</Tab>
            <Tab className='tabs'>React</Tab>
            <Tab className='tabs'>Javascript</Tab>
          </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">
                <div className='projectsGrid'>
                  {
                    this.props.cards.filter(card => card.idTab === this.props.activeTab).map(filteredCard => (

                        <Card shadow={5} style={{minWidth: '450', margin: '5px auto'}}>
                          <CardTitle style={{
                            background: `url(${filteredCard.urlImage}) center / cover`
                          }}>
                            {filteredCard.title}
                          </CardTitle>
                          <CardText>
                            {filteredCard.text}
                          </CardText>
                          <CardActions border>
                            <Button colored disabled>GitHub</Button>
                            <Button colored disabled>CodePen</Button>
                            <Button colored onClick={event =>  window.location.href=`${filteredCard.urlProject}`}>Live Demo</Button>
                          </CardActions>
                          <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                          </CardMenu>
                        </Card>
                    ))
                  }
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

//todo save to state click

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
