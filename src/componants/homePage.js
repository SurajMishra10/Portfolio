import React from "react";
import "./homePage.css";
import bg from "./model.png";

function Home() {
  return (
    <section id="home">
      <div className="left">
        <span className="hello">Hello!</span>
        <span className="introText">
          I'm <span className="introName">Suraj</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">I am a skilled web designer</p>
        <button>
          <a href="logo512.png" download>
            {" "}
            Download Resume
          </a>
        </button>
      </div>
      
        <img src={bg} alt="profile picture" className="bg" />
      
    </section>
  );
}

export default Home;
