import React, { useState } from "react";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/create-access-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });
    const data = await response.json();
    setAccessCode(data.accessCode);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <button type="submit">Create Access Code</button>
      </form>
      {accessCode && <p>Access code: {accessCode}</p>}
    </div>
  );
}

export default App;
