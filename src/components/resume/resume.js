import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Experience from './experience';
import Skills from './skills';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Resume extends Component {
    render() {
        return (
            <div>

                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{height: '250px'}}
                            />
                            <h2 style={{paddingTop: '2em'}}>Adamenko Yurii</h2>
                            <h4 style={{color: 'grey'}}>React Developer</h4>
                            <hr style={{borderTop: '2px solid rgb(226, 41, 71)'}}/>
                            <p>Main goal to get the position of «React.js developer» with opportunities for
                                professional and personal growth.</p>
                        </div>


                        {/*<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>*/}

                        {/*<h5>Phone</h5>*/}
                        {/*<p>(063) 153-0212</p>*/}
                        {/*<h5>Email</h5>*/}
                        {/*<p>skyey07@gmail.com</p>*/}
                        {/*<h5>Web</h5>*/}
                        {/*<p>mywebsite.com</p>*/}
                        {/*<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>*/}
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Grid>
                            <Cell col={3}>
                                <p>2008 - 2013</p>
                            </Cell>
                            <Cell col={9}>
                                <h4 style={{marginTop: '0px'}}>Master's Degree</h4>
                                <p>International Economics at National Aviation University</p>
                            </Cell>
                        </Grid>

                        <hr style={{borderTop: '2px solid #e22947'}}/>

                        <h2>Work Experience</h2>

                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="1.10.19 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<i className="fa fa-briefcase fa-2x" />}
                            >
                                <h3 className="vertical-timeline-element-title">Web Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Nimble company</h4>
                                <div>
                                    Description
                                    <Experience
                                        html='HTML5, '
                                        css='CSS3( Sass / Scss), '
                                        flexbox='flexbox, '
                                        bootstrap='bootstrap, '
                                        photoshop='photoshop, '
                                        javascript='JavaScript (ES6, ES7), '
                                        JQuery='Jquery, '
                                        webpack='Webpack, '
                                        figma='Figma, '
                                        react='react, '
                                        php='php, '
                                        restapi='REST API '
                                    />
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="4 month"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={ <i className="fa fa-briefcase fa-2x"/>}

                            >
                                <h3 className="vertical-timeline-element-title">Middle Front-end Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Global Marketing Group</h4>
                                <div>
                                    Description
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="4 month"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<i className="fa fa-briefcase fa-2x"/>}
                            >
                                <h3 className="vertical-timeline-element-title">Junior WordPress Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">GRapps company</h4>
                                <div>
                                    Website development and used of such technologies
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="6 month"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<i className="fa fa-briefcase fa-2x"/>}
                            >
                                <h3 className="vertical-timeline-element-title">Junior Front-end Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Design studio</h4>
                                <div>
                                    Description
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="3 month"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<i className="fa fa-briefcase fa-2x"/>}
                            >
                                <h3 className="vertical-timeline-element-title">Junior Front-end Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">ТОВ Надійний інтернет-магазин</h4>
                                <div>
                                    Description
                                </div>
                            </VerticalTimelineElement>

                        </VerticalTimeline>

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>

                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />

                        <Skills
                            skill="javascript"
                            progress={60}
                        />

                        <Skills
                            skill="React.js"
                            progress={40}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
