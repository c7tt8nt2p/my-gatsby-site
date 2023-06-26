import React, {useContext, useState} from 'react';
import {navigate} from 'gatsby';
import {AuthContext} from '../context/auth';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {firebaseAuth} from '../firebase';

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) =>
        setData({...data, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const myForm = e.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
    };

    return (
        <form name="contact" method="POST" netlify>
            <p>
                <label>Your Name: <input type="text" name="name" onChange={handleChange}/></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" onChange={handleChange}/></label>
            </p>
            <p>
                <label>Message: <textarea name="message" onChange={handleChange}></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
};

export default Register;
