import React from 'react'
import img1 from '../assets/home/WQjvPT415DPU8v099f1bkRcXC0JKXJ9n5l8Yt9yw.jpg'
import img2 from '../assets/home/NVa5XgyYv8g2jrlFQtbN1DS6UmZMOctyvvkRLmaJ.jpg'
import img3 from '../assets/home/ecFcQYXBbEX8IGrOcBKHpqAeE5wHYZmHAISOtn7b.jpg'
import img4 from '../assets/home/Qv27EheiHTiyHBsGol3crNu6WPg0qu6vjsamIGUN.jpg'
const Home = () => {
  return (
    <div>
      <div className='w-[85%] xl:w-[90%] max-xl:w-[94%] h-[570px]flex  m-auto text-2xl font-koulen text-white max-lg:text-xl cursor-pointer'>
        <div className='relative'>
          <img src={img1} alt="" className='w-full h-full rounded-xl' />
          <div className='absolute bottom-12 max-sm:bottom-2 w-full text-center max-lg:px-10'>
            <button className='py-2 px-4 mb-4 bg-secondary text-xl max-lg:text-lg'>ទូរសព្ទ</button>
            <div>ដើមខែមេសា 2025 ខាងមុខនេះ iOS 18.4 នឹងទម្លាក់ជាផ្លូវការដល់អ្នកប្រើប្រាស់</div>
          </div>
        </div>
      </div>

      <div className='w-[75%] xl:w-[80%] max-xl:w-[94%]   justify-between  m-auto mt-10'>
        {/* ------------------------------------------ */}
        <div className='grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-10'>
          <div className=' overflow-hidden  bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img3} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>1</div>
              <div>Infinix Note 50 Pro+ 5G ប្រកាសចេញផ្លូវ
                ការមាន ការឌីហ្សាញទំនើប និងឈីប
                Dimensity8350 Ultimate</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              រួមមានបំពាក់ដោយលេន Periscope 100x និងតម្លៃ
              ចាប់ផ្ដើមពីខ្ទង់ $370 នៅក្រៅប្រទេស

            </div>
          </div>
          {/* ------------------------------------------- */}
          <div className=' h-[570px] overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[380px] relative'>
              <img src={img2} alt="" className='w-full h-[360px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ឧបករណ៍អេឡិចត្រូនិច​</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 pt-0 text-5xl font-roboto font-bold text-third'>2</div>
              <div>នាពេលអនាគត Apple Watch អាចបំពាក់ដោយកាមេរ៉ា ដើម្បីក្លាយជានាឡិកាឆ្លាតវៃដើរដោយ AI </div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              កាមេរ៉ានឹងអនុញ្ញាតឲ្យ Apple Watch ស្កេនអ្វីមួយនៅមុខអ្នកពាក់បាន សម្រាប់មុខងារ Visual Intelligence និងមុខងារ AI ផ្សេងៗទៀត
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className='overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img4} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>3</div>
              <div>Pixel 9a បានមកដល់ហើយ ជាមួយរូបរាង
                ថ្មី បន្ទះឈីបថ្មី និងតម្លៃ $499 ដដែល</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              ព្រមទាំងមានថាមពលថ្មធំជាងគេនៅក្នុងចំណោម
              ត្រកូល Pixel 9 series


            </div>
          </div>

          <div className=' overflow-hidden  bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img3} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>4</div>
              <div>Infinix Note 50 Pro+ 5G ប្រកាសចេញផ្លូវ
                ការមាន ការឌីហ្សាញទំនើប និងឈីប
                Dimensity8350 Ultimate</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              រួមមានបំពាក់ដោយលេន Periscope 100x និងតម្លៃ
              ចាប់ផ្ដើមពីខ្ទង់ $370 នៅក្រៅប្រទេស

            </div>
          </div>
          {/* ------------------------------------------- */}
          <div className=' h-[570px] overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer '>
            <div className='w-full h-[380px] relative'>
              <img src={img2} alt="" className='w-full h-[360px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ឧបករណ៍អេឡិចត្រូនិច​</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 pt-0 text-5xl font-roboto font-bold text-third'>5</div>
              <div>នាពេលអនាគត Apple Watch អាចបំពាក់ដោយកាមេរ៉ា ដើម្បីក្លាយជានាឡិកាឆ្លាតវៃដើរដោយ AI </div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              កាមេរ៉ានឹងអនុញ្ញាតឲ្យ Apple Watch ស្កេនអ្វីមួយនៅមុខអ្នកពាក់បាន សម្រាប់មុខងារ Visual Intelligence និងមុខងារ AI ផ្សេងៗទៀត
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className='overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img4} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>6</div>
              <div>Pixel 9a បានមកដល់ហើយ ជាមួយរូបរាង
                ថ្មី បន្ទះឈីបថ្មី និងតម្លៃ $499 ដដែល</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              ព្រមទាំងមានថាមពលថ្មធំជាងគេនៅក្នុងចំណោម
              ត្រកូល Pixel 9 series


            </div>
          </div>

          <div className=' overflow-hidden  bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img3} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>7</div>
              <div>Infinix Note 50 Pro+ 5G ប្រកាសចេញផ្លូវ
                ការមាន ការឌីហ្សាញទំនើប និងឈីប
                Dimensity8350 Ultimate</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              រួមមានបំពាក់ដោយលេន Periscope 100x និងតម្លៃ
              ចាប់ផ្ដើមពីខ្ទង់ $370 នៅក្រៅប្រទេស

            </div>
          </div>
          {/* ------------------------------------------- */}
          <div className=' h-[570px] overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[380px] relative'>
              <img src={img2} alt="" className='w-full h-[360px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ឧបករណ៍អេឡិចត្រូនិច​</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 pt-0 text-5xl font-roboto font-bold text-third'>8</div>
              <div>នាពេលអនាគត Apple Watch អាចបំពាក់ដោយកាមេរ៉ា ដើម្បីក្លាយជានាឡិកាឆ្លាតវៃដើរដោយ AI </div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              កាមេរ៉ានឹងអនុញ្ញាតឲ្យ Apple Watch ស្កេនអ្វីមួយនៅមុខអ្នកពាក់បាន សម្រាប់មុខងារ Visual Intelligence និងមុខងារ AI ផ្សេងៗទៀត
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className='overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img4} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>9</div>
              <div>Pixel 9a បានមកដល់ហើយ ជាមួយរូបរាង
                ថ្មី បន្ទះឈីបថ្មី និងតម្លៃ $499 ដដែល</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              ព្រមទាំងមានថាមពលថ្មធំជាងគេនៅក្នុងចំណោម
              ត្រកូល Pixel 9 series


            </div>
          </div>

          <div className=' h-[570px] overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[380px] relative'>
              <img src={img2} alt="" className='w-full h-[360px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ឧបករណ៍អេឡិចត្រូនិច​</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 pt-0 text-5xl font-roboto font-bold text-third'>10</div>
              <div>នាពេលអនាគត Apple Watch អាចបំពាក់ដោយកាមេរ៉ា ដើម្បីក្លាយជានាឡិកាឆ្លាតវៃដើរដោយ AI </div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              កាមេរ៉ានឹងអនុញ្ញាតឲ្យ Apple Watch ស្កេនអ្វីមួយនៅមុខអ្នកពាក់បាន សម្រាប់មុខងារ Visual Intelligence និងមុខងារ AI ផ្សេងៗទៀត
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className='overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img4} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>11</div>
              <div>Pixel 9a បានមកដល់ហើយ ជាមួយរូបរាង
                ថ្មី បន្ទះឈីបថ្មី និងតម្លៃ $499 ដដែល</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              ព្រមទាំងមានថាមពលថ្មធំជាងគេនៅក្នុងចំណោម
              ត្រកូល Pixel 9 series


            </div>
          </div>



        </div>
      </div>

      <div className='w-full flex justify-center items-center my-10'>
        <button className='font-koulen text-xl text-black bg-white px-8 py-4 rounded-full '>មើលបន្ថែមទៀត</button>
      </div>

      <div className='w-full bg-white flex justify-center items-center pb-10'>
        <div className='w-[75%] xl:w-[80%] max-xl:w-[94%] flex'>

          <div className='grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 '>

          <div className='border-b-2 border-red-500 mt-8 hidden max-sm:block'></div>
            <div className='mt-8'>
              <div className='flex  font-koulen text-black items-center text-2xl'>
                <div className='w-1 h-8 bg-red-500 mr-2'></div>
                <div>វីដេអូ</div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>
            </div>

            <div className='border-b-2 border-sky-400 mt-8 hidden max-sm:block'></div>
            <div className='mt-8'>
              <div className='flex  font-koulen text-black items-center text-2xl'>
                <div className='w-1 h-8 bg-sky-400 mr-2'></div>
                <div>អត្ថបទពេញនិយម</div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>
            </div>

            <div className='border-b-2 border-orange-500 mt-8 hidden max-sm:block'></div>
            <div className='mt-8'>
              <div className='flex  font-koulen text-black items-center text-2xl'>
                <div className='w-1 h-8 bg-orange-500 mr-2'></div>
                <div>PR</div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Galaxy A56 5G, Galaxy A36 5G
                  និង Galaxy A26 5G ប្រកាសចេញ
                  ជាផ្លូវការ ជាមួយ​ Awesome.. </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home