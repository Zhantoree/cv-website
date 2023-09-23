import React from 'react';
import Banner from "../utils/banner/banner";
import Button from "../utils/Button/Button";
import './About.scss'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__banner">
                    <Banner outlined={true}/>
                </div>
                <div className="about__content">
                    <div className="about__title">
                        <p>My <span className="marked">Intro</span></p>
                        <p>About Me</p>
                    </div>
                    <div className="about__subtitle">
                        <p>Frontend Developer, I create web pages and enjoying when I work.</p>
                    </div>
                    <div className="about_button">
                        <Button text="Contact me"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;