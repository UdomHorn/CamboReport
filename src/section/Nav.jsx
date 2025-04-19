import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-10 bg-white  '>
      <div className='bg-white  flex justify-center items-center font-koulen text-lg  border-b-2 border-orange-500  '>

        <div className=' flex justify-between items-center xl:w-[75%]   max-2xl:w-[96%] m-1  '>
          <div className='flex items-center gap-2 cursor-pointer'>
            <NavLink to="/"><img src={logo} alt="" className='w-[44px] h-[44px]'/></NavLink>
            <div className='lg:hidden text-xl'>ខេមបូរីផត</div>
          </div>
          <ul className='m-4 max-lg:hidden'>
            <li className='flex gap-2 items-center'>
              <NavLink to="/videos" className='hover:text-orange-500  duration-200' >វីដេអូ</NavLink> /
              <NavLink to="/tablets" className='hover:text-orange-500  duration-200' > ថេប្លេត-កុំព្យូទ័រ</NavLink> /
              <NavLink to="/movies" className='hover:text-orange-500  duration-200' > ភាពយន្ត</NavLink> /
              <NavLink to="/telephones" className='hover:text-orange-500  duration-200' > ទូរសព្ទ</NavLink> /
              <NavLink to="/general" className='hover:text-orange-500  duration-200' > ចំណេះដឹងទូទៅ</NavLink> /
              <NavLink to="/vehicles" className='hover:text-orange-500  duration-200' > យានយន្ត</NavLink> /
              <NavLink to="/sciences" className='hover:text-orange-500  duration-200' > វិទ្យាសាស្រ្ត</NavLink> /
              <NavLink to="/softwaregames" className='hover:text-orange-500  duration-200' > កម្មវិធី-ហ្គេម</NavLink> /
              <NavLink to="/electronic" className='hover:text-orange-500  duration-200' > ឧប្បករណ៍អេឡិចត្រូនិក</NavLink> /
            </li>
          </ul>
          <div className='flex items-center gap-2'>
            <div className=' w-[44px] h-[44px] rounded-full border-2 border-solid border-gray-200 max-sm:hidden'></div>
            <div className='lg:hidden h-[40px] w-[52px] rounded-md  border-2 border-solid border-gray-200'> </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav