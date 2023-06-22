import React, {useContext} from 'react';
import {AuthContext} from '../context/auth';
import {netlifyIdentity} from "../netlify";
import {navigate} from "gatsby";

const Register = () => {

    const {setNetlifyUser} = useContext(AuthContext);

    const login = () => netlifyIdentity.open();

    netlifyIdentity.on('login', user => {
        console.log('Netlify login', user);
        console.log('email', user?.email);
        setNetlifyUser(user);
        navigate('/');
    });

    netlifyIdentity.on('logout', () => {
        console.log('Netlify logout');
        setNetlifyUser(null);
        navigate('/');
    });

    return (
        <div>
            <p>Netlify Identity</p>
            <button onClick={login}>Log in</button>
        </div>
    );
};

export default Register;
