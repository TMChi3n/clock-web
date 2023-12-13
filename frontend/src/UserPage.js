import React from 'react';
import { Link } from 'react-router-dom';



const UserPage = () => {
  return (
    <div>
      <h1>User</h1>
      <Link to="/user/login">
        <button>Đăng nhập</button>
      </Link>
      <Link to="/user/register">
        <button>Đăng ký</button>
      </Link>
    </div>
  );
};

export default UserPage;
