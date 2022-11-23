import { React, useState } from react;
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

function Navigation() {
    const [body, setBody] = useState(<AboutMe />)
    return (
        <div>
            <div>
                <Header body={body}/>
            </div>
              <h1>Tyler Poepping</h1>
                <nav>
                    <button className="navlink" onClick={() => setBody(<AboutMe />)}>About Me</button>
                    <button className="navlink" onClick={() => setBody(<MyProjects />)}>My Projects</button>
                    <button className="navlink" onClick={() => setBody(<ContactMe />)}>Contact Me</button>
                    <button className="navlink">Resume</button>
                </nav>
        </div>
    )
}

export default Navigation;