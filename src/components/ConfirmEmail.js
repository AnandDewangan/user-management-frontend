import React, { useState, useEffect } from 'react';
import { confirmEmail } from '../services/userService';
import { useParams } from 'react-router-dom';

const ConfirmEmail = () => {
  const { confirmationCode } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const confirm = async () => {
      try {
        const response = await confirmEmail(confirmationCode);
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };

    confirm();
  }, [confirmationCode]);

  return (
    <div>
      <h2>Email Confirmation</h2>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ConfirmEmail; 