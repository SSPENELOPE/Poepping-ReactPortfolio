import { React, useState } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

function Navigation() {
    const [body, setBody] = useState(<AboutMe />)

    return (
        <div>
            <header>
                <h1>Tyler Poepping</h1>
                <nav>
                    <button className="navlink" onClick={() => setBody(<AboutMe />)}>About Me</button>
                    <button className="navlink" onClick={() => setBody(<MyProjects />)}>My Projects</button>
                    <button className="navlink" onClick={() => setBody(<ContactMe />)}>Contact Me</button>
                    <a href="./assets/Poepping-Resume" className="navlink">Resume</a>
                </nav>
            </header>
            <Header body={body} />

        </div>
    )
}

export default Navigation;