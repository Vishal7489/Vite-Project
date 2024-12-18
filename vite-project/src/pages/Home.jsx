import React from 'react'
import Header from "../Component/Header.jsx"
import About from "../Component/About.jsx"
import Service from "../Component/Service.jsx"
import data from "../data/data.json"

function Home() {
  return (
    <div>
    <Header/>
    <About Data={data.aboutPython}/> 
    <Service Data={data.aboutPython}/>
    </div>
  )
}

export default Home