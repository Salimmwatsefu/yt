import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Creators() {
  return (

    <div>
      <Sidebar 
      dashboard="Creators dashboard"
      linkText1="My Videos"
      link1="/link1"
      linkText2="Upload Video"
      link2="/creators/upload"
      linkText3="Third Link"
      link3="/link3"
      linkText4="Fourth Link"
      link4="/link4"
      
      />
      <Outlet />
    </div>
  )
}

export default Creators