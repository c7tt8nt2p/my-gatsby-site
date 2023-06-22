import React, {useContext, useState} from 'react';
import {navigate} from 'gatsby';
import {AuthContext} from '../context/auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseAuth} from '../firebase';

const Register = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const {setFirebaseUser} = useContext(AuthContext);

    const handleChange = (e) =>
        setData({...data, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(
                firebaseAuth,
                data.email,
                data.password,
            );
            setFirebaseUser(result.user);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Signin</h4>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button>Signin</button>
            </div>
        </form>
    );
};

export default Register;
