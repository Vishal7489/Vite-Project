import React,{useState} from "react";
import "../Styles/SignUp.css";

const SignUp = () => {


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



const [email,setEmail]=useState();
const [graduation,setGraduation]=useState();
const [title,setTitle]=useState();
const [mobile,setMobile]=useState();
const [showPopup,setshowPopup]=useState(false);

const handleSubmit=(event)=>{
  event.preventDefault();
  setshowPopup(true);
}

  return (
    <div className="SignUp_Main">
      <div className="SignUp">
        <h2 className="SignUp_Heading">Book Your Mentor Call Now</h2>
        <form className="form1" onSubmit={handleSubmit}>
          <p className="E-mail">Email ID*</p>
          <input 
           type="text"
            className="input1"
            name="input_email"
            required
            placeholder="Enter your email"
            onChange={(event)=>setEmail(event.target.value)}
          />
          <p className="Graduation">Graduation Year*</p>
          <input
            type="text"
            className="input2"
            name="input_graduation"
            required
            placeholder="Enter graduation year"
            onChange={(event)=>setGraduation(event.target.value)}
          />
          <p className="Title">Job Title*</p>
          <input
            type="text"
            className="input3"
            name="job_Title"
            required
            placeholder="Enter job title"
            onChange={(event)=>setTitle(event.target.value)}
          />
          <p className="Mobile">Mobile Number*</p>
          <input
            type="text"
            className="input4"
            name="mobile_no"
            reqired
            placeholder="Phone Number"
            onChange={(event)=>setMobile(event.target.value)}
          />
           <button className="submit">Submit</button>
        </form>
       
        <h4 className="AccountCreation">
          By creating an account I have read and agree to TDS Academy
          <br />
          <span id="term">Terms</span> and
          <span id="term1"> Privacy Policy</span>
        </h4>
      </div>
      {
  showPopup&&<Popup type="success"  message="Login Successful!" onClose={() => setshowPopup(false)} />
}
    </div>
  );
};

export default SignUp;
