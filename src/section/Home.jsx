import React from 'react'
import img1 from '../assets/home/WQjvPT415DPU8v099f1bkRcXC0JKXJ9n5l8Yt9yw.jpg'
import img2 from '../assets/home/NVa5XgyYv8g2jrlFQtbN1DS6UmZMOctyvvkRLmaJ.jpg'
import img3 from '../assets/home/ecFcQYXBbEX8IGrOcBKHpqAeE5wHYZmHAISOtn7b.jpg'
import img4 from '../assets/home/Qv27EheiHTiyHBsGol3crNu6WPg0qu6vjsamIGUN.jpg'
import img5 from '../assets/home/Kz4PYNAnuKkVLcu4wNPnsY81NRyRzGrjZ7HKSXkU.jpg'
import img6 from '../assets/home/mTJhYfqayNIAcMAqBNltg47tnxhTmego1txLmIdj.jpg'
import img7 from '../assets/home/XzoaqSsp9bOSg37DbSNwRtVNjPBYce4V3fqbQfuf.jpg'
import img8 from '../assets/home/ofSe2jDqAi0v4x7kaPlkoDm1yrN73dZcyouEFDTA.jpg'
import img9 from '../assets/home/THZFu75WjblhafZOOmKzAZ0g1mHfshzzrSHNc3kv.jpg'
import img10 from '../assets/home/qFsxUdAxKe2ZeCV3d5s0O2hVgVdrhIvuIx5FvOwM.jpg'
import img11 from '../assets/home/svEvW7hGliMDeqSer3DtuGtKZWKczSPVke7soaTT.jpg'
import img12 from '../assets/home/I9ONJvv9Ye1pwRpeo1pwjwvZl65A4Rs1io1XteFY.jpg'
const Home = () => {
  return (
    <div className=''>
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
              <img src={img5} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ថេប្លេត-កុំព្យូទ័រ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>4</div>
              <div>ឆាប់ៗនេះ Windows 11 នឹងជួយប្រាប់ឲ្យ
ដឹងថាតើគ្រឿងកុំព្យូទ័រមួយណាគួរផ្លាស់
ប្ដូរទៅស៊េរីខ្ពស់ </div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
            មុខងារនេះជួយប្រាប់ថាផ្នែកមួយណាខ្សោយនៅក្នុង
កុំព្យូទ័ររបស់អ្នក


            </div>
          </div>
          {/* ------------------------------------------- */}
          <div className=' h-[570px] overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer '>
            <div className='w-full h-[380px] relative'>
              <img src={img6} alt="" className='w-full h-[360px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ចំណេះដឹងទូទៅ​</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 pt-0 text-5xl font-roboto font-bold text-third'>5</div>
              <div>ប្រទះឃើញគេហទំព័រមានមេរោគជាច្រើន បាន
ក្លែងបន្លំខ្លួនជាមុខងារបម្លែងឯកសារតាម
អនឡាញ </div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
            ជៀសវាងគេហទំព័រទាំងអស់នេះ ដើម្បីកុំឲ្យឆ្លង
មេរោគលើឧបករណ៍របស់អ្នក

            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className='overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img7} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>6</div>
              <div>បន្ទាប់ពីបានប្រើប្រាស់ Samsung Galaxy
S25 Series ហើយ Influencers 
ក្នុងស្រុកពោលពាក្យមក</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
            មតិរបស់ Content Creators និង Influencersនៅ
ប្រទេសកម្ពុជាអំពី Samsung Galaxy S25 Series
            </div>
          </div>

          <div className=' overflow-hidden  bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img8} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ថេប្លេត-កុំព្យូទ័រ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>7</div>
              <div>បន្ទះឈីបថ្មីរបស់ Pixel 10 series 
ប្រទះឃើញមានភាពខុសគ្នាច្រើនជាង
ជំនាន់មុនៗ</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
            មុខងារនេះជួយប្រាប់ថាផ្នែកមួយណាខ្សោយនៅក្នុង
កុំព្យូទ័ររបស់អ្នក
            </div>
          </div>
          {/* ------------------------------------------- */}
          <div className=' h-[570px] overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[380px] relative'>
              <img src={img12} alt="" className='w-full h-[360px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ​</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 pt-0 text-5xl font-roboto font-bold text-third'>8</div>
              <div>Apple ត្រូវបានគេប្ដឹងដោយសារតែផ្សព្វផ្សាយ 
              Apple Intelligence លើសពីការពិត</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
            មុខងារ Apple Intelligence មិនទាន់ធ្វើបានដូចនៅ
            ក្នុងពាណិជ្ជកម្ម​ឡើយ
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className='overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[430px] relative'>
              <img src={img9} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ទូរសព្ទ</button>
            </div>
            <div className='flex font-koulen text-xl  p-2 pb-0'>
              <div className='p-4 text-5xl font-roboto font-bold text-third'>9</div>
              <div>Apple M3 Ultra មកដល់ហើយ បំពាក់នៅលើ
Mac Studio ជាមួយជម្រើស M4 Max មួយ
ទៀត</div>
            </div>
            <div className='px-2 pb-4 text-center font-kohsantepheap text-lg'>
              ព្រមទាំងមានថាមពលថ្មធំជាងគេនៅក្នុងចំណោម
              ត្រកូល Pixel 9 series


            </div>
          </div>

          <div className=' h-[570px] overflow-hidden bg-white rounded-xl hover:scale-[1.02] duration-200 cursor-pointer'>
            <div className='w-full h-[380px] relative'>
              <img src={img10} alt="" className='w-full h-[360px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ចំណេះដឹងទូទៅ​​</button>
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
              <img src={img11} alt="" className='w-full h-[410px] object-cover' />
              <button className='py-1 px-4 bg-secondary text-lg max-lg:text-lg border-4 border-white font-koulen text-white absolute left-4 bottom-0 '>ឧបករណ៍អេឡិចត្រូនិច</button>
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
                  <img src={img10} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>នាពេលអនាគត Apple Watch អាចបំពាក់ដោយកាមេរ៉ា ដើម្បីក្លាយជានាឡិកាឆ្លាតវៃដើរដោយ AI </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img2} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Infinix Note 50 Pro+ 5G ប្រកាសចេញផ្លូវ
                ការមាន ការឌីហ្សាញទំនើប និងឈីប
                Dimensity8350 Ultimate </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img3} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
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
                  <img src={img4} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Pixel 9a បានមកដល់ហើយ ជាមួយរូបរាង
                ថ្មី បន្ទះឈីបថ្មី និងតម្លៃ $499 ដដែល </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img5} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>ឆាប់ៗនេះ Windows 11 នឹងជួយប្រាប់ឲ្យ
