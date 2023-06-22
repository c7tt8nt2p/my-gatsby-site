import React, { useContext, useState } from 'react';
import { navigate } from 'gatsby';
import { AuthContext } from '../context/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase';

const Register = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { setUser } = useContext(AuthContext);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password,
      );
      console.log('registered user', result.user);
      setUser(result.user);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Create an account</h4>
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
        <button>Register</button>
      </div>
    </form>
  );
};

export default Register;
