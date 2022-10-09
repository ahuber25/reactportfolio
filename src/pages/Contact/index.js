import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
        console.log(formState);
        console.log( errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (

        <section className="items" id="contact">
        <div className="section-titles">
            <h3>Contact Me</h3>
        </div>
        <div className="find-me">
        <form id="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
        <button type="submit">Submit</button>
        </form>
        </div>
        </section>

    )

};

export default Contact;
