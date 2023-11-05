import React, {FC, useState} from 'react';
import './Header.scss'
import Reveal from "../utils/Reveal/Reveal";

interface HeaderProps {
    data: {
        name: string,
        surname: string,
        nav: string[]
    }
}

const Header: FC<HeaderProps> = ({data: {name, surname, nav}}) => {

    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="header__logo">
                        <Reveal background={false} type={"slideFromTop"}>
                            {surname} <span>{name}</span>
                        </Reveal>
                    </div>
                    <div onClick={(e) => {
                        setIsActive(!isActive)
                        e.stopPropagation()
                    }} className={isActive ? "header__nav" : "header__nav hidden"}>
                        <nav className="nav">

                            <svg onClick={() => setIsActive(!isActive)}
                                 className={isActive ? `nav__element nav__button ` : `nav__element nav__button hidden`}
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                    fill="rgba(243,243,243,1)"></path>
                            </svg>
                            {nav.map(item => <span className={isActive ? `nav__element` : `nav__element hidden`}>
                                <Reveal background={false} type={"slideFromTop"}>
                                    {item}
                                </Reveal>
                            </span>)}
                        </nav>
                    </div>
                    <svg onClick={() => setIsActive(!isActive)} className={isActive ? `burger ` : `burger hidden`}
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="rgba(231,231,231,1)"></path>
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default Header;