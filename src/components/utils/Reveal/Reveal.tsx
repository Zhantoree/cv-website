import React, {FC, useEffect, useRef} from 'react';
import {m, useAnimation, useInView, LazyMotion, domAnimation} from "framer-motion";
import './Reveal.scss'

interface RevealProps {
    children: React.ReactNode,
    type?: "default" | "slideFromLeft" | "slideFromRight" |
        "slideFromTop" | "slideFromBottom",
    background: boolean,
    delay?: number,
    duration?: number,
    width?: "fit-content" | "100%" | "inherit"
}

const Reveal: FC<RevealProps> = ({children, duration = 1, delay= 0, type = "default", background = false, width = "inherit"}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const typeControls = useAnimation()
    const backgroundControls = useAnimation()
    let transition = {
        duration: duration,
        delay: delay
        }
    useEffect(() => {
        if (isInView) {
            typeControls.start({opacity: 1, x: 0, y: 0})
            backgroundControls.start("visible")
        }
    }, [isInView])


    return (
        <div ref={ref} style={{width, background: "inherit", display: "inline-block",  position: "relative", overflow: "hidden"}}>
            <LazyMotion strict features={domAnimation}>
                <m.div
                    variants={{
                        default: {
                            opacity: 0
                        },
                        slideFromLeft: {
                            opacity: 0,
                            x: "-100vw",
                        },
                        slideFromRight: {
                            opacity: 0,
                            x: "100vw"
                        },
                        slideFromTop: {
                            y: "-30",
                            opacity: 0
                        },
                        slideFromBottom: {
                            y: "30",
                            opacity: 0
                        }
                    }}
                    transition={{duration: transition.duration, delay: transition.delay}}
                    initial={type === "slideFromLeft" ? "slideFromLeft" :
                        type === "slideFromRight" ? "slideFromRight" :
                            type === "slideFromTop" ? "slideFromTop" :
                                type === "slideFromBottom" ? "slideFromBottom" :
                                    "default"
                    }
                    animate={typeControls}
                >
                    {children}
                </m.div>
            </LazyMotion>

            {background ?
                <LazyMotion strict features={domAnimation}>
                    <m.div
                        variants={{
                            hidden: {left: 0},
                            visible: {left: "100%"}
                        }}
                        initial="hidden"
                        animate={backgroundControls}
                        transition={{ease: "easeIn", duration: transition.duration * 0.1, delay: transition.delay * 0.1}}
                        className="reveal"
                        style={{
                            position: "absolute",
                            height: "auto",
                            top: 4,
                            bottom: 4,
                            right: 0,
                            left: 0,
                            zIndex: 20
                        }}

                    >
                    </m.div>
                </LazyMotion>

                :
                ""
            }
        </div>
    );
};

export default Reveal;