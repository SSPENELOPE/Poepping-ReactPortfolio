import React from "react";

function Footer() {
    return (
        <div>
            <section className="wrapper" id="contact-me">
                <h2>Contact Me</h2>
                <div className="contact">
                    <ul>
                        <li>
                            <a href="tel:+10123456789">012.345.6789</a>
                        </li>
                        <li>
                            <a href="mailto:typoeping@gmail.com">typoepping@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://github.com/SSPENELOPE" target="_blank">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/tyler-poepping-3931b123b/" target="_blank">Linked In</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Footer;