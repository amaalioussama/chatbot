import Image from 'next/image';
import backraound from '../../public/hole-5318215_1280 1.png';
import Logo from '../../public/logo.png';
import Footer from '../components/footer';

const Page = () => {
  return  <div>
  <div className="bg-gradient-to-b from-red-950 to-transparent h-screen relative">
  
    <div className="absolute inset-0 bg-cover bg-center z-0">
      <Image src={backraound} layout="fill" objectFit="cover" alt="Background Image" />
    </div>

  
    <div className="absolute top-8 left-8 z-10">
      <Image src={Logo} className="w-40 h-40" alt="Logo" />
    </div>

 
    <main className="absolute inset-0 flex items-center justify-center text-white text-center">
      <div>
        <h1 className="text-4xl mb-4 font-poppins font-semibold">sign-up</h1>
        <div className="mb-4">
          <input
            type="text"
            name="user"
            id="user"
            placeholder="username"
            className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base"
          />
          <p className="mt-2 text-sm text-gray-500">
            Already  <a href="../login" className="font-medium text-white hover:underline">registred?</a>.
          </p>
        </div>
        <button className="relative inline-flex w-48 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-white rounded-lg group  bg-gradient-to-br from-red-950 via-red-800">
          <span className="relative px-5 py-2.5 w-48  transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
          signup
          </span>
        </button>
        <br />
        <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
          </svg>
          signup with Google
        </button>
      </div>
    </main>
  </div>
  <Footer />
  </div>
};
export default Page;