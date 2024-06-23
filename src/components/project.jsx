import ProjectCompo from "./projectCompo"
export default function Project(){
 const pr=[1,2,3,4]

  const element=pr.map((index)=><ProjectCompo key={index}/>)
    return(
        <div id="projects" className="h-fit py-[14rem]  ">
{element}
        </div>
    )
}