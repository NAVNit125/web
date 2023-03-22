const countvalue = document.getElementById('counter');

function increment(){
    let value = parseInt(countvalue.innerText);
    value = value +1;
    countvalue.innerText = value;
};

function decrement(){
    let value = parseInt(countvalue.innerText);
    value = value-1;
    countvalue.innerText = value;
};