import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./nav.css";

function Nav() {
  const [state, setState] = useState("light-mode");
  const[showMenu, setShowMenu]=useState(false)

  const change = () => {
    if (state === "light-mode") {
      setState("dark-mode");
    } else {
      setState("light-mode");
    }
  };

  useEffect(() => {
    document.querySelector("body").className = state;
  }, [state]);
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
        <h3> <span className="selectedLetter">S</span>uraj <span className="selectedLetter">M</span>ishra</h3>
        </div>
        <div className="nav-list">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}className="list" >Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-135} duration={500} className="list">About</Link>
        <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-100} duration={500} className="list">Skill</Link>
        <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500} className="list" >Project</Link>
        <Link activeClass="active" to="Form" spy={true} smooth={true} offset={-100} duration={500} className="list" >Contact</Link>
        </div>

        <div className="icon" onClick={change}>{state === "light-mode" ? (<i class="fa-solid fa-moon"></i>) : (<i class="fa-solid fa-sun"></i>)}
        </div>

        <div className="mobMenu" onClick={()=>setShowMenu(!showMenu)}>
        <i class="fa-solid fa-bars" ></i>
        </div>
        <div className="navMenu" style={{display: showMenu? 'flex':"none"}}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-135} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Skill</Link>
        <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Project</Link>
        <Link activeClass="active" to="Form" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
