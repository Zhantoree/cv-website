import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App" >
      {/*header*/}
      <Header/>
      {/*home*/}
        <Home/>
      {/*about*/}
        <About/>
      {/*my skills*/}
      <Skills/>
      {/*what i do*/}
<Services/>
      {/*projects cards module */}
      {/*contact me*/}
      {/*footer*/}
    </div>
  );
}

export default App;
