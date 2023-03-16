import React, { useState } from 'react';

function LoginPage() {
  const [state, setState] = useState({
    phoneNumber: '',
    confirmationCode: '',
    stage: 'phoneNumber',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (state.stage === 'phoneNumber') {
      // TODO: Gửi mã xác nhận đến số điện thoại
      setState({ ...state, stage: 'confirmationCode' });
    } else {
      // TODO: Xác nhận mã xác nhận
    }
  };

  return (
    <div>
      {state.stage === 'phoneNumber' ? (
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
            placeholder="Số điện thoại"
            required
          />
          <button type="submit">Đăng nhập</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="confirmationCode"
            value={state.confirmationCode}
            onChange={handleChange}
            placeholder="Mã xác nhận"
            required
          />
          <button type="submit">Xác nhận</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;