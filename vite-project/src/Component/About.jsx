import React from 'react'
import "../Styles/About.css"



const About = ({Data}) => {


  let section=[];
  for (let i = 0; i <=3; i++) {
    section.push(
    <div className="AboutMain">
    <div className="AboutHeading">
    <img src={Data.AboutImg[i]} alt="random-image" className="About-image" />
    <h3 className="About7">{Data.AboutHeading[i]}</h3>
    <h5 className="About_para">{Data.AboutPara[i]}</h5>
    </div>
    </div>
    )
  }


  let Learning=[];
  for (let i = 0; i <=1; i++) {
    Learning.push(
    <div className="AboutMainLearning">
    <div className="AboutHeading1" >
    <img src={Data.AboutImg[i]} alt="random-image" className="About-image" />
    <h3 className="About7">{Data.AboutHeading[i]}</h3>
    <h5 className="About_para">{Data.AboutPara[i]}</h5>
    </div>
    </div>
    )
  }

  return (
<>
<div className="About">
<div>
<p  className="AboutLearning">Learning engineered to fit the
exact needs of the industry</p>
</div>
<div className="AboutFlex1">
{section}
</div>
<div className="AboutJourney"  >
<div>
<p className="AboutPara">Get started on your journey towards unlocking hundreds of
job opportunities with Data Science Acedmy</p>
<button  className="sign_in">Sign Up</button>
</div>
<div  className="AboutFlex1">{Learning}</div>
</div>
</div>
</>
  )
}
 
export default About