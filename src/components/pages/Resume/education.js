import React from 'react';
import {Grid, Cell} from 'react-mdl';

const Education = (props) => {

    const {startYear, endYear, education, faculty, universityName} = props;

    return (
        <Grid>
            <Cell col={3}>
                <p>{startYear} - {endYear}</p>
            </Cell>
            <Cell col={9}>
                <h4 style={{marginTop: '0px'}}>{education}</h4>
                <span style={{marginTop: '0px'}}>{faculty}</span>
                <span> at {universityName}</span>
            </Cell>
        </Grid>
    )
}

export default Education;
