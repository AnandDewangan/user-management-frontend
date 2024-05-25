import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../services/userService';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      setToken(response.data.token);
      setMessage('Login successful');
      // Redirect to a protected route or dashboard
      navigate('/profile');  // Adjust the path as needed
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="border border-primary-subtle bg-secondary rounded-pill py-3">
      <h2 className='text-white'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mt-3'>
          <label className='text-white mx-5'>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='my-3'>
          <label className='text-white mx-4'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <button type="submit" className="btn btn-light">Log In</button>
          <button onClick={() => navigate('/signup')} className="btn btn-warning">Sign Up</button>
        </div>
      </form>
      {message && <p>{message}</p>}
      {token && <p>Your token: {token}</p>}
    </div>
  );
};

export default Login;
