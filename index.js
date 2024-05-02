const inputdisplay = document.getElementById("inputdisplay");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("toCelsius");
const Results = document.getElementById("Results");
const button = document.getElementById("button");
let temp;

button.onclick = function(){

     if(tofahrenheit.checked){
      temp =  inputdisplay.value
       temp = 9/5 * temp + 32
       Results.textContent = temp.toFixed(1) + "°F"
     }

     else if(toCelsius.checked){
        temp =  inputdisplay.value
        temp = temp - 32 * 5/9
        Results.textContent = temp.toFixed(1) + "°C"
     }

     else{

       Results.textContent = "enter a unit"
     }
}