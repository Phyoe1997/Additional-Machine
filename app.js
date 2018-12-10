//Get the two inputs from the html files
const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');
const results = document.getElementById('results');

//Add Event Listener to Calc button
calc.addEventListener('click', function () {
    // Change input value from string to  Number
    const valOne = parseInt(ip1.value);
    const valTwo = parseInt(ip2.value);
    // add the values together and insert to html
    results.innerHTML = valOne + valTwo;
});

// clear input and display area
clr.addEventListener('click', function () {
    results.innerHTML = '';
    ip1.value = '';
    ip2.value = '';
});

//create a function that generates a  ranom number between 0 and 1000
function myRandomNumber() {
    return Math.floor(Math.random() * 1000)
}

//add event listener to random button
rand.addEventListener('click', function () {
    ip1.value = myRandomNumber();
    ip2.value = myRandomNumber();
});
