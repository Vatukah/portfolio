
export default function Nav(){
  
    const liStyle="border-black-1 border-r  w-full h-[25%]  hover:bg-black-2 hover:text-grey-1 transition-colors"
    const anchorStyle="w-full h-full p-2 text-start flex items-center  "
    return(
        <ul className=" h-[60%] w-[18%] flex flex-col items-start pl-6  text-2xl font-thin  ">
        <li className={liStyle}><a href="#hero" className={anchorStyle} >Home</a></li>
        <li  className={liStyle}><a href="#skill" className={anchorStyle}>Skills</a></li>
        <li  className={liStyle}><a href="#projects" className={anchorStyle}>Projects</a></li>
        <li  className={liStyle}><a href="#contacts" className={anchorStyle}>Contacts</a></li>
        </ul>
    )
}