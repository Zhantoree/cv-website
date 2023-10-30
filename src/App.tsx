import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import {useAppSelector} from "./store/hooks/Hooks";
import Projects from "./components/Projects/Projects";

function App() {
    const lang = useAppSelector(state => state.root.en)
    const data = useAppSelector(state => state.root.data[lang ? 0 : 1])

    return (
        <div className="App">
            {/*header*/}
            <Header data={data.header}/>
            {/*home*/}
            <Home data={data.home}/>
            {/*about*/}
            <About data={data.about}/>
            {/*my skills*/}
            <Skills data={data.skills}/>
            {/*what i do*/}
            <Services data={data.services}/>
            {/*projects cards module */}
            <Projects data={data.projects}/>
            {/*contact me*/}
            {/*footer*/}
        </div>
    );
}

export default App;
