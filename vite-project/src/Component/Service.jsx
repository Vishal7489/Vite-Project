import React from 'react'
import "../Styles/Service.css"
import { Link } from "react-router-dom";


const Service = ({Data}) => {

let service=[];
for(let i=0; i<3; i++){
  service.push(
<div className="Service7">
<div className="Service4">
<img src={Data.courseimage[i]} alt="random-image" className="image_Service"/>
<h2 className="Service_Heading">{Data.HeadingTitle[i]}</h2>
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
</div>
  )
}

return (
<div className="ServiceMain">
<div>
  <h1 id="ServiceCourseHeading">Start your AI journey</h1>
  <p  id="ServiceCoursePara">Quickstart with our highly rated courses in AI, ML and data science</p>
</div>
<div className="Service">
{service}
</div>
</div>
  )
}

export default Service