import React from 'react';
import "../Styles/LoginSection.css";

const LoginSection = () => {
return (
    <div className="Login">
    <div className="login-container">
     <div>
    <h2>Login</h2>
     </div>
    <form action="#" method="post">
        <input type="email" className="input-field" placeholder="Email" required/><br/>
        <input type="password" className="input-field" placeholder="Password" required/><br/>
        <button type="submit" className="login-btn">Login</button>
    </form>
</div>
</div>
)
}

export default LoginSection