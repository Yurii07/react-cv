import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import ParticlesCanvas from "./particles";


class Landing extends Component {
    render() {
        return (

            <div style={{width: '100%', margin: 'auto'}}>

                <Grid className="landing-grid">
                    <ParticlesCanvas
                    />
                    <Cell col={12}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{width: '100%', height: 'auto', maxWidth: '300px'}}
                        />

                        <div className="banner-text">
                            <h1>React Developer</h1>

                            <hr/>

                            <p>HTML/CSS | CSS3 | SASS(SCSS) | LESS | Flexbox | Bootstrap | Materialize</p>
                            <p> JavaScript | JQuery | React.js </p>
                            <p>Adobe Photoshop | Figma | Laravel (blade) | Gulp | Webpack | Git | GitLab | JIRA</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/yuriy-adamenko-4750858a/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Yurii07/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Freecodecamp */}
                                {/*<a href="http://google.com" rel="noopener noreferrer" target="_blank">*/}
                                {/*    <i className="fa fa-free-code-camp" aria-hidden="true"/>*/}
                                {/*</a>*/}

                                {/* Youtube */}
                                {/*<a href="http://google.com" rel="noopener noreferrer" target="_blank">*/}
                                {/*    <i className="fa fa-youtube-square" aria-hidden="true"/>*/}
                                {/*</a>*/}

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>


        )
    }
}

export default Landing;
