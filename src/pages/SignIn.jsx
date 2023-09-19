import React from 'react'
import Drawer from '../components/Drawer'

function SignIn() {
  return (
    <div className='pl-12'>
       <section className='bg-transparent'>
        <h1 className='mt-16 text-2xl font-bold text-white/60 '>DUMMY TITLE</h1>
        <h2 className='text-2xl tracking-wide text-white/60'>Let's create your account</h2>
       </section>

       <form className='mt-16'>
        <label className=' text-base text-white'>Enter your email address...</label><br/>
        <input type="email" name="email" id="email" className='bg-gray-100 mt-5 py-2 px-5 w-80 rounded-md  ' placeholder='xxx@aaaa.com'  /> <br/>

        <button type="submit" className='bg-[#f6bf53] py-3 px-24 mt-16 rounded-full font-semibold text-base'>Send Magic Link</button>
       </form>

       
    </div>
  )
}

export default SignIn