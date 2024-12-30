import{useTypewriter, Cursor} from "react-simple-typewriter";
import React from "react";
import "./homePage.css";



function Home() {

  const [typeEffect] = useTypewriter({
    words: ["Mern stack developer", "Frontend developer", "Backend developer"],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 50,
      delay: 2000,
      })
      

  return (
    <section id="home">
      <center>
      <div className="left" >
        <span className="hello">Hello!</span>
        <span className="introText">
          I'm <span className="introName">Suraj</span>
          <br />
          <div className="animated-text">
          And i'm a <span>{typeEffect}</span>
          </div>
          
        </span>
        <p className="introPara">I'm a Mern stack developer specializing in  building dynamic and robust web applications.
          <br />Explore my portfolio to see my work and connect with me. </p>
        <center>
        <button>
          <a href="logo512.png" download>
            {" "}
            Download Resume
          </a>
        </button>
        </center>
      </div>
    </center>
    </section>
  );
}

export default Home;
