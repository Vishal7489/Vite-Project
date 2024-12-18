import React from 'react'
import "../Styles/Header.css"
import SignUp  from "../Component/SignUp.jsx"

const Header = () => {
  return (
    <div>
    <div className="Header">
    <div className="Header1">
    <div className="Header2">
    <h1 className="Header3">AI PROFESSIONAL BY THE DATA
     SCIENCE ACEDMY</h1>  
    <ul className="Header5">
    <li className="Header4">Comprehensive Curriculum: Learn from Basics to Advanced<br/>
    AI/ML Concepts</li>
    <li className="Header4">Hands-On Experience: Gain In-Depth Understanding through Project-Based Learning</li>
    <li className="Header4">Embark on Your AI/ML Journey Today: Enroll Now and Transform Your Future!</li>
    <li className="Header4">Expert Instructors: Learn from Industry Professionals with<br/>
    Years of Experience</li>
    </ul>
    </div>
     <div><SignUp/></div>
    </div>
    </div>

    
    </div>
  )
}

export default Header