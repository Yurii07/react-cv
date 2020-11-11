import React from 'react';
import { Grid, Cell} from 'react-mdl';
import {Line} from "rc-progress";

const Skills =(props)=> {

    const {skill,progress} = props;

      const {  color } = {
          percent: 30,
          color: 'rgba(191,109,80, 1)',
      };

    return(
      <Grid>
        <Cell col={2}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start',alignItems: 'center'}}>{skill}  </div>
        </Cell>
          <Cell col={10}>

              <div style={{width: '100%'}}>
                  <Line percent={progress} strokeWidth="1" strokeColor={color} />
              </div>

              {/*<ProgressBar className={classes.test} style={{margin: 'auto', width: '100%',display: 'flex', flexDirection: 'row', justifyContent: 'start',alignItems: 'center'}} progress={this.props.progress} />*/}
          </Cell>
      </Grid>
    )

}



export default Skills;
