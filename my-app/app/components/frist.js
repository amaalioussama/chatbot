import Logo from '../../public/logo.png';
import Image from 'next/image';

const Frist = () => {
  return <div>
      <div className="bg-[#0A0909] ">
      <div className="absolute top-8 left-8 z-10">
      <Image src={Logo} className="w-40 h-40" alt="Logo" />
      <h1 className="text-6xl font-bold font-arimo-hebrew-subset uppercase bg-gradient-to-r from-red-900 to-transparent bg-clip-text text-red-600 ">
  I'm unicat 
</h1>
    <h1 className="text-6xl font-bold font-arimo-hebrew-subset uppercase bg-gradient-to-r from-red-100 to-transparent bg-clip-text text-red-600 ">
    Your Pocket-Sized <br/> Learning Companion
    </h1>
    </div>
 
    </div>
  </div>;
};
export default Frist;