import React from 'react'
import "../Styles/Footer.css"
import { FaSquareInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer= () => {
  return (
  <div className="Footer">
  <div>
  <h2 className="Footer_Heading">Follow us on social media</h2>
  </div>
  <div className="Footer1">
  <div className="Footer2">
    <FaSquareInstagram  className="Footer_icons"/>
  </div>
  <div className="Footer2">
    <SiFacebook className="Footer_icons"/>
  </div>
  <div  className="Footer2">
    <FaLinkedin  className="Footer_icons"/>
  </div>
  <div  className="Footer2" >
   <IoLogoYoutube className="Footer_icons"/>
  </div>
 


  </div>

 <div className="Footer3">
  <ul className="Footer_Point">
  <li className="FooterPoints">About Us</li>
  <li className="FooterPoints">Contact Us</li>
  <li className="FooterPoints">Privacy Policy</li>
  <li className="FooterPoints" >Refund Policy</li>
  <li className="FooterPoints">Terms & condition</li>
  </ul>
</div>
   </div>
  )
}

export default Footer