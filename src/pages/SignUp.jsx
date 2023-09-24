import React, { useState } from 'react'

function SignUp() {

  const [selectedRole, setSelectedRole] = useState('Creator');

  const handleRoleChange = () => {
    setSelectedRole(e.target.value)
  }


  return (
    <div className='pl-12'>
       <section className='bg-transparent'>
        <h1 className='mt-16 text-2xl font-bold text-white/60 '>DUMMY TITLE</h1>
        <h2 className='text-2xl tracking-wide text-white/60'>Let's create your account</h2>
       </section>

       <form className='mt-14'>
        <label className=' text-white text-lg font-normal'>Sign in as:</label><br/>
        <input type="radio" name="role" value={'Creator'} id="" className='mr-1' onChange={handleRoleChange} checked  /><span className=' text-white mr-6'>Creator</span>
        <input type="radio" name="role" value={'Editor'} id=""  className='mr-1' onChange={handleRoleChange}  /><span className='text-white'>Editor</span>
        <br/>
        <div className='mt-7'>
        <label className=' text-base text-white '>Enter your email address...</label><br/>
        <input type="email" name="email" id="email" className='bg-gray-100 mt-5 py-2 px-5 w-80 rounded-md  ' placeholder='xxx@aaaa.com'  /> <br/>
        </div>

        <button type="submit" className='bg-[#f6bf53] py-3 px-24 mt-16 rounded-full font-semibold text-base'>Send Magic Link</button>

        <p className="text-xs text-gray-500 text-center mt-9 -ml-14">
          Do not have an account?
          <button className="underline text-yellow-600 ml-2 font-semibold">
            Sign up
          </button>
        </p>
       </form>

       
    </div>
  )
}

export default SignUp