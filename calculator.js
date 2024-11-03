let add = (a,b)=> a + b ;
let subtract = (a,b) => a - b;
let multiply = (a,b)=> a * b;
let divide = (a,b)=> a/b;

let firstNumber;
let operator;
let secondNummber;

let display = document.querySelector(".display");
let displayvalue ='';

let btns = document.querySelectorAll("button")
btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target.value)
        let value = e.target.value
            displayvalue += value
            display.textContent = displayvalue
    })
})

