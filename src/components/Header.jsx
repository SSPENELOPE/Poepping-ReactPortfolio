import React from "react";

function Header(props) {
    return (
        <div>
            <section className="banner">
                <h1 className="banner-text">Veteran and Junior Developer</h1>
            </section>
            <div>
                {props.body}
            </div>
        </div>
    )
}

export default Header;