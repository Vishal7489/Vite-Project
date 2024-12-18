import React from 'react'
import "../Styles/Service.css"
import { Link } from "react-router-dom";


const Service = ({Data}) => {

 
return (
<div className="Service">
<div className="Service_Upper_Heading">
<h1 className="Service10">Start your AI journey</h1>
<h3 className="Service15">Quickstart with our highly rated courses in AI, ML and data science</h3>
</div>
<div className="Service3">
<div className="Service4">
<img src={Data.courseimage[0]} alt="random-image" className="image_Service"/>
<h2 className="Service_Heading">{Data.HeadingTitle[0]}</h2>
<h6 className="Service_para">{Data.ServicePara}</h6>
<div className="Service6">
<h4 className="Service5">Python</h4>
<h4 className="Service5">Pandas</h4>
<h4 className="Service8">Data Visualization</h4>
</div>
<div>
<Link to="/DataScience">
<button className="Enroll" >Enroll Now</button> 
</Link>
</div>
</div>  
       
<div className="ServicePython">
<img src={Data.courseimage[1]} alt="random-image" className="image_Service"/>
<h2 className="Service_Heading">{Data.HeadingTitle[1]}</h2>
<h6 className="Service_para">{Data.ServicePara}</h6>
<div className="Service6">
<h4 className="Service5">Python</h4>
<h4 className="Service5">Pandas</h4>
<h4 className="Service8">Data Visualization</h4>
</div>
<div>
<Link to="/PythonCourse">
<button className="Enroll">Enroll Now</button> 
</Link>
</div>



 </div>
  <div className="ServiceFullStack">
  <img src={Data.courseimage[2]} alt="random-image" className="image_Service"/>
  <h2 className="Service_Heading">{Data.HeadingTitle[2]}</h2>
  <h6 className="Service_para">{Data.ServicePara}</h6>
  <div className="Service6">
  <h4 className="Skill1">Mongodb</h4>
  <h4 className="Skill">Express</h4>
  <h4 className="Skill2">React</h4>
  <h4 className="Skill3">Node-js</h4>
  </div>
  <div>
  <Link to="/FullStackCourse">
  <button className="Enroll">Enroll Now</button> 
  </Link>
  </div>

  </div>
  </div>
 </div>
  )
}

export default Service