import Frist from "./components/frist";
import Partners from "./components/partners";
import Resources from "./components/resr";
import Datalife from "./components/datalife";
import Tools from "./components/tools";
import Slide from "./components/slide";
import Footer from "./components/footer";
const Page = () => {
  return (
    <div>
      <div>
       <Frist/>
       </div>
       <div>
      <Partners />
      </div>
       <div>
      <Resources />
      </div>
       <div>
      <Datalife />
      </div>
       <div>
      <Tools />
      </div>
       <div>
      <Slide/>
      </div>
       <div>
      <Footer />
      </div>
     
    
    </div>
  );
};

export default Page;

