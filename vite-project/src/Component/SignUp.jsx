import React,{useState} from 'react'
import "../Styles/SignUp.css"

const SignUp = () => {


const [email,setEmail]=useState();
const [graduation,setGraduation]=useState();
const [job,setJob]=useState();
const [mobile,setMobile]=useState();



const handleSubmit=(event)=>{
event.preventDefault();
if(email && graduation && job && mobile){

  const mobilePattern = /^[0-9]{10}$/; 
  
  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number");
  } else {
    alert("Successfully SignIn");
  }
} else {
  alert("All fields are mandatory");
}

}


  return (

  <div  className="SignUp_Main"   >
  <div className="SignUp">
  <h2 className="SignUp_Heading">Book Your Mentor Call Now</h2>
  <form  onSubmit={handleSubmit}>
  <div className="form1" >
  <p className="E-mail">Email ID*</p> 
  <input type="text" className="input1"   onChange={(event)=>setEmail(event.target.value)}  placeholder="Enter your email"/>   
  <p className="Graduation">Graduation Year*</p>
  <input type="text" className="input2" name="input_graduation"  onChange={(event)=>setGraduation(event.target.value)}  required placeholder="Enter graduation year"/>
  <p className="Title">Job Title*</p>
  <input type="text" className="input3" name="job_Title"    onChange={(event)=>setJob(event.target.value)}   required placeholder="Enter job title"/>
  <p className="Mobile">Mobile Number*</p>
  <input type="text" className="input4" name="mobile_no"  onChange={(event)=>setMobile(event.target.value)}  reqired placeholder="Phone Number"/>
  </div>
    <button className="submit">Submit</button>
    </form>
    <h4 className="AccountCreation">
    By creating an account I have read and agree to TDS Academy<br/>
    <span id="term">Terms</span> and<span id="term1"> Privacy Policy</span>
      </h4>
    </div>
    </div>
  )
}

export default SignUp