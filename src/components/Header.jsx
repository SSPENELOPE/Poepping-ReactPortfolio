import React from 'react';

function Header() {

    return (
        <div>
            <header>
                <h1>Tyler Poepping</h1>
                <nav>
                    <a href="#about-me">About Me</a>
                    <a href="#my-projects">My Projects</a>
                    <a href="#contact-me">Contact Me</a>
                    <a href="./assets/Poepping-Resume.docx">Resume</a>
                </nav>
            </header>

            <section className="banner">
                <h1 class="banner-text">Veteran and Junior Developer</h1>
            </section>
        </div>
    )
}

export default Header;