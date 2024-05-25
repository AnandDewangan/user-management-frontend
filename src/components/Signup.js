import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/userService';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(username, email, password);
      if (response && response.data) {
        setMessage(response.data.message);
      } else {
        setMessage('Unexpected response from the server');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="border border-primary-subtle bg-secondary rounded-pill py-3">
      <h2 className='text-white'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='mt-3'>
          <label className='text-white mx-3 my-3'>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label className='text-white mx-4'>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className='text-white mx-3 my-3'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
        <button type="submit" class="btn btn-light">Sign Up</button>
        <button type="button" onClick={() => navigate('/')} className="btn btn-warning">Log In</button> 
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
