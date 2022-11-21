import React, { useState } from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';

function Header() {

    const [body, setBody] = useState(<AboutMe />)
    return (
        <div>
            <header>
                <h1>Tyler Poepping</h1>
                <nav>
                    <button className="navlink" onClick={() => setBody(<AboutMe />)}>About Me</button>
                    <button className="navlink" onClick={() => setBody(<MyProjects />)}>My Projects</button>
                    <button className="navlink">Contact Me</button>
                    <button className="navlink">Resume</button>
                </nav>
            </header>

            <section className="banner">
                <h1 className="banner-text">Veteran and Junior Developer</h1>
            </section>
            <div>
                {body}
            </div>
        </div>
    )
}

export default Header;