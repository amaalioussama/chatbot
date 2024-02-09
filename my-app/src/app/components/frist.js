"use client"
import Image from 'next/image';
import Logo from '../../../public/logo2.png';
import princip from '../../../public/princip.png';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
const Partners = () => {
  useEffect(() =>{
    Aos.init( {duration : "100"});

},[]);}

const First = () => {
  return (
    <div>
   <div className="absolute top-8 left-8 z-10">
  <Image src={Logo} width={40} height={40} layout="responsive" alt="Logo" />
</div>
    <div className="bg-gradient-to-t from-black via-black to-black relative flex h-screen"> 
 
      
      <div className="flex items-center ml-8 w-96">
        <div className="ml-8 text-white">
       

          <div className='mt-4'>
            <br/>
            <br/>
            <br/>
            <div className="flex items-center">
  <h1 className="text-5xl text-red-600 mt-16 font-bold font-serif uppercase bg-clip-text"  >
    I'm <span className='text-red-700'>un</span><span className='text-red-800'>ic</span><span className='text-red-900'>at</span>
  </h1>
</div>


<h1 className="text-2xl mt-4 font-bold font-serif uppercase bg-gradient-to-r from-white to-transparent bg-clip-text text-white"  >
  Your Pocket-<span className='text-slate-200 '>Sized</span> <span className=' text-slate-300 '> Learning </span><span className=' text-slate-400 '>Companion</span>
</h1>

<p className='text-wrap text-base mt-4 leading-normal font-light uppercase text-slate-300 whitespace-pre-line'  >
  Meet UniCat, your feline friend for all things learning! Whether it's homework, study sessions, or a friendly chat, UniCat transforms your learning journey into a delightful experience. Your go-to companion for knowledge in a nutshell!
</p>


 </div>
          
          <div>
            <br/>
            <br/>
            
            <button className="bg-black relative inline-flex w-80 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-white rounded-lg group"   >
              <span className="relative px-5 py-2.5 w-48 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-red-800">
                Get started 
              </span>
            </button>
          </div>
        </div>
      </div>
    
      <Image
  src={princip}
  className="mt-24 h-4/5 w-1/3 absolute right-0 mr-16  z-10 transform translate-x-0 scale-125"
  alt=''
/>

    </div>
    </div>
  );

};

export default First;
