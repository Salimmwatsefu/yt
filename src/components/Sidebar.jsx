import React from 'react'
import {BiSolidDashboard} from "react-icons/bi"
import { Link } from 'react-router-dom'

function Sidebar(props) {

  const sidebarStyle = {
    backgroundColor: props.bgColor || 'black', // Default to black if no bgColor prop is provided
    height: '92vh',
    width: '240px',
    position: 'fixed',
  };

    
  return (

    <div style={sidebarStyle} >
      <h1 className='pt-10 text-2xl font-bold text-white/60 pl-10 '>DUMMY TITLE</h1>
      <nav className='mt-10'>

      <Link to="/" className="flex items-center gap-2 rounded-lg  w-52 mx-3 bg-gray-100 px-5 py-2 text-black">
              <BiSolidDashboard className="text-gray-800 text-2xl" />
              <span className="text-sm font-semibold">{props.dashboard}</span>
      </Link>


{/*first link */}
      <Link to={props.link1}>
      
      <summary
        className="flex cursor-pointer items-center  justify-between rounded-lg px-4 py-2 mt-12 w-40 ml-8 text-white hover:bg-gray-100 hover:text-gray-700"
      >
        <div className="flex  gap-2">
        <BiSolidDashboard className='text-gray-500 text-2xl'/>
          
          <span className="text-sm font-medium mt-[2px] ">{props.linkText1}</span>
        </div>
      </summary>
      </Link>

      {/*second link */}

      <Link to={props.link2}>
      
      <summary
        className="flex cursor-pointer items-center  justify-between rounded-lg px-4 py-2 mt-5 w-40 ml-8 text-white hover:bg-gray-100 hover:text-gray-700"
      >
        <div className="flex  gap-2">
        <BiSolidDashboard className='text-gray-500 text-2xl'/>
          
          <span className="text-sm font-medium mt-[2px] ">{props.linkText2}</span>
        </div>
      </summary>
      </Link>

      {/*third link */}

      <Link to={props.link3}>
      
      <summary
        className="flex cursor-pointer items-center  justify-between rounded-lg px-4 py-2 mt-5 w-40 ml-8 text-white hover:bg-gray-100 hover:text-gray-700"
      >
        <div className="flex  gap-2">
        <BiSolidDashboard className='text-gray-500 text-2xl'/>
          
          <span className="text-sm font-medium mt-[2px] ">{props.linkText3}</span>
        </div>
      </summary>
      </Link>


      {/*fourth link */}

      <Link to={props.link4}>
      
      <summary
        className="flex cursor-pointer items-center  justify-between rounded-lg px-4 py-2 mt-5 w-40 ml-8 text-white hover:bg-gray-100 hover:text-gray-700"
      >
        <div className="flex  gap-2">
        <BiSolidDashboard className='text-gray-500 text-2xl'/>
          
          <span className="text-sm font-medium mt-[2px] ">{props.linkText4}</span>
        </div>
      </summary>
      </Link>
      </nav>

      </div>
  )
}

export default Sidebar