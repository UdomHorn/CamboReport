import React from 'react'
import img5 from '../assets/video/tamneak-logo.png'
const Footer = () => {
  return (
    <footer className=' w-full text-center'>

      <div className='w-[75%] xl:w-[80%] max-xl:w-[94%] flex justify-between  mt-10 m-auto max-sm:flex-col'>
        <div className=''>
          <div className='font-roboto text-2xl font-bold'>CAMBOREPORT</div>
          <div className='font-kohsantepheap'>គេហទំព័របច្ចេកវិទ្យាសម្រាប់ប្រជាជនកម្ពុជា</div>
        </div>
        <div className='mt-2'>
          <div className='font-koulen text-xl'>តាមដានយើងបន្ថែមទៀត</div>
          <div className='flex justify-center items-center gap-2 mt-2' >
            <div className='w-[46px] h-[46px] rounded-full bg-white flex justify-center items-center cursor-pointer '>
              <img src={img5} alt="" className='w-[18px]' />
            </div>

            <div className='w-[46px] h-[46px] rounded-full bg-white flex justify-center items-center cursor-pointer '>
              <img src={img5} alt="" className='w-[18px]' />
            </div>

            <div className='w-[46px] h-[46px] rounded-full bg-white flex justify-center items-center cursor-pointer'>
              <img src={img5} alt="" className='w-[18px]' />
            </div>

            <div className='w-[46px] h-[46px] rounded-full bg-white flex justify-center items-center cursor-pointer '>
              <img src={img5} alt="" className='w-[18px]' />
            </div>
          </div>
        </div>

      </div>
      <div className='font-kohsantepheap mt-2 pb-4'>រក្សាសិទ្ធិដោយ៖ ខេមបូរីផត © 4/17/2025</div>

    </footer>
  )
}

export default Footer