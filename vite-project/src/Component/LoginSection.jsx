import React from 'react'
import "../Styles/LoginSection.css"
import img2 from "../assests/image2.jpg"
import { FaRegCheckSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";

const LoginSection = () => {
  return (
    <div className="LoginSection">
    <div className="LoginCard">
    <div className="Login">
    <img src={img2} alt="random-image" className="LoginImage"/>
    <form>
    <h5 className="LoginAccount">Create an account</h5>
    <h5 className="LoginPara">Already have an account? <span className="Log">Log in</span></h5>
    <div>
    <input type="text" placeholder="First name" className="LoginFirstName"  />
    <input type="text" placeholder="Last name"  className="LoginLastName"   />
    </div>
    <div>
    <input type="text" placeholder="Email" className="LoginEmail"/>
    </div>
    <div>
    <input type="text" placeholder="Enter your password" className="LoginPassword"/> 
    </div>
   <div>
   <div>
   <FaRegCheckSquare  className="LoginIcons"/>
   </div>
   <div>
   <h6 className="LoginCondition">I agree to the <span className="LoginTerm">Term&condition</span></h6>
   </div>
   <div>
  <button className="LoginButton">Create account</button>
   </div>
   <div>
   <span><h4 className="Register"></h4> <h5 className="LoginRegister">Or register with</h5> <h4 className="Register1"></h4> </span>
   </div>
   <div>

  </div>
  <div className="Login_Icons">
  <div className="LoginMainIcon">
  <FcGoogle  className="GoogleIcon" />
  <h5 className="GoogleHeading">Google</h5>
  </div>
  <div  className="LoginMainIcon1">  
  <SiApple  className="GoogleIcon"/>
  <h5 className="GoogleHeading">Apple</h5>
  </div>
  </div>
   </div>

    </form>
    </div>
    </div>
    </div>
  )
}

export default LoginSection