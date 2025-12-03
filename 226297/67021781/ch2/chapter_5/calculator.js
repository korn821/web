
const digits = document.querySelectorAll('button');
const display = document.getElementById('display');

let n1 = 0;
let n2 = "";
let operator = "";

digits.forEach((digit) => {
    const operators = ['+', '-', '*', '/'];

    digit.addEventListener('click', () => {
        console.log("Pressed button:", digit.innerText);
        console.log("Before operation: n1 =", n1, "n2 =", n2, "operator =", operator, "display =", display.textContent);

        if (digit.innerText === "C") {
            display.innerText = "0";
            n1 = 0; n2 = ""; operator = "";
        } else if (operators.includes(digit.innerText)) {
            n1 = parseFloat(display.textContent);
            n2 = "";
            display.textContent += digit.innerText;
            operator = digit.innerText;
        } else if (digit.innerText === "=") {
            n2 = parseFloat(n2);
            display.textContent = cal(n1, n2, operator);
            n2 = "";
        } else if (digit.innerText === ".") {
            if (!n2.includes(".")) {
                if (n2 === "") n2 = "0";
                n2 += ".";
                display.textContent += ".";
            }
        } else {
            if (display.innerText === "0") display.innerText = "";
            display.textContent += digit.innerText;
            n2 += digit.innerText;
        }

        console.log("After operation: n1 =", n1, "n2 =", n2, "operator =", operator, "display =", display.textContent);
    });
});

// ฟังก์ชันคำนวณ
function cal(n1, n2, oper) {
    switch(oper) {
        case "+": return n1 + n2;
        case "-": return n1 - n2;
        case "*": return n1 * n2;
        case "/": return n2 === 0 ? "Error" : n1 / n2;
        default: return n2;
    }
}

// ป้องกัน Enter submit form
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") event.preventDefault();
});

// รองรับการกดคีย์บอร์ด
document.addEventListener("keydown", function(event) {
    const key = event.key;
    console.log("Key pressed:", key);
    console.log("Before operation: n1 =", n1, "n2 =", n2, "operator =", operator, "display =", display.textContent);

    if (!isNaN(key)) { // ตัวเลข
        if (display.innerText === "0") display.innerText = "";
        display.innerText += key;
        n2 += key;
    } else if (['+', '-', '*', '/'].includes(key)) { // เครื่องหมาย
        n1 = parseFloat(display.textContent);
        operator = key;
        display.textContent += key;
        n2 = "";
    } else if (key === "Enter") { // คำนวณ
        n2 = parseFloat(n2);
        display.textContent = cal(n1, n2, operator);
        n2 = "";
    } else if (key === "Backspace") { // ลบตัวสุดท้าย
        display.textContent = display.textContent.slice(0, -1);
        n2 = n2.slice(0, -1);
        if (display.textContent === "") display.textContent = "0";
    } else if (key === "Escape" || key.toLowerCase() === "c") { // เคลียร์
        display.innerText = "0";
        n1 = 0; n2 = ""; operator = "";
    }

    console.log("After operation: n1 =", n1, "n2 =", n2, "operator =", operator, "display =", display.textContent);
});
