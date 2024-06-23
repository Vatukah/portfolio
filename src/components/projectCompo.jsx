import { useSpring,animated } from "@react-spring/web";
import { useEffect ,useRef} from "react";
export default function ProjectCompo({ layout }) {

  const [textpop,textApi]=useSpring(()=>({from:{
    opacity:0,
    y:100
  }}))
const projectRef=useRef();
  useEffect(() => {

    const callback=(entries,observer)=>{

      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          console.log("intersection")
           textApi.start({
               from:{
                   opacity:0,
                   y:100
               },
               to:{
                   opacity:1,
                   y:0
               }
           })
          
           observer.unobserve(entry.target)

       }
      })
       
    }
    const observer=new IntersectionObserver(callback,{
      root:null,
      threshold:0.8});
 if(projectRef.current){
   observer.observe(projectRef.current);
 }
      


    return ()=>{
       if(projectRef.current){
           observer.unobserve(projectRef.current)
       }
    }
 }, []);
 
  return (
    <animated.div className=" flex justify-between gap-4 mb-[14rem] w-[90%] mx-auto transition-opacity" style={{...textpop}} ref={projectRef}>
      <div className=" ">
        <h2 className="h-16 flex justify-center items-center border-t border-x  rounded-t-xl">
          project name
        </h2>
        <div className="bg-black-2 w-[300px] h-[250px] rounded-b-xl"></div>
      </div>

      <div className="w-[40%] flex flex-col p-4 gap-8">
        <div id="used" className="h-fit flex items-center  gap-2">
          <p className=" border-r-2 border-black-2 p-2 text-black-1 font-bold">Languages Utilized </p>
          <div className="w-7 h-7 border shadow-xl rounded-full flex justify-center items-center hover:bg-black-1 hover:text-grey-1 hover:border-none ">
            <i className="devicon-html5-plain text-7  "></i>
          </div>
          <div className="w-7 h-7 border  shadow-xl  rounded-full flex justify-center items-center  hover:bg-black-1 hover:text-grey-1 hover:border-none">
            <i className="devicon-css3-plain text-7"></i>
          </div>
          <div className="w-7 h-7 border  shadow-xl  rounded-full flex justify-center items-center hover:bg-black-1 hover:text-grey-1 hover:border-none">
            <i className="devicon-javascript-plain text-7"></i>
          </div>
        </div>
        <p className="mt-auto text-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore hic
          rem amet aliquid reprehenderit blanditiis unde dolorum recusandae
          saepe eum.
        </p>
        <div className=" flex justify-start gap-6 p-2">
          <button className="w-[80px] h-8 border border-black-1 rounded-full " >preview</button>
          <button className="w-[80px] h-8 border border-black-1 rounded-full" >live site</button>
        </div>
      </div>
    </animated.div>
  );
}
