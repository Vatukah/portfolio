import { useEffect, useRef } from "react";

export default function Contact() {
  const contactRef = useRef();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          body.style.backgroundColor = "teal";
        } else {
          body.style.backgroundColor = "#EEEEEE";
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      id="contacts"
      className="h-screen flex justify-between items-center p-6"
      ref={contactRef}
    >
      <div className="w-[60%] h-full"></div>
      <div
        id="socialLinks"
        className="w-[40%] h-full  flex flex-col justify-center gap-8 items-end  text-6xl p-8 roboto-mono-700  "
      >
      
          <a href=""> 
          <p >github</p>
          <i className={`devicon-github-plain text-6xl  text-teal ml-4`}></i>
          </a>
     
          <a href=""> 
          <p >linkedin</p>
          <i className={`devicon-linkedin-plain text-6xl  text-teal ml-4`}></i>
          </a>
          
          <a href=""> 
          <p >twitter</p>
          <i className={`devicon-twitter-plain text-6xl  text-teal ml-4`}></i>
          </a>
          
          <a href=""> 
          <p >dev.to</p>
          <i className={`devicon-github-plain text-6xl  text-teal ml-4`}></i>
          </a>
          <a href=""> 
          <p >instagram</p>
          <i className={`devicon-github-plain text-6xl  text-teal ml-4`}></i>
          </a>
        
      </div>
    </div>
  );
}
