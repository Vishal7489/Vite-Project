import React from 'react'
import "../Styles/Navbar.css"
import {Link} from "react-router-dom"
import img1 from "../assests/image1.png"


const Navbar = () => {
  return (
  <div className="Navbar_Main">
  <div className="Navbar">
   <div className="NavbarHeading">
   <div>
  <img src={img1} alt="random-image" className="Nav-image"/> 
  </div>
  <div>
  <h1 className="Navbar_Heading">TDS Academy</h1>
  </div>
   </div>
   <div className="NavbarHeading1">
  <Link to="/LoginSection">
  <button className="Button" >Login</button>
   </Link>
   <button className="Button1">Sign-up</button>
   </div>
  </div>
  </div>


  )
}

export default Navbar