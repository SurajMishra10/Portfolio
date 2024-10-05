import React from "react";
import "./Skills.css";
import HTML from "../../assets/html5.logo.png";
import CSS from "../../assets/CSS.Logo.png";
import JS from "../../assets/javascript.png";
import ReactLogo from "../../assets/React.png";
import Bootstrap from '../../assets/Bootstrap.logo.png';
import Tailwind from '../../assets/tailwind.png';

const Skills = () => {
  return (
    <section id="skill">
      <h1 className="head">Skills</h1>
        <h2>Front-End</h2>
        <div className="FrontEndImg">
          <img src={HTML} alt="HTML logo" className="skillBg"></img>
          <img src={CSS} alt="CSS logo" className="skillBg"></img>
          <img src={JS} alt="javaScript logo" className="skillBg"></img>
          <img src={Bootstrap} alt="Bootstrap logo" className="skillBg"></img>
          <img src={Tailwind} alt="Tailwind logo" className="skillBg"></img>
          <img src={ReactLogo} alt="Reactlogo" className="skillBg"></img>
        </div>

        <h2>Back-End</h2>
        <div className="FrontEndImg">
          <img src={HTML} alt="HTML logo" className="skillBg"></img>
          <img src={CSS} alt="CSS logo" className="skillBg"></img>
          <img src={JS} alt="javaScript logo" className="skillBg"></img>
          <img src={Bootstrap} alt="Bootstrap logo" className="skillBg"></img>
          <img src={Tailwind} alt="Tailwind logo" className="skillBg"></img>
          <img src={ReactLogo} alt="Reactlogo" className="skillBg"></img>
        </div>
      
    </section>
  );
};

export default Skills;
