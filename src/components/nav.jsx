
export default function Nav(){
  
    const liStyle=`border-black-1 border-r  w-full h-[25%]  hover:bg-black-2 hover:text-grey-1 transition-colors addInvert flex items-center gap-3 p-2`
    const anchorStyle="w-full h-full text-start flex items-center  ";
    const iconClass="w-8 h-8"
    return(
        <ul className=" h-[60%] w-[18%] flex flex-col items-start pl-6  text-xl font-medium  ">
        <li className={liStyle}><img src="/home.png" alt="" className={iconClass}/><a href="#hero" className={anchorStyle} >Home</a></li>
        <li  className={liStyle}><img src="/skill.png" alt="" className={iconClass}/><a href="#skill" className={anchorStyle}>Skills</a></li>
        <li  className={liStyle}><img src="/project.png" alt="" className={iconClass}/><a href="#projects" className={anchorStyle}>Projects</a></li>
        <li  className={liStyle}><img src="/contact.png" alt="" className={iconClass}/><a href="#contacts" className={anchorStyle}>Contacts</a></li>
        </ul>
    )
}