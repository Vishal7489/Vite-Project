import React from 'react'
import "../Styles/About.css"




const About = ({Data}) => {
return(
<div className="About">
<p className="AboutMainPara">Learning engineered to fit the<br/>
exact needs of the industry</p>
<div className="AboutMainCard">
{Data.map((item,index)=>(
<div key={index} className={`AboutCard ${index === 4 ? 'FifthCard' : ''}`}  >
{item.imgUrl && index !== 4 && (
<img src={item.imgUrl} alt="random-image" className="AboutImage"/>
)}
<h2 className="AboutHeading">{item.heading}</h2>
<p className={`AboutPara ${index===4?'FifthPara': ''}`}>{item.para}</p>
{index === 4 && (
<button className="AboutButton">Sign Up</button>
  )}
</div>
 ))}
 </div>
 </div>
)

  
}
 
export default About