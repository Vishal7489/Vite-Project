import React from 'react'
import "../Styles/About.css"

const About = ({Data}) => {
  return (
  <div className="About">
  <div>
  <h1 className="About1">Learning engineered to fit the <br/>
  exact needs of the industry</h1>
  </div>

 <div className="About2">
 <div className="About3">
 <img src={Data.AboutImg[0]} alt="random-image" className="About-image"/> 
 <h3 className="About7">{Data.AboutHeading[0]}</h3>
<h5 className="About_para">{Data.AboutPara[0]}</h5>
</div>  

 <div className="About3">
 <img src={Data.AboutImg[1]}   alt="random-image" className="About-image"/>
 <h3 className="About7">{Data.AboutHeading[1]}</h3>   
<h5 className="About_para">{Data.AboutPara[1]}</h5>
 </div>

<div className="About3">
<img src={Data.AboutImg[2]} alt="random-image" className="About-image"/>
<h3 className="About7">{Data.AboutHeading[2]}</h3>
<h5 className="About_para">{Data.AboutPara[2]}</h5>
</div>

<div className="About3">
<img src={Data.AboutImg[3]} alt="random-image" className="About-image"/>
<h3 className="About7">{Data.AboutHeading[3]}</h3>
<h5  className="About_para">{Data.AboutPara[3]}  </h5>
</div>
 </div>

<div className="About4">
<div className="About5">
<h4 className="About8">Get started on your journey towards
   unlocking hundreds of<br/>
job opportunities with Data Science Acedmy</h4>
<button className="sign_in">Sign up</button>
</div>

<div className="About6">
<img src={Data.AboutImg[4]} alt="random-image" className="About-image"/>  
<h3 className="About7">{Data.AboutHeading[4]}  </h3>  
<h5 className="About_para">{Data.AboutPara[4]}</h5>
</div>
<div className="About10">
 <img src={Data.AboutImg[5]} alt="random-image" className="About-image"/>  
 <h3 className="About13">{Data.AboutHeading[5]}</h3> 
 <h5 className="About_para">{Data.AboutPara[5]}</h5>
</div>
</div>



  </div>
  )
}

export default About