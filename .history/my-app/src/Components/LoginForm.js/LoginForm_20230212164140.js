import React, { useState } from "react";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAccessCodeChange = (event) => {
    setAccessCode(event.target.value);
  };

  return (
    <form>
      <label className="text-3xl font-bold">
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <br />
      <br />
      <label>
        Access Code:
        <input
          type="text"
          value={accessCode}
          onChange={handleAccessCodeChange}
        />
      </label>
      <br />
       <button style={{ backgroundColor: '#ffc125', padding: '10px 20px', borderRadius: '20px' }}>
        Login
       </button>
      <button type="submit">Send</button>
    </form>
  );
};

export default LoginForm;