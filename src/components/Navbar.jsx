import React, { useState } from 'react'
import { RiAccountCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Drawer from './Drawer'
import SignUp from '../pages/SignUp';

function Navbar() {
    const [isSignInOpen, setSignInOpen] = useState(false);

    const openSignIn = () =>{
        setSignInOpen(true)
    }

    const closeSignIn = () => {
        setSignInOpen(false)
    }
  return (
    <div className='bg-[#313131]'>
        <nav className='flex py-3'>
            <Link to={"/"}>
            <div className='ml-14'>
                <img src="" alt="logo" />
            </div>
            </Link>
            <div className='ml-[520px] '>
                <ul className='flex text-white/60 gap-5 text-sm font-medium'>
                    
                <Link to={"/creators"}><li>For Content creators</li></Link>
                <span className='border border-l-1 border-gray-300'></span>
                   
                    <Link to={"/editors"}><li className='ml-2'>For Video Editors</li></Link><span className='border border-l-1 border-gray-300'></span>
                    <li className='ml-5'>FAQ</li>
                </ul>
            </div>
            
            <button className='ml-28 font-medium text-sm text-white/60 ' onClick={openSignIn}>
                <span className='flex gap-2'>
                    <span className='text-xl'><RiAccountCircleFill/></span>
                    Sign in
                </span>
            </button>
           
        </nav>


        {/* Sign In Drawer component */}
        <Drawer isOpen={isSignInOpen} onClose = {closeSignIn}>
            <SignUp />
        </Drawer>

    </div>
  )
}

export default Navbar