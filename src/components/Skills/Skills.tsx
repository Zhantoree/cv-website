import React from 'react';
import Button from "../utils/Button/Button";
import './Skills.scss'
import SkillsItem from "./Item/Skills__item";

const skills = [
    'HTML5 & CSS3',
    'JavaScript',
    'React',
    'Redux',
    'GitHub',
    'NodeJS(express)'
]

const Skills = () => {
    return (
        <section className="skills">
            <div className="container">
                <div className="skills__header">
                    <p className="skills__suptitle">Favourite <span className="marked">Skills</span></p>
                    <p className="skills__title">My Skills</p>
                    <p className="skills__subtitle">See fully what skills I have and perform, to develop projects for
                        you.</p>
                    <div className="skills__button">
                        <Button text="See Projects"/>
                    </div>
                </div>
                <div className="skills__content">
                    <SkillsItem items={skills}/>
                    {/*<div className="skills__item">HTML5 & CSS3</div>*/}
                    {/*<div className="skills__item">JavaScript</div>*/}
                    {/*<div className="skills__item">React</div>*/}
                    {/*<div className="skills__item">Redux</div>*/}
                    {/*<div className="skills__item">GitHub</div>*/}
                    {/*<div className="skills__item">NodeJS(express)</div>*/}
                </div>
            </div>
        </section>
    );
};

export default Skills;