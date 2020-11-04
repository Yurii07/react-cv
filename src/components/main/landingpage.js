import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import ParticlesCanvas from "./particles";
import classes from "./landingpage.module.css"

class Landing extends Component {
    render() {
        return (

            <div className={classes.landingGridWrapper}>

                <Grid className={classes.landingGrid}>
                    <ParticlesCanvas/>
                    <Cell col={12}>
                        {/*<img*/}
                        {/*    src="https://freesvg.org/img/anon-hacker-behind-pc.png"*/}
                        {/*    alt="avatar"*/}
                        {/*    className={classes.landingGridImg}*/}
                        {/*/>*/}

                        <div className={classes.bannerText}>
                            <h1>React Developer</h1>

                            <hr/>

                            <p>HTML/CSS | CSS3 | SASS(SCSS) | LESS | Flexbox | Bootstrap | Materialize</p>
                            <p> JavaScript | JQuery | React.js </p>
                            <p>Adobe Photoshop | Figma | Laravel (blade) | Gulp | Webpack | Git | GitLab | JIRA</p>

                            <div className={classes.socialLinks}>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/yuriy-adamenko-4750858a/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Yurii07/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>


        )
    }
}

export default Landing;
