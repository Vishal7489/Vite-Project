import React from 'react'
import "../Styles/SignUp.css"

const SignUp = () => {
  return (
  <div  className="SignUp_Main"   >
  <div className="SignUp">
  <h2 className="SignUp_Heading">Book Your Mentor Call Now</h2>
  <form>
  <div className="form1" >
  <p className="E-mail">Email ID*</p> 
  <input type="text" className="input1" name="input_email" required placeholder="Enter your email"/>   
  <p className="Graduation">Graduation Year*</p>
  <input type="text" className="input2" name="input_graduation" required placeholder="Enter graduation year"/>
  <p className="Title">Job Title*</p>
  <input type="text" className="input3" name="job_Title" required placeholder="Enter job title"/>
  <p className="Mobile">Mobile Number*</p>
  <input type="text" className="input4" name="mobile_no" reqired placeholder="Phone Number"/>
  </div>
  </form>
    <button className="submit">Submit</button>
    <h4 className="AccountCreation">
    By creating an account I have read and agree to TDS Academy<br/>
    <span id="term">Terms</span> and<span id="term1"> Privacy Policy</span>
      </h4>
    </div>
    </div>
  )
}

export default SignUp