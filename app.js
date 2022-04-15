const calcBtn = document.querySelector(".calc");
const KH = document.querySelector(".kh");
const per = document.querySelector(".per");
const amount = document.querySelector(".amount");
const mult = document.querySelector(".mult");
const output = document.querySelector(".output");
const allInputs = document.querySelectorAll("input");
const perText = document.querySelector(".per-txt");



const errMsg =  "Please fill out all fields"
const lang = navigator.language || navigator.userLanguage;

//set lang if german to german

if(lang == "de"){
    errMsg = "Bitte alle Felder ausfüllen";
    KH.placeholder = "Kohlenhydrate";
    perText.innerHTML = "pro";
    per.placeholder = "Menge(z.B. 100g)";
    amount.placeholder = "Menge an Essen";
    mult.placeholder ="Multiplikator";
    calcBtn.innerHTML = "Ausrechnen";

}

calcBtn.addEventListener("click", ()=>{
    let = inputsEmpty = false; 
    allInputs.forEach((input) =>{
        if(input.value == ""){
            output.innerHTML = errMsg
            inputsEmpty=true;
        }
    })
    if(!inputsEmpty){
        output.innerHTML = (((amount.value/per.value)*KH.value)/"10")*mult.value + " IU";
    }
    return;
})
