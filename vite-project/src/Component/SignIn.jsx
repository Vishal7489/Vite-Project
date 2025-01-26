import React from 'react'
import "../Styles/SignIn.css"
import { IoLogoGoogle } from "react-icons/io5";
import { RiAppleLine } from "react-icons/ri";
import img3 from "../assests/image3.jpg"

const SignIn = () => {
  return (
  <div className="SignIN">
  <div className="SignInCard"  >
  <div>
    <img src={img3} alt="random-image" className="ImageSignIn"/>
    </div>
  <form className="SignInForm">
  <h1 className="SignInHeading">Sign up account</h1>
  <h6 className="SignInPara">Enter your personal data to create your account</h6>
  <div>
  <IoLogoGoogle className="SignInIcon" />
  <RiAppleLine className="AppleIcon"/>
  </div>
  <div>
  <span><h4 className="SignLine"></h4> <h5 className="SignInRegister">or</h5> <h4 className="SignLine1"></h4> </span>
  </div>
  <div>
  <input type="text" placeholder="Username" className="SignInName"  />
   </div>
   <div>
   <input type="text" placeholder="Email address" className="SignInAddress"/>
   </div>
   <div>
    <input type="text" placeholder="Enter your password" className="SignInPassword"/>
   </div>
   <div>
    <button className="SignInButton">Sign Up</button>
    </div>
    <div className="AccountPara">Already have an account<button className="AccountButton">Log in</button></div>
    </form>
    </div>
    </div>
  )
}

export default SignIn