ដឹងថាតើគ្រឿងកុំព្យូទ័រមួយណាគួរផ្លាស់
ប្ដូរទៅស៊េរីខ្ពស់ </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img6} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>ប្រទះឃើញគេហទំព័រមានមេរោគជាច្រើន បាន
ក្លែងបន្លំខ្លួនជាមុខងារបម្លែងឯកសារតាម
អនឡាញ </div>
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
                  <img src={img7} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>HUAWEI Pura X ប្រកាសចេញថ្មីៗនេះជា
ស្មាតហ្វូនអេក្រង់បត់ថ្មីប្លែកបំពាក់អេក្រង់
ខ្នាត 16:10 </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img8} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>បន្ទះឈីបថ្មីរបស់ Pixel 10 series 
ប្រទះឃើញមានភាពខុសគ្នាច្រើនជាង
ជំនាន់មុនៗ </div>
              </div>

              <div className='font-koulen text-xl text-black flex gap-4 pt-6 w-full'>
                <div className=' w-[30%]'>
                  <img src={img9} alt="" className=' w-[110px] h-[110px] rounded-md object-cover' />
                </div>
                <div className='w-[70%] '>Apple M3 Ultra មកដល់ហើយ បំពាក់នៅលើ
Mac Studio ជាមួយជម្រើស M4 Max មួយ
ទៀត </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home