import React,{useState} from 'react'
import "../Styles/SignIn.css"


const SignIn = () => {

  const Popup = ({ type, message, onClose }) => {
    return (
      <div className="popup-overlay">
        <div className={`popup-content ${type}`}>
          <button className="close-button" onClick={onClose}>&#10004;</button>
          <h2>Success</h2>
          <p>Your SignUp was successful! Welcome back.</p>
          <button className="popup-button success" onClick={onClose}>
          OKAY
        </button>
        </div>
      </div>
    );
  };
  


const [name,setName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [confirmPass,setconfirmPass]=useState();
const [showPopup,setshowPopup]=useState(false);


const handleSubmit =(event)=>{
event.preventDefault();
setshowPopup(true);
}

return (
<div className="SignIn">


<form onSubmit={handleSubmit}>
<div>
<img src="https://th.bing.com/th/id/OIP.N0QJ8hN-UBQOA3TCnOYg2QHaDt?rs=1&pid=ImgDetMain" alt="random-image" className="AccountImage"/>
</div>
<div className="FormSubmit">
<div>
 <h3 className="AccountHeading">Create an account</h3>
 <p className="SignPara">Let's get started your 30 days free trail</p>
</div>
<div>
<label className="name">Name<span className="Loginstar">*</span></label>
<input type="text" placeholder="Enter your name" className="InputField"/>
</div>
<div>
<label className="email">Email<span className="Loginstar">*</span></label>
<input type="text" placeholder="Enter your Email" className="InputField1"/>
</div>
<div>
<label className="password">Password<span className="Loginstar">*</span></label>
<input type="text" placeholder="Enter your Password" className="InputField2"/>
</div>
<div>
<button  className="ButtonSignIn1">Create Account</button>
</div>
<button  className="ButtonSignIn">Sign In</button>
</div>
</form>
{
  showPopup&&<Popup type="success"  message="Login Successful!" onClose={() => setshowPopup(false)} />
}
</div>
  )
}

export default SignIn