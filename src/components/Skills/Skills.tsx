import React, {FC} from 'react';
import Button from "../utils/Button/Button";
import './Skills.scss'
import SkillsItem from "./Item/Skills__item";
import {Data} from "../../store/rootSlice";

const skills = [
    'HTML5 & CSS3',
    'JavaScript',
    'React',
    'Redux',
    'GitHub',
    'NodeJS(express)',
    'Next JS',
    'MongoDB'
]

interface SkillsProps {
    data: {
        items: string[],
        suptitle: string[],
        title: string,
        subtitle: string,
        button: string,
    }
}

const Skills: FC<SkillsProps> = ({data: {subtitle, button, title , suptitle, items}}) => {
    return (
        <section className="skills">
            <div className="container">
                <div className="skills__header">
                    <p className="skills__suptitle">{suptitle[0]} <span className="marked">{suptitle[1]}</span></p>
                    <p className="skills__title">{title}</p>
                    <p className="skills__subtitle">{subtitle}</p>
                    <div className="skills__button">
                        <Button text={button}/>
                    </div>
                </div>
                <div className="skills__content">

                    {items.map(item => <SkillsItem item={item}/>)}


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