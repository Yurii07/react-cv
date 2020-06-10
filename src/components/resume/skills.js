import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={2}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start',alignItems: 'center'}}>{this.props.skill}  </div>
        </Cell>
          <Cell col={10}>
              <ProgressBar style={{margin: 'auto', width: '100%',display: 'flex', flexDirection: 'row', justifyContent: 'start',alignItems: 'center'}} progress={this.props.progress} />
          </Cell>
      </Grid>
    )
  }
}

export default Skills;
