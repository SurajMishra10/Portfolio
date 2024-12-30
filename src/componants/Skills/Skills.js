import React from "react";
import "./Skills.css";
import HTML from "../../assets/html5.logo.png";
import CSS from "../../assets/CSS.Logo.png";
import JS from "../../assets/javascript.png";
import ReactLogo from "../../assets/React.png";
import Bootstrap from "../../assets/Bootstrap.logo.png";
import Tailwind from "../../assets/tailwind.png";
import Node from "../../assets/node.png";
import MongoDB from "../../assets/mongodb.logo.png";
import Git from "../../assets/git.png";
import GitHub from "../../assets/GitHub-Logo.png";
import Express from "../../assets/ExpressJS.png";


const Skills = () => {
  return (
    <section id="skill">
      <h2>My skills</h2>
      <div className="skill-container">
      <div className="box">
        <div className="title">
          <h3>HTML</h3>
        </div>
        <hr />
        <img src={HTML} alt="HTML" />
      </div>
      <div className="box">
        <div className="title">
          <h3>CSS</h3> 
        </div>
        <hr />
        <img src={CSS} alt="CSS" />
      </div>
      <div className="box">
        <div className="title">
          <h3>javascript</h3>
        </div>
        <hr />
        <img src={JS} alt="javascript" />
      </div>
      <div className="box">
        <div className="title">
          <h3>React js</h3>
        </div>
        <hr />
        <img src={ReactLogo} alt="React js" />
      </div>
      <div className="box">
        <div className="title">
          <h3>Bootstrep</h3>
        </div>
        <hr />
        <img src={Bootstrap} alt="Bootstrep" />
      </div>
      <div className="box">
        <div className="title">
          <h3>Tailwind CSS</h3>
        </div>
        <hr />
        <img src={Tailwind} alt="Tailwind CSS" />
      </div>
      <div className="box">
        <div className="title">
          <h3>mongoDb</h3>
        </div>
        <hr />
        <img src={MongoDB} alt="mongoDb" />
      </div>
      <div className="box">
        <div className="title">
          <h3>express js</h3>
        </div>
        <hr />
        <img src={Express} alt="express js" />
      </div>
      <div className="box">
        <div className="title">
          <h3>nodejs</h3> 
        </div>
        <hr />
        <img src={Node} alt="nodejs" />
      </div>
      <div className="box">
        <div className="title">
          <h3>Git</h3>
        </div>
        <hr />
        <img src={Git} alt="Git" />
      </div>
      <div className="box">
        <div className="title">
          <h3>GitHub</h3>
        </div>
        <hr />
       <img src={GitHub} alt="GitHub" />
      </div>
      </div>
    </section>
  );
};

export default Skills;
