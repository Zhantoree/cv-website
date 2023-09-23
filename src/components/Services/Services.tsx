import React from 'react';
import './Services.scss';
import ServiceItem from "./ServiceItem/ServiceItem";
import web from '../../assets/img/web.svg'

const items = [
    {
        img: web,
        title: "Web Developer",
        text: "Blabla"

    },
    {
        img: web,
        title: "Web Developer",
        text: "Blabla"

    },
    {
        img: web,
        title: "Web Developer",
        text: "Blabla"

    },
]

const Services = () => {
    return (
        <section className="service">
            <div className="container">
                <p className="service__title">
                    My <span className="marked">Services</span>
                </p>
                <p className="service__subtitle">What I Do</p>
                <div className="service__items">
                    <ServiceItem items={items}/>
                </div>
            </div>
        </section>
    );
};

export default Services;