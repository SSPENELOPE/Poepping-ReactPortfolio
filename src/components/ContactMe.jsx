import React from "react";

function ContactMe() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const style = {
        fontFamily:"Georgia",
        textShadow: "1px 2px 2px white"
    }

    return (
        <div className="form-wrapper">
            <h1 style={style}><u>CONTACT ME</u></h1>
            <form className="contact-me" onSubmit={handleSubmit}>
                <div className="formInput">
                    <label for="name" id="name-label">Name:</label>
                    <input
                        type="text"
                        placeholder="Leave Your name"
                        className="nameInput"
                        id="name"
                        required
                    ></input>
                </div>
                <div className="formInput">
                    <label for="email" id="email-label">Email:</label>
                    <input
                        type="text"
                        placeholder="Leave Your email"
                        className="emailInput"
                        id="email"
                        required
                    ></input>
                </div>
                <div className="textInput">
                    <h3>Please Leave your message bellow</h3>
                    <textarea className="textArea" name="comments" id="comments" placeholder="Enter Message here!"></textarea>
                </div>
                <div className="formBtn">
                    <button type="submit" className="contactBtn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactMe;