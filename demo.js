console.log("Hii---");
const desc=document.querySelector("#b1");
const msg=document.querySelector("#p1");
desc.addEventListener("click",myFun);
function myFun()
{
   
    if (msg.style.visibility === "hidden") {
    msg.style.visibility = "visible";
    }
    else
    msg.style.visibility = "hidden";
}



desc.addEventListener("mouseover",changeColor);
function changeColor()
{
    desc.style.backgroundColor="red";
}
desc.addEventListener("mouseout",retainColor)
function retainColor()
{
    desc.style.backgroundColor="blueviolet";
}