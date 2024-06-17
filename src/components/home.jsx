import { useEffect, useRef, useState } from "react"
import pic from "/defaultDp.svg"
export default function Hero({fun}){
const [count,setCount]=useState(0);
const hiRef =useRef();
let timer=null;
useEffect(()=>{
   
},[count])

    return(
        <div id="hero" className="h-screen flex items-center justify-center">
         <div className="flex justify-evenly  box-border">
            <div className="my-auto text-start w-[40%] text-black-2 ">
                <h2 className=" text-4xl font-bold mb-10 first-letter:text-6xl text-black-1 abril-fatface-regular  ">ANUPAM THAKUR</h2>
                <p className="text-2xl font-bold transition-all relative  w-fit first-letter:text-3xl  " ref={hiRef}>HI <span className="text-teal text-4xl">,</span><div id="circle"></div></p>
                <p className="text-lg ">An aspiring student having keen interest in developing user appealing interface and visuals </p>
            </div>
            <img src={pic} alt="" />
         </div>
           
        </div>
    )
}