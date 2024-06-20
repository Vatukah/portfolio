import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
export default function Skill() {
  const [spring, api] = useSpring(() => ({ from: { opacity: 0 } }));
  const [textpop,textApi]=useSpring(()=>({from:{
    opacity:0,
    y:100
  }}))
  const [isVisible,setIsVisible]=useState(false);
  const div = useRef();
  const languauges = [
    "html5",
    "css3",
    "javascript",
    "react",
    "tailwindcss",
    "supabase",
    "redux",
    "mysql",
    "",
    "",
  ];

  const element = languauges.map((value, index) => (
    <animated.div
      key={index}
      id="skillBox"
      className={` w-[150px] flex flex-col justify-evenly items-center bg-grey-2 transition-opacity ease-in-out duration-500 `}
      style={{ ...spring }}
    >
      <i className={`devicon-${value}-plain colored text-7xl   `}></i>
      <p>{value}</p>
    </animated.div>
  ));

  useEffect(() => {
     const observer=new IntersectionObserver(([entry])=> {
      
        if(entry.isIntersecting){
            api.start({from:{
              opacity:0,
              
            },to:{
                opacity:1
            }})
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
           
           

        }else{
            api.start({reverse:true});
            textApi.start({reverse:true});
            
        }
     },{threshold:0.6});

     if(div.current){
        observer.observe(div.current);
     }

     return ()=>{
        if(div.current){
            observer.unobserve(div.current)
        }
     }
  }, []);
  return (
    <div
      id="skill"
      className="h-screen  flex flex-col justify-center items-center gap-6"
      onClick={() => api.start({ from: { opacity: 0 }, to: { opacity: 1 } })}
      ref={div}
    >
      <div
        id="skillGrid"
        className=" grid grid-cols-5 grid-rows-2  gap-[2px] w-fit h-[300px]  "
      >
        {element}
      </div>

      <animated.p className="w-[75%] text-black-2" style={{...textpop}}>
        Welcome to my skills page! Here you'll find a comprehensive overview of
        my technical expertise and the soft skills that I bring to the table. I
        am passionate about building efficient and scalable software solutions,
        and I am constantly learning and evolving in the field of technology
      </animated.p>
      
    </div>
  );
}
