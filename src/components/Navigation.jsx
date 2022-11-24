import { React, useState } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import resume from '../assets/Poepping-Resume.docx'
function Navigation() {
    const [body, setBody] = useState(<AboutMe />)

    const downloadResume = () => {
        fetch(resume).then(res => {
            res.blob().then(blob => {
                  const fileURL = window.URL.createObjectURL(blob);
                  let alink = document.createElement('a');
                  alink.href = fileURL;
                  alink.download = 'Poepping-Resume.docx';
                  alink.click();
            })
        })
    }

    return (
        <div>
            <header>
                <h1>Tyler Poepping</h1>
                <nav>
                    <button className="navlink" onClick={() => setBody(<AboutMe />)}>About Me</button>
                    <button className="navlink" onClick={() => setBody(<MyProjects />)}>My Projects</button>
                    <button className="navlink" onClick={() => setBody(<ContactMe />)}>Contact Me</button>
                    <button className="navlink" onClick={downloadResume}>Resume</button>
                </nav>
            </header>
            <Header body={body} />

        </div>
    )
}

export default Navigation;