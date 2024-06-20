export default function ProjectCompo({ layout }) {
  return (
    <div className=" flex justify-between gap-4 mb-16 w-[90%] mx-auto">
      <div className=" ">
        <h2 className="h-16 flex justify-center items-center border-t border-x  rounded-t-xl">
          project name
        </h2>
        <div className="bg-black-2 w-[300px] h-[250px] rounded-b-xl"></div>
      </div>

      <div className="w-[40%] flex flex-col p-4">
        <div id="used" className="h-fit flex items-center  gap-2">
          <p>used In</p>
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
        <p className="mt-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore hic
          rem amet aliquid reprehenderit blanditiis unde dolorum recusandae
          saepe eum.
        </p>
        <div>
          <button className="w-22 h-8 border">preview</button>
          <button>live site</button>
        </div>
      </div>
    </div>
  );
}
