import React from 'react'
import Header from "../Component/Header.jsx"
import About from "../Component/About.jsx"
import Service from "../Component/Service.jsx"
import data from "../data/About.data.json"
import data2 from "../data/Service.data.json"

function Home() {
  return (
    <div>
    <Header/>
    <About Data={data.AboutDetail}/> 
    <Service Data={data2.ServiceDetail}/>
    </div>
  )
}

export default Home