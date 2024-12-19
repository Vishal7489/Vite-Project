import React from 'react'
import "../Styles/DataScience.css"
import {Link} from "react-router-dom"



const DataScience = ({Data}) => {

return (
<div className="DataScience">
<div className="DataMain">
<div>
<h2 id="Data">{Data.HeadingTitle[0]}</h2>
</div>
<div className="BulletPoints"    >
{Data.BulletPoints.map((item,index)=>(
<h2  id="Data1" key={index}>{item}</h2>
))}
<div>
  <h2 className="DataPrice">{Data.Price[0]}</h2>
  <Link to="/PaymentSection">
  <button id="Enroll">Enroll now</button>
  </Link>
</div>
</div>
<div>
<img src={Data.courseimage[0]} className="DataImage"/>
</div>
</div>

<div>
 <h2 id="DataHeadingCourse">{Data.Heading[0]}</h2>
</div>
<div>
<h2 id="DataHeadingCourse1">{Data.Heading[1]}</h2>
<ul>
{Data.coursePoints.map((item,index)=>(
<li key={index}   className="DataHeadingCourse2">{item}</li>
))}
</ul>
<h2 id="DataHeadingCourse3">{Data.Heading[2]}</h2>
<h2 id="DataHeadingCourse4">{Data.Heading[3]}</h2>
<ul>
{Data.requirements.map((item,index)=>(
<li key={index}  id="DataHeadingCourse5" >{item}</li>
))}
</ul>
<div>
  <h2 id="DataHeadingCourse6">{Data.Heading[4]}</h2>
  <h2 id="DataHeadingCourse7">{Data.HeadingTitle[0]}</h2>
  <ol>
  {Data.HeadingItems.map((item,index)=>(
    <h2 key={index}  id="DataHeadingCourse8">{item}</h2>
  ))}
  </ol>
</div>
</div>

</div>

  )
}

export default DataScience