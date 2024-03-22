const buttons=document.querySelectorAll("input");
const displayInput=document.getElementById("displayInput");
const Operation=document.getElementById("operation")

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        if(btn.value=="="){
            Operation.innerHTML= displayInput.value
            displayInput.value= eval(displayInput.value)
        }else if(btn.value=="C"){
            Operation.innerHTML=""
            displayInput.value=""
        }else if(btn.value == "Del"){
            displayInput.value=displayInput.value.slice(0,-1)
        }else{
            displayInput.value += btn.value;
        }
    })
})