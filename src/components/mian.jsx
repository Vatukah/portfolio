import Contact from "./contact";
import Hero from "./home";
import Project from "./project";
import Skill from "./skill";

export default function Main(){

    return(
        <main className="w-full h-screen overflow-y-scroll">
          <Hero/>
          <Skill/>
          <Project/>
          <Contact/>
            
        </main>
    )
}