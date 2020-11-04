import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import {Line} from "rc-progress";

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            percent: 30,
            color: 'rgba(191,109,80, 1)',
        };
    }
  render() {
      const {  color } = this.state;
      const containerStyle = {
          width: '100%',
      };
    return(
      <Grid>
        <Cell col={2}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start',alignItems: 'center'}}>{this.props.skill}  </div>
        </Cell>
          <Cell col={10}>

              <div style={containerStyle}>
                  <Line percent={this.props.progress} strokeWidth="1" strokeColor={color} />
              </div>

              {/*<ProgressBar className={classes.test} style={{margin: 'auto', width: '100%',display: 'flex', flexDirection: 'row', justifyContent: 'start',alignItems: 'center'}} progress={this.props.progress} />*/}
          </Cell>
      </Grid>
    )
  }
}



export default Skills;
