import React from 'react'
import logo from '../assets/logo.png'
const Nav = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-10 bg-white  '>
      <div className='bg-white  flex justify-center items-center font-koulen text-lg  border-b-2 border-orange-500  '>

        <div className=' flex justify-between items-center xl:w-[75%]   max-2xl:w-[96%] m-1  '>
          <div className='flex items-center gap-2 cursor-pointer'>
            <a href=""><img src={logo} alt="" className='w-[44px] h-[44px] ' /></a>
            <div className='lg:hidden text-xl'>ខេមបូរីផត</div>
          </div>



          <ul className='m-4 max-lg:hidden'>
            <li className='flex gap-2 items-center'>
              <a className='hover:text-orange-500  duration-200' href="#video">វីដេអូ</a> /
              <a className='hover:text-orange-500  duration-200' href=""> ថេប្លេត-កុំព្យូទ័រ</a> /
              <a className='hover:text-orange-500  duration-200' href=""> ភាពយន្ត</a> /
              <a className='hover:text-orange-500  duration-200' href=""> ទូរសព្ទ</a> /
              <a className='hover:text-orange-500  duration-200' href=""> ចំណេះដឹងទូទៅ</a> /
              <a className='hover:text-orange-500  duration-200' href=""> យានយន្ត</a> /
              <a className='hover:text-orange-500  duration-200' href=""> វិទ្យាសាស្រ្ត</a> /
              <a className='hover:text-orange-500  duration-200' href=""> កម្មវិធី-ហ្គេម</a> /
              <a className='hover:text-orange-500  duration-200' href=""> ឧប្បករណ៍អេឡិចត្រូនិក­</a>
            </li>
          </ul>

          <div className='flex items-center gap-2'>
            <div className=' w-[44px] h-[44px] rounded-full border-2 border-solid border-gray-200 max-sm:hidden'></div>
            <div className='lg:hidden h-[40px] w-[52px] rounded-md  border-2 border-solid border-gray-200'> </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav