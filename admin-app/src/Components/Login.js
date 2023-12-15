import LoginService from '../Service/LoginService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginAccount = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await LoginService.login(email, password);
      if (response.data === 'Login successful') {
        setMessage('Login successful');
        // Redirect to ListProduct after successful login
        navigate('/'); // Assuming ListProduct is the root route
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      console.log("Error: ", error);
      setMessage('An error occurred');
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      {message && <div>{message}</div>}
      <div>
        <form onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}

export default LoginAccount;
