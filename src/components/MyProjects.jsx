import React from "react";

function MyProjects() {
    return (
        <div>
            <section className="wrapper" id="my-projects">
                <h2>My Projects</h2>
                <div className="container">
                    <a href="https://codepen.io/sspenelope/full/rNJVxYz" target="_blank" rel="noreferrer" className="work-box survey">
                        <h3><u>Survey Form</u>HTML/CSS</h3>
                    </a>

                    <a href="https://codepen.io/sspenelope/full/qBxdBom" target="_blank" rel="noreferrer" className="work-box tribute">
                        <h3><u>Tribute Page</u>HTML/CSS</h3>
                    </a>

                    <a href="https://github.com/SSPENELOPE/TheBeardedReviewers" className="work-box beard">
                        <h3>Fullstack Application</h3>
                    </a>

                    <a href="#" className="work-box coming-soon2">
                        <h3>Coming Soon 2</h3>
                    </a>

                    <a href="#" className="work-box coming-soon3">
                        <h3>Coming Soon 3</h3>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default MyProjects;