import React from 'react';

import './aboutMe.scss'

const AboutMe = () => {

    return (
            <div className="wrapper">
                <div className="frame">
                    <div className="circle"/>
                    <div className="line left"/>
                    <div className="line right"/>
                    <div className="bracket left"/>
                    <div className="bracket right"/>
                    <div className="small top"><span className="first-letter">I</span>am</div>
                    <div className="big">
                        <p>A React developer from Kiev, Ukraine. I enjoy building everything from small business sites to rich interactive web apps. Want to know how i may help your project ? Check out my portfolio, you can get in touch with me
                            <a href="#">here</a>
                            with your lovely
                        </p>
                    </div>
                    <div className="small bottom"> <span className="first-letter">React</span>developer</div>
                    <div className="hide top"/>
                    <div className="hide bottom"/>
                </div>
            </div>
    )
}

export default AboutMe;
