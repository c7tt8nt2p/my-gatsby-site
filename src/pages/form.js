import React, {useState} from 'react';

const Register = () => {

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     const myForm = e.target;
    //     const formData = new FormData(myForm);
    //
    //     fetch("/", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/x-www-form-urlencoded"},
    //         body: new URLSearchParams(formData).toString(),
    //     })
    //         .then(() => console.log("Form successfully submitted"))
    //         .catch((error) => alert(error));
    // };

    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact"/>
            <p>
                <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
};

export default Register;
