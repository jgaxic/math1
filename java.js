let shscore = document.getElementById('score'); 
let shquestion = document.getElementById('question');
let shnum1 = document.getElementById('number1');
let shmark = document.getElementById('mark');
let shnum2 = document.getElementById('number2');
let shanswer = document.getElementById('answer');
let shresult = document.getElementById('result');
let shplus = document.getElementById('plus');
shplus.checked = true;
shmark.innerHTML = "+";
let score = 0;
let q = 0;
let num1 = 0;
let num2 = 0;
let t = 0;
shscore.innerHTML = score;
shquestion.innerHTML = q;

function random() {
    shquestion.innerHTML = q;
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    shnum1.innerHTML = num1;
    shnum2.innerHTML = num2;
}

function start() {
    random();
    q = 0;
    score = 0;
    shquestion.innerHTML = q;
    shscore.innerHTML = score;
    shanswer.value = '';
    shresult.innerHTML = null;
}

function btnanswer() {
    checkmark();
    if (t == shanswer.value) {
        shresult.innerHTML = 'ถูกต้อง';
        shresult.style.color = 'green';
        score += 1;
        shscore.innerHTML = score;
        shanswer.value = '';
        q += 1;
    } 
    else if(shanswer.value == false){
        shresult.innerHTML = '!ตอบคําถาม!';
        shresult.style.color = 'yellow';
        shanswer.value = '';
    }
    else {
        shresult.innerHTML = 'ไม่ถูกต้อง';
        shresult.style.color = 'red';
        shanswer.value = '';
        q += 1;
    }
    random();
}

function checkmark() {
    if (shmark.innerHTML == "+") {
        t = num1 + num2;
    } else if (shmark.innerHTML == "-") {
        t = num1 - num2;
    } else if (shmark.innerHTML == "×") {
        t = num1 * num2;
    } else if (shmark.innerHTML == "÷") {
        t = num1 / num2;
    }
}

function radiomark(value) {
    shmark.innerHTML = value;
}
random();