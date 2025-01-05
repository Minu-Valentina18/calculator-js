const display = document.getElementById("display");


function appendToDisplay(input){
  display.value += input;
}
function clearDisplay(){
    display.value = " ";
}

function calculate(){
  // eval() is dangerous for security purpose
  try{
    display.value = eval(display.value).toFixed(4);
  }
  catch(error){
    display.value = "error";
  }
  
}