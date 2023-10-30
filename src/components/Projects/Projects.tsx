import React, {FC} from 'react';
import './Projects.scss';


export type Project = {
    url: string,
    img: string,
    title: string,
    technologies: string[]
}

interface ProjectsProps {
    data: {
        title: string,
        subtitle: string,
        items: Project[]
    }
}

function createMarkup(data: string) {
    return {__html: `${data}`}
}

const Projects: FC<ProjectsProps> = ({data: {items, subtitle, title}}) => {
    return (
        <div className="proj">
            <div className="container">
                <div className="proj__title">
                    <p dangerouslySetInnerHTML={createMarkup(title)}></p>
                </div>
                <div className="proj__subtitle">
                    {subtitle}
                </div>
                <div className="proj__items">
                    {items.map(item => <div className="proj__item item">
                        <div style={{backgroundImage: `url(${item.img})`}} className="item__image" >
                            fasdasfasdf
                        </div>
                        <div className="item__title" >{item.title}</div>
                        {item.technologies.map(tech => <div className="item__tech">
                            {tech}
                        </div>)}
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;