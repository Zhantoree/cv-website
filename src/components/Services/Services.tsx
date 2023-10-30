import React, {FC} from 'react';
import './Services.scss';
import ServiceItem from "./ServiceItem/ServiceItem";


interface ServicesProps {
    data: {
        items : [
            {
                img: string,
                title: string,
                text: string

            },
            {
                img: string,
                title: string,
                text: string

            },
            {
                img: string,
                title: string,
                text: string

            },
        ],
        title: string[],
        subtitle: string,
    }
}
const Services: FC<ServicesProps> = ({data: {subtitle, title, items}}) => {

    return (
        <section className="service">
            <div className="container">
                <p className="service__title">
                    {title[0]} <span className="marked">{title[1]}</span>
                </p>
                <p className="service__subtitle">{subtitle}</p>
                <div className="service__items">
                    <ServiceItem items={items}/>
                </div>
            </div>
        </section>
    );
};

export default Services;