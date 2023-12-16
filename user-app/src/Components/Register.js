import LoginService from '../Service/LoginService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterAccount = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await LoginService.register(email, username, password);
            if (response.status === 200) {
                setMessage('Register successful');
                // Redirect to the login page after successful registration
                navigate('/login');
            }
        } catch (error) {
            console.log("Error: ", error);
            setMessage('An error occurred');
        }
    };

    return (
        <div className='container'>
            <h2>Đăng ký</h2>
            {message && <div>{message}</div>}
            <div>
                <form onSubmit={handleRegister}>
                    <input type="text" name="email" placeholder="Email" required />
                    <input type="text" name="username" placeholder="username" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterAccount;
