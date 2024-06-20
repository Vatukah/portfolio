import Contact from "./contact";
import Hero from "./home";
import Project from "./project";
import Skill from "./skill";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const [element, setElement] = useState(null);
  const [circle, setCircle] = useState(null);

  const [circleX, setCircleX] = useState(0);
  const [circleY, setCircleY] = useState(0);
  const mainRef = useRef();
  const spotRef = useRef();
  const moveSpot = (e) => { // triggered when mouse move
    const x = e.clientX;
    const y = e.clientY;
    circle.style.visibility = "hidden";
    spotRef.current.style.visibility = "visible";

    spotRef.current.style.top = `${y - 40}px`;
    spotRef.current.style.left = `${x - 40}px`;
    spotRef.current.style.width = "80px";
    spotRef.current.style.height = "80px";
    spotRef.current.style.opacity = "0.5";
  };
  const removeClass = (e) => {// triggered when mouse enter
    setTimeout(() => {
      spotRef.current.classList.remove("smooth");
    }, 500);
  };
  const spotIdeal = () => {//triggered when mouse leave
    spotRef.current.classList.add("smooth");
      setTimeout(()=>{ circle.style.visibility = "visible"; },500)
    setTimeout(() => {
      spotRef.current.style.top = `${circleY}px`;
      spotRef.current.style.left = `${circleX}px`;
      spotRef.current.style.width = "10px";
      spotRef.current.style.height = "10px";
      spotRef.current.style.visibility = "hidden";
     
    }, 100);
  
  };
  const setPoint = (x, y) => {
    setCircleX(x);
    setCircleY(y);
  };
  const func = () => {
    const y = Math.round(circle.getBoundingClientRect().top);
    const x = Math.round(circle.getBoundingClientRect().left);

    setPoint(x, y);
   
  };

  useEffect(() => {
    const hiElement =
      mainRef.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1];
    const circleElement =
      mainRef.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1]
        .childNodes[2];
    setElement(hiElement);
    setCircle(circleElement);
    const y = Math.round(circleElement.getBoundingClientRect().top);
    const x = Math.round(circleElement.getBoundingClientRect().left);
    spotRef.current.style.top = `${y}px`;
    spotRef.current.style.left = `${x}px`;
    spotRef.current.classList.add("smooth");
    setPoint(x, y);
  }, [element, circle]);
  return (
    <main
      className="w-full h-screen overflow-y-scroll overflow-x-hidden dosis-400 scroll-smooth"
      onMouseMove={(e) => moveSpot(e)}
      onMouseLeave={spotIdeal}
      onMouseEnter={(e) => removeClass(e)}
      ref={mainRef}
      onScroll={func}
    >
      <Hero fun={setPoint} />
      <Skill />
      <Project />
      <Contact />
      <div id="spot" ref={spotRef} ></div>
    </main>
  );
}
