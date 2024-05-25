import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../services/userService';

const Profile = ({ token }) => {
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile(token);
        setProfile(response.data);
      } catch (error) {
        setMessage(error.response?.data?.message || 'Error fetching profile');
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile(token, profile);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error updating profile');
    }
  };

  return (
    <div className="border border-primary-subtle bg-secondary rounded-pill py-3">
      <h2 className="text-light">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className='mt-3'>
          <label className="text-light mx-3">Username</label>
          <input type="text" name="username" value={profile.username || ''} onChange={handleChange} required />
        </div>
        <div>
          <label className="text-light my-3 mx-4">Email</label>
          <input type="email" name="email" value={profile.email || ''} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-light">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
