import React,{useState} from 'react'
import "../Styles/SignIn.css"


const SignIn = () => {

const [name,setName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [confirmPass,setconfirmPass]=useState();


const handleSubmit =(event)=>{
event.preventDefault();
if(name && email && password && confirmPass){

if(password===confirmPass){
    alert("Sign Up Successfully");
}
else{
  alert("ERR:Password & ConfirmPassword must be same");
}
}else{
  alert("All fields are mandatory"); 
}
}

return (
<div className="SignIn">
<form onSubmit={handleSubmit}  className="SignInMain"   >
<p className="SignInHeading">Sign Up</p>
 <div>
<p className="SignInName">Name</p>
<input type="text"  onChange={(event)=>setName(event.target.value)} placeholder="Enter your name" className="InputName"  />
<p  className={name?"data":"noData"}  >{name? "" :"Name is required"}</p>
 </div>   
 <div>
<p  className="SignInEmail">Email</p>
<input type="email" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email"  className="InputEmail" />
<p  className={name?"data1":"noData1"}>{email? "" :"Email is required"}</p>
 </div>   
 <div>
<p className="SignInPassword">Password</p>
<input type="password" onChange={(event)=>setPassword(event.target.value)}  placeholder="Enter your password"  className="InputPassword"    />
<p  className={name?"data2":"noData2"}  >{password?"" :"Password is required"}</p>
 </div> 
 <div>
<p  className="SignInConfirm">Confirm Password</p>
<input type="confirm password" onChange={(event)=>setconfirmPass(event.target.value)}  placeholder="Confirm your password" className="InputConfirm"   />
<p  className={name?"data3":"noData3"} >{confirmPass?"":" Password is required"}</p>
</div>   
<div>
<button className="SignInButton">SignUp</button>
 </div>
</form>
</div>
  )
}

export default SignIn