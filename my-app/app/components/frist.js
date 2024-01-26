import Image from 'next/image';
import Logo from '../../public/logo2.png';
import princip from '../../public/princip.png';

const First = () => {
  return (
    <div className="bg-gradient-to-t from-black via-black to-black relative flex h-screen">  
      <div className="flex items-center ml-8 w-96">
        <div className="ml-8 text-white">
          <div className="absolute top-8 left-8 z-10">
            <Image src={Logo} className="h-24 w-36" alt="Logo" />
          </div>

          <div className='mt-8'>
            <br/>
            <br/>
            <br/>
            <h1 className="text-6xl text-red-600 mt-16 font-bold font-arimo-hebrew-subset uppercase bg-clip-text">
              I'm <span className='text-red-600'>un</span><span className='text-red-700'>ic</span><span className='text-red-900'>at</span>
            </h1>

            <h1 className="text-3xl mt-4 font-bold font-arimo-hebrew-subset uppercase bg-gradient-to-r from-white to-transparent bg-clip-text text-white">
              Your Pocket-<span className='text-slate-100 '>Sized</span> <span className=' text-slate-300 '> Learning</span>
              <span className=' text-slate-400 '> Companion</span>
            </h1>
            
            <p className='text-wrap text-sm mt-4 font-normal font-arimo-hebrew-subset uppercase text-slate-300'> Meet UniCat, your feline friend for all things learning! Whether it's homework, study sessions, or a friendly chat, UniCat transforms your learning journey into a delightful experience. Your go-to companion for knowledge in a nutshell!</p>
          </div>
          
          <div>
            <br/>
            <br/>
            <button className="bg-black relative inline-flex w-80 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-white rounded-lg group">
              <span className="relative px-5 py-2.5 w-48 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-red-800">
                Get started 
              </span>
            </button>
          </div>
        </div>
      </div>
    
      <Image src={princip} className="mt-8 h-4/5 w-1/3 absolute -right-0 mr-8 z-10"  />
    </div>
  );
};

export default First;
