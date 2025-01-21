import React, { useState } from "react";
import "../Styles/LoginSection.css";

const Popup = ({onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content success">
        <div className="popup-header">
          <div className="success-icon">&#10004;</div>
        </div>
        <h2>Success!</h2>
        <p>Your login was successful! Welcome back.</p>
        <button className="popup-button success" onClick={onClose}>
          OKAY
        </button>
      </div>
    </div>
  );
};

const LoginSection = () => {
  const [showPopup, setShowPopup] = useState(false);
 

  const handleLogin = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="LoginMain">
      <form  onSubmit={handleLogin}>
        <div className="Login">
        <img src="https://static.vecteezy.com/system/resources/previews/002/173/392/original/student-studying-at-home-free-vector.jpg   "  alt="random-image" className="LoginImage"/>
        </div>
        <div className="LoginCard">
        <h2 className="LoginHeading">Login</h2> 
        <div>
        <label className="LoginUser">UserName<span className="Loginstar">*</span>   </label>
        <input type="text" placeholder="Enter your name"  className="LoginInput"/>
        </div>
        <div>
        <label className="LoginPassword">Password<span className="Loginstar">*</span>   </label>
        <input type="text" placeholder="Enter your password" className="LoginInput1"/>
        </div>
        <div>
        <label className="ForgotPassword">Forgot Password</label>
        </div>
        <div>
          <button className="LoginButton">Login</button>
        </div>
        </div>
      </form>

      {showPopup && (
        <Popup 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </div>
  );
};

export default LoginSection;
