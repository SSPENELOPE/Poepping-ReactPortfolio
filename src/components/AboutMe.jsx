import React from "react";
import selfPortrait from '../assets/images/selfportrait.jpeg';

function AboutMe() {
    return (
        <div>
            <section className="wrapper" id="about-me">
                <h2>About Me</h2>
                <div className="container">
                    <img src={selfPortrait} alt="Self Portrait" />
                    <p className="biography-text">
                        I am a 7 year Army Veteran. As part of my service i was stationed in Europe where i got to travel various parts of the continent. During my travels I got to expierence many unique foods, cultures and ways of living which was an educational and amazing expierence.
                        I departed the miltary in March of 2022 and proceeded to enroll in the University of Minnesota (UofM) Coding Bootcamp in May of 2022. Prior to starting the UofM's Coding Bootcamp I started teaching myself HTML/CSS through Free Coding Camp where I became certified.
                        I began school through the UofM's Coding Bootcamp on the 27th of June 2022 with anticipation of graduation and the hopes of having a successful career as a Software/Application Developer. A few personal things about me, I love dogs, video games, and hunting.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;