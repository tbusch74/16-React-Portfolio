import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }  
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

      function handleSubmit(e) {
        e.preventDefault();
    }
      
    return (
        <section id="about-me" className="intro">
            <div className="flex-row"> 
                <h2 className="section-title">Contact Me</h2>
            </div>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type="submit" data-testid="button" onSubmit={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}
    
    export default ContactForm;