const input = document.getElementById("input");
 counter = document.getElementById("counter");
 maxlength = input.getAttribute("maxlength");
const status = document.querySelector("p");


input.onkeyup = () =>{
   counter.innerText = maxlength - input.value.length;
   
   if(counter.innerText < 0){
      
      counter.style.color = "red";
     status.classList.add("appear");
      
   }else{
      
      counter.style.color = "blue";
      status.classList.remove("appear");
   }
}
