const digits = document.querySelectorAll('button')
const display = document.getElementById('display')
 
var n1 = 0
var n2 = ""
var operator = ""
 
digits.forEach((digit, index) => {
    number = parseInt(digit.innerText)
    operators = ['+', '-', '*', '/']
 
    digit.addEventListener('click', () => {
 
        if (digit.innerText == "C") {
            display.innerText = "0"
            n1 = 0
            n2 = ""
        } else if (operators.includes(digit.innerText)) {
            n1 = parseInt(display.textContent)
            n2 = ""
            display.textContent += digit.innerText
            operator = digit.innerText
        } else if (digit.innerText == "=") {
            n2 = parseInt(n2)
            display.textContent = cal(n1, n2, operator)
            n2 = ""
        }
        else {
            if (display.innerText == "0") {
                display.innerText = ""
            }
            display.textContent += digit.innerText
            n2 += digit.innerText
            console.log(n1, n2)
        }
    })
 
})
 
cal = (n1, n2, oper) => {
    if (oper == "+")
        return n1 + n2
    else if (oper == "-")
        return n1 - n2
    else if (oper == "*")
        return n1 * n2
    else if (oper == "/")
        return n1 / n2
}
 
// ปิดการกด Enter ใน form เพื่อไม่ให้ submit
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});
 
 
 
// --- รองรับการกดจากคีย์บอร์ด ---
document.addEventListener("keydown", function (event) {
    const key = event.key;
 
    // ถ้ากดตัวเลข
    if (!isNaN(key)) {
        if (display.innerText === "0") display.innerText = "";
        display.innerText += key;
        n2 += key;
        return;
    }
 
    // ถ้ากดเครื่องหมาย + - * /
    if (['+', '-', '*', '/'].includes(key)) {
        n1 = parseInt(display.textContent);
        operator = key;
        display.textContent += key;
        n2 = "";
        return;
    }
 
    // ถ้ากด Enter ให้คำนวณ
    if (key === "Enter") {
        n2 = parseInt(n2);
        display.textContent = cal(n1, n2, operator);
        n2 = "";
        return;
    }
 
    // ถ้ากด Backspace ให้ลบตัวสุดท้าย
    if (key === "Backspace") {
        display.textContent = display.textContent.slice(0, -1);
        n2 = n2.slice(0, -1);
 
        if (display.textContent === "") display.textContent = "0";
        return;
    }
 
    // ถ้ากด Escape หรือ C ให้เคลียร์
    if (key === "Escape" || key.toLowerCase() === "c") {
        display.innerText = "0";
        n1 = 0;
        n2 = "";
        operator = "";
        return;
    }
});