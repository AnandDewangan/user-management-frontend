import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import ConfirmEmail from './components/ConfirmEmail';

function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className='container mt-5 text-center'>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="/confirm/:confirmationCode" element={<ConfirmEmail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
