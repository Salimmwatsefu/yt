import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';


function Hero() {

    const transformStyle = {
        transform: 'none'
    }

    const customStyle = {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1.075)',
      };
  return (
    <div className=' h-[100vh] flex bg-coverImage bg-cover'>

        <div className='w-full text-center pt-20'>
            <h1 className='text-gradient font-medium  text-7xl  tracking-normal mb-5 '>All you need to create <br/>amazing videos</h1>
            <p className='mx-auto hidden text-2xl text-gray-50 lg:block'>Get the highest quality assets created by top industry artists</p>
            <div className=' mt-10'>
                <button className='flex fade-in justify-center items-center font-bold rounded-full bg-[#f6bf53] transition-smooth text-primary bg-accent transition-all duration-300 hover:bg-accent-100 py-2.5 px-12 text-sm leading-4 m-auto outline-0' type='button'>
                    <span className='relative flex min-h-5 items-center justify-center gap-1'>
                        <span className=' whitespace-nowrap'>Start free now</span>
                    </span>
                </button>

            </div>

            <div class="absolute top-20 z-0 hidden h-full w-full flex-1 lg:block">
                <div class="relative h-full w-full overflow-hidden ">
                    <div style={customStyle} class="h-full w-full origin-top">
                        <div class="flex h-full w-full justify-center">
                            <div class="flex aspect-[11/6] max-w-full flex-col">
                                <div class="relative mt-auto mb-[3.75%] aspect-[11/6] w-full">
                                    <div style={transformStyle} class="transition-smooth pointer-events-none absolute bg-contain bg-center bg-no-repeat bg-[url('https://artlist-dev.imgix.net/artlist/home/hero/floating-music.png?auto=format')] left-[8%] top-[24%] w-[15%] h-[30%]">
                                        </div>
                                        <div style={transformStyle} class="transition-smooth pointer-events-none absolute bg-contain bg-center bg-no-repeat bg-[url('https://artlist-dev.imgix.net/artlist/home/hero/floating-footage.png?auto=format')] right-[2%] top-[29%] w-[20%] h-[23%]"></div>
                                        <div style={transformStyle} class="transition-smooth pointer-events-none absolute bg-contain bg-center bg-no-repeat bg-[url('https://artlist-dev.imgix.net/artlist/home/hero/floating-templates.png?auto=format')] left-[4%] bottom-[15%] w-[13%] h-[22%]"></div>
                                        <div style={transformStyle} class="transition-smooth pointer-events-none absolute bg-contain bg-center bg-no-repeat bg-[url('https://artlist-dev.imgix.net/artlist/home/hero/floating-sfx.png?auto=format')] right-[7%] bottom-[11%] w-[10%] h-[26%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        {/*<div>

            <div className='absolute -mt-[500px] ml-[360px]'>
                <div className='bg-orange-400 px-4 pt-3 pb-2 rounded-xl text-sm font-semibold'>
                    <span className=' align-middle justify-center flex pb-1'><AiOutlineYoutube/></span>
                    <span>Youtube</span>
                </div>
            </div>

            <div className='absolute -mt-[190px] ml-32'>
                <div className=' bg-gray-300 px-2 pt-6 pb-2 h-20 rounded-xl text-sm font-semibold'>
                    <span className=' align-middle justify-center flex pb-2 text-lg'><FaTiktok/></span>
                    <span>TikTok</span>
                </div>
            </div>
  </div> */}

    </div>
  )
}

export default Hero