//calculator

let display = document.getElementById('inputBox');
let button = document.querySelectorAll('button');
let buttonsArray = Array.from(button);
let string = ' ';

//buttonsArray.forEach(function (btn) {
// console.log(buttonsArray);
//})
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log("Faisal")
        if (e.target.innerHTML == 'DEL') {
            String = String.substring(0, string.length - 1);
            display.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;

        } else if (e.target.innerHTML == '=') {
            string = evel('string');
            display.value = string;
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    })
})




