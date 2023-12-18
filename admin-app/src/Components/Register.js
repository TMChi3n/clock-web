import LoginService from '../Service/LoginService';
import {Link, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';


const RegisterAccount = () => {
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();
  
    const handleRegister = async (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      try {
        const response = await LoginService.register(email, username, password);
        if (response.status === 200) {
          alert('Đăng ký thành công');
          setShowMessage(true);
  
          // Redirect to the login page after showing the message for a few seconds
          navigate('/')
        } 
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert('Tài khoản đã tồn tại. Vui lòng sử dụng tài khoản khác');
          e.target.username.value = '';
          e.target.email.value = '';
          e.target.password.value = '';
          
        } else {
          console.log("Error: ", error);
          setMessage('An error occurred');
        }
        setShowMessage(true);
      }
    };
        
  
      return (
          <div className='nav'>
              <div class='register-frame'>
                  <h2>Đăng ký</h2>
                  <div class='register-container'>
                      <form onSubmit={handleRegister}>
                          <input type="text" name="email" placeholder="Email" required />
                          <input type="text" name="username" placeholder="User name" required />
                          <input type="password" name="password" placeholder="Password" required />
                          <button type="submit">Đăng ký</button>
                          
                      </form>
                  </div>
              </div>
          </div>
      );
  }
  
  export default RegisterAccount;