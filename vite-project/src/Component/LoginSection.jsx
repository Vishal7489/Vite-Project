import React,{useState} from 'react';
import "../Styles/LoginSection.css";

const LoginSection = () => {

const [email,setEmail]=useState();
const [password,setPassword]=useState();

const handleSubmit=(event)=>{
event.preventDefault();
if(email && password){

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
    }else{
  alert("Login Successfully");
}
}
else{
alert("All fields are mandatory");
}
}




return (
    <div className="Login">
    <div className="login-container">
     <div>
    <h2>Login</h2>
     </div>
    <form action="#" method="post" onSubmit={handleSubmit}  >
        <input type="email" className="input-field" placeholder="Email" onChange={(event)=>setEmail(event.target.value)} /><br/>
        <input type="password" className="input-field" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}    /><br/>
        <button type="submit" className="login-btn">Login</button>
    </form>
</div>
</div>
)
}

export default LoginSection