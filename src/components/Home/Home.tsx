import React, {FC} from 'react';
import './Home.scss'
import Banner from "../utils/banner/banner";
import Button from "../utils/Button/Button";
import {m, LazyMotion, domAnimation} from 'framer-motion';
import Reveal from "../utils/Reveal/Reveal";

// const loadFeatures = () => {
//     import('../../features.js').then(res => res.default)
// }

interface HomeProps {
    data: {
        name: string,
        surname: string,
        title: string[],
        job: string,
        subtitle: string,
        button: string
    }
}

const Home: FC<HomeProps> = ({data: {job, button, subtitle, surname, title, name}}) => {
    return (
        <div className="home">
            <div className="container">
                <div className="home__content">
                    <div className="home__title">
                        <Reveal background={true} type={"slideFromLeft"}>
                            {title[0]},
                            <span className="marked"> {title[1]}</span><br/>
                        </Reveal>

                        <p className="marked name">
                            <Reveal background={true} type={"slideFromLeft"}>
                                {`${surname} ${name}`}
                            </Reveal>
                        </p>
                        <p>
                            <Reveal background={true} type={"slideFromLeft"}>
                                {job}
                            </Reveal>
                        </p>
                    </div>
                    <div className="home__subtitle">
                        <p>
                            <Reveal background={false} type={"slideFromLeft"}>
                                {subtitle}
                            </Reveal>
                        </p>
                    </div>
                    <Reveal background={false} type={"default"} delay={0.4}>
                        <Button text={button}/>
                    </Reveal>


                    <div className="home__links">
                        <Reveal background={false} width={"fit-content"} type={"default"} delay={0.6}>
                            <LazyMotion strict features={domAnimation}>
                                <m.div className="home__link"
                                       whileHover={{y: -3}}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
                                            fill="rgba(251,251,251,1)"></path>
                                    </svg>
                                </m.div>

                            </LazyMotion>
                        </Reveal>
                        <Reveal background={false} width={"fit-content"} type={"default"} delay={0.8}>
                            <LazyMotion strict features={domAnimation}>
                                <m.div className="home__link"
                                       whileHover={{y: -3}}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z"
                                            fill="rgba(244,244,244,1)"></path>
                                    </svg>
                                </m.div>
                            </LazyMotion>
                        </Reveal>
                        <Reveal background={false} width={"fit-content"} type={"default"} delay={1}>
                            <m.div className="home__link"
                                        whileHover={{y: -3}}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
                                        fill="rgba(255,255,255,1)"></path>
                                </svg>
                            </m.div>
                        </Reveal>
                    </div>
                </div>
                <LazyMotion strict features={domAnimation}>
                    <m.div className="home__banner"
                           initial={{opacity: 0, y: -30}}
                           animate={{opacity: 1, y: 30}}
                           transition={{duration: 0.5}}
                    >
                        <Banner/>
                    </m.div>
                </LazyMotion>

            </div>
        </div>
    );
};

export default Home;