import Image from "next/image";
import Partner1 from "../../public/google.png"
import Partner2 from "../../public/scale.png"
import Partner3 from "../../public/partner2.png"
import Partner4 from "../../public/microsoft.png"
import Partner5 from "../../public/openai.png"


const Partners = () => {
  return (
    <div className="bg-[#0A0909] mx-52 my-52   h-45">
    <p className="text-[#605959] flex items-center justify-center text-sm  font-bold uppercase leading-normal font-sans">Trusted by designers from the top companies</p>
    <div className=" mt-3 flex justify-center items-center" >
    <svg  xmlns="http://www.w3.org/2000/svg" width="259" height="2" viewBox="0 0 259 2" fill="none">
<path d="M0.000183105 0.99939L67.1047 0.999566L259 1" stroke="#605959"/>
</svg>
    </div>
  
    <div className="flex justify-center items-start ">
    <Image src={Partner1} className=" flex justify-center w-40 h-40 " />
    <Image src={Partner2} className=" flex justify-center w-40 h-40" />
    <Image src={Partner3} className=" flex justify-center w-40 h-40" />
    <Image src={Partner4} className=" flex justify-center w-40 h-40" />
    <Image src={Partner5} className=" flex justify-center w-40 h-40" />

    </div>
    
   </div>
  );
  


  
};
export default Partners;