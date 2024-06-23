
export default function Nav(){
  
    const liStyle=`  w-full h-[25%]  hover:bg-black-2 hover:text-grey-1 transition-colors flex items-center gap-3 p-2 roboto-mono`
    const anchorStyle="w-full h-full text-start flex items-center  text-xl ";
    const iconClass="w-8 h-8"
    return(
        <ul className=" h-[60%] w-[18%] flex flex-col items-start pl-6  text-4xl   ">
        <li className={liStyle}>01<a href="#hero" className={anchorStyle} >home</a></li>
        <li  className={liStyle}>02<a href="#skill" className={anchorStyle}>skills</a></li>
        <li  className={liStyle}>03<a href="#projects" className={anchorStyle}>projects</a></li>
        <li  className={liStyle}>04<a href="#contacts" className={anchorStyle}>contacts</a></li>
        </ul>
    )
}