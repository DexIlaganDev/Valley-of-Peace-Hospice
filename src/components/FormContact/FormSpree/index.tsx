import React from 'react'

import { useForm, ValidationError } from '@formspree/react';

const FormSpree = () => {

    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
    if (state.succeeded) {
        return <p>Thanks for reaching out!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="email">
                Email Address
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Email address" 
                    required 
                />
                <small>We'll never share your email with anyone else.</small>
            </label>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />

            <label htmlFor="fullName">
                Full name
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Full name" 
                    required 
                />
            </label>
            <ValidationError 
                prefix="FullName" 
                field="fullName"
                errors={state.errors}
            />

            <label htmlFor="Message">
                Message
                <textarea
                    id="message"
                    name="message"
                    placeholder='Message'
                />
            </label>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />



            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    )
}

export default FormSpree