import React, {FC} from 'react';
import Banner from "../utils/banner/banner";
import Button from "../utils/Button/Button";
import './About.scss'
import {Data} from "../../store/rootSlice";

interface AboutProps {
    data: {
        intro: string[],
        title: string,
        subtitle: string,
        button: string
    }
}

const About: FC<AboutProps> = ({data: {intro, button, subtitle, title}}) => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__banner">
                    <Banner outlined={true}/>
                </div>
                <div className="about__content">
                    <div className="about__title">
                        <p>{intro[0]} <span className="marked">{intro[1]}</span></p>
                        <p>{title}</p>
                    </div>
                    <div className="about__subtitle">
                        <p>{subtitle}</p>
                    </div>
                    <div className="about_button">
                        <Button text={button}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;