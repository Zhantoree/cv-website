import React, {FC} from 'react';

import './ServiceItem.scss';


type item = {
    img: string,
    title: string,
    text: string
}

interface ServiceItemProps {
    items: item[]
}

const ServiceItem: FC<ServiceItemProps> = ({items}) => {
    return (
        <>
            {
                items.map(item => {
                    return <div className="item">
                        <div className="item__image">
                            <img src={item.img} alt=""/>
                        </div>
                        <p className="item__title">{item.title}</p>
                        <div className="item__text">{item.text}</div>
                    </div>
                })
            }

        </>
    );
};

export default ServiceItem;