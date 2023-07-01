import React from 'react'

const FormDefault = () => {
    return (
        <form>

            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="Email address" required />
            <small>We'll never share your email with anyone else.</small>

            <label htmlFor="fullName">
            Full name
            <input type="text" id="fullName" name="fullName" placeholder="Full name" required />
            </label>

            <label htmlFor="Message">
                Message
            <textarea placeholder='Message'></textarea >
            </label>


            <button type="submit">Submit</button>

        </form>
    )
}

export default FormDefault