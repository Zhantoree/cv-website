import {createSlice} from "@reduxjs/toolkit";
import ui from "../assets/img/ui.svg";
import ux from "../assets/img/ux.svg";
import mobile from "../assets/img/mobile.svg";
import nextjs from '../assets/img/nextjs.png'
import {Project} from "../components/Projects/Projects";

export type Data = {

    header: {
        name: string,
        surname: string,
        nav: string[]
    },
    home: {
        name: string,
        surname: string,
        title: string[],
        job:string,
        subtitle: string,
        button: string
    },
    about: {
        intro: string[],
        title: string,
        subtitle: string,
        button: string
    },
    skills: {
        items: string[],
        suptitle: string[],
        title: string,
        subtitle: string,
        button: string,
    },
    services: {
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
    },
    projects: {
        title: string,
        subtitle: string,
        items: Project[]
    }

}

interface IState {
    en: boolean,
    data: Data[]
}

const initialState: IState = {
    en: true,
    data: [
        {
            header: {
                name: "Zhantore",
                surname: "Jandarbekov",
                nav: ["About", "Services", "Projects", "Projects"]
            },
            home: {
                name: "Zhantore",
                surname: "Jandarbekov",
                title: ["Hello", "I'm"],
                job: "Front-end Developer",
                subtitle: "With knowledge in web development, I offer the best projects resulting in quality work.",
                button: "Let's talk"
            },
            about: {
                intro: ["My", "Intro"],
                title: "About me",
                subtitle: "Frontend Developer, I create web pages and enjoying when I work.",
                button: "Contact me"
            },
            skills: {
                items: [
                    "HTML5 & CSS3",
                    "JavaScript",
                    "React",
                    "Redux",
                    "GitHub",
                    "NodeJS(express)",
                    "Next JS",
                    "MongoDB"
                ],
                suptitle: ["Favourite", "Skills"],
                title: "My Skills",
                subtitle: "See fully what skills I have and perform, to develop projects for you.",
                button: "See Projects",
            },
            services: {
                items : [
                    {
                        img: ui,
                        title: "UI",
                        text: "Developing and maintaining the user interface"

                    },
                    {
                        img: ux,
                        title: "UX",
                        text: "Optimizing the user experience"

                    },
                    {
                        img: mobile,
                        title: "Mobile",
                        text: "Implementing design on mobile websites"

                    },
                ],
                title: ["My", "Services"],
                subtitle: "What I Do",
            },
            projects: {
                title: `My <span className='marked'>Jobs</span>`,
                subtitle: "Recent Projects",
                items: [
                    {
                        img: nextjs,
                        url: "https://ssr-news-website.vercel.app/",
                        title: "News website",
                        technologies: ['next.js', 'react.js', 'css modules', 'scss', 'guardian api']
                    }
                ]
            }
        }
    ]

}

export const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {

    }
})

export default rootSlice.reducer