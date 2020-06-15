import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Collapsible from "react-collapsible";

class Experience extends Component {
  render() {
    return(
      <Grid>

        <Cell col={12}>
            <Collapsible trigger={'Technology'}>
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
