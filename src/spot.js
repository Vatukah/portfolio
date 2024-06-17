const spot =document.getElementById("spot");
const body=document.getElementsByTagName("main")[0];
body.addEventListener("mousemove",(e)=>{
   const x=e.clientX;
   const y=e.clientY;

   spot.style.left=`${x-20}px`;
   spot.style.top=`${y-20}px`;
})

body.addEventListener("mouseleave",()=>{
    spot.style.position="fixed"
    spot.style.top="0px";
    spot.style.left="0px"
})