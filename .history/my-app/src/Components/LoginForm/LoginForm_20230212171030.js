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
      <label>
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
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded" 
        type="submit">
          Login
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        type="submit">
          Send
      </button>
    </form>
  );
};

export default LoginForm;