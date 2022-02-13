function getPin () {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }
    else  {
        console.log('get 3 digit pin', pin);
        return getPin();
    }
}
function generatePin(){
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
    
}

document.getElementById('key-pad').addEventListener('click', function (event) {
const number = event.target.innerText;
const calcInput = document.getElementById('type-number');
if (isNaN(number)) {
    if(number == 'C') {
        calcInput.value = '';
    }
}
else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
}
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('type-number').value;
    const failNotification = document.getElementById('notify-fail');
    const successNotification = document.getElementById('notify-success');

    if(pin == typeNumber){
        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
    }
    else {
        failNotification.style.display = 'block';
        successNotification.style.display = 'none';
    }
}