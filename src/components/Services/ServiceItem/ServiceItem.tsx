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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V8H21V21C21 21.5523 20.5523 22 20 22ZM21 6H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V6ZM7 11V15H11V11H7ZM7 17V19H17V17H7ZM13 12V14H17V12H13Z" fill="currentColor"></path></svg>
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