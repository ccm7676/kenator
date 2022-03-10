const calcBtn = document.querySelector(".calc");
const KH = document.querySelector(".kh");
const per = document.querySelector(".per");
const amount = document.querySelector(".amount");
const mult = document.querySelector(".mult");
const output = document.querySelector(".output");
const allInputs = document.querySelectorAll("input");

calcBtn.addEventListener("click", ()=>{
    let = inputsEmpty = false; 
    allInputs.forEach((input) =>{
        if(input.value == ""){
            output.innerHTML = "Bitte alle Felder ausfüllen"
            inputsEmpty=true;
        }
    })
    if(!inputsEmpty){
        output.innerHTML = (((amount.value/per.value)*KH.value)/10)*mult.value + " IU";
    }
    return;
})