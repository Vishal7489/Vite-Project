import React from 'react'
import "../Styles/Service.css"
import {Link} from "react-router-dom"
import 'react-loading-skeleton/dist/skeleton.css';


const Service = ({Data}) => {
return(
<div  className="Service">
<h1 className="ServiceMainHeading">Start your AI journey</h1>
<p className="ServiceMainPara">Quickstart with our highly rated courses in AI, ML and data science</p>
<div  className="ServiceMainCard" >
{
  Data.map((item, index) => (
<div className="ServiceCard" key={index}>
<img src={item.imgUrl} alt="random-image" className="ServiceCardImage"/>
<h2 className="ServiceHeading"  >{item.name}</h2>
<p  className="ServicePara">{item.para}</p>
<div className="ServiceCardHeading">
{item.headings.map((heading, idx) => (
<h3 key={idx} className="Heading">{heading}</h3>
))}
</div>
<Link to={item.link}>
<button className="EnrollButton">Enroll Now</button>
</Link>
</div>
))}
</div>

</div>
  )
}



export default Service