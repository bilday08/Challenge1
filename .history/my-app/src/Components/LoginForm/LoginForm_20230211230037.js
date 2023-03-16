import React, { useState } from 'react';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone number:', phoneNumber);
    console.log('Verification code:', verificationCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phoneNumber">Số điện thoại:</label>
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <br />
      <label htmlFor="verificationCode">Mã xác thực:</label>
      <input
        type="text"
        id="verificationCode"
        value={verificationCode}
        onChange={handleVerificationCodeChange}
      />
      <br />
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <br />
      <input
        type="text"
        id="verificationCode"
        value={verificationCode}
        onChange={handleVerificationCodeChange}
      />
    </form>
  );
};

export default LoginForm;