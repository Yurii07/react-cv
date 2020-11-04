import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Collapsible from "react-collapsible";
import Icon from 'react-mdl/lib/Icon';

class Experience extends React.Component {

    state = {
        open: false
    }
    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
    return(
      <Grid>
        <Cell col={12} style={{display: 'flex'}}>
            {
                this.state.open
                ? <Icon name='keyboard_arrow_up'></Icon>
                : <Icon name='keyboard_arrow_down'></Icon>
            }

            <Collapsible
                trigger={'Technology'}
                triggerStyle={{color:'rgba(242,134,72, 1)',cursor: 'pointer'}}
                lazyRender={true}
                onTriggerOpening={this.toggle}
                onTriggerClosing={this.toggle}
                         >

                <span>{this.props.css}</span>
                <span>{this.props.html}</span>
                <span>{this.props.flexbox}</span>
                <span>{this.props.bootstrap}</span>
                <span>{this.props.materialize}</span>
                <span>{this.props.react}</span>
                <span>{this.props.javascript}</span>
                <span>{this.props.JQuery}</span>
                <span>{this.props.photoshop}</span>
                <span>{this.props.wordpress}</span>
                <span>{this.props.laravel}</span>
                <span>{this.props.gulp}</span>
                <span>{this.props.webpack}</span>
                <span>{this.props.git}</span>
                <span>{this.props.gitlab}</span>
                <span>{this.props.jira}</span>
                <span>{this.props.zeplin}</span>
                <span>{this.props.figma}</span>
                <span>{this.props.php}</span>
                <span>{this.props.restapi}</span>
            </Collapsible>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
