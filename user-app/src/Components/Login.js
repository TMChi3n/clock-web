import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../Service/LoginService';
import '../css/Login.css';

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
          alert('Đăng nhập thành công');
          // Redirect to ListProduct after successful login
          navigate('/'); // Assuming ListProduct is the root route
        } else {
          alert('Tài khoản hoặc mật khẩu không đúng');
          event.target.email.value = '';
          event.target.password.value = '';
        }
      } catch (error) {
        console.log("Error: ", error);
        setMessage('An error occurred');
      }
    };
  
    return (
      <div className='nav'>
        <div class='login-frame'>
          <h2>Login</h2>
          <div class='login-container'>
            <form onSubmit={handleLogin}>
              <input type="text" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Đăng nhập</button>
              <p>Bạn không có tài khoản? Hãy <Link to='/register'>đăng ký</Link> để đăng nhập</p>
            </form>
          </div>
        </div>
      </div>

    );
  }
  
  export default LoginAccount;