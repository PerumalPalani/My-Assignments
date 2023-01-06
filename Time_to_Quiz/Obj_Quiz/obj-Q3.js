//--Questions Object--
const q1 = {
    question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
    option: [4, 7, 9, 13],
    answer: [4],
    status01: "",
    valid: ""
};
const q2 = {
    question: "The H.C.F of two numbers is 23 and the other two factors of their L.C.M are 13 and 14. The larger of the two number is:",
    option: [276, 299, 322, 345],
    answer: [322],
    status01: "",
    valid: ""
};
const q3 = {
    question: "Six bells commence tolling together and toll at intervals of 2,4,6,8,10 and 12 seconds respectively. In 30 minutes, how many times do they toll together ?",
    option: [4, 10, 15, 16],
    answer: [16],
    status01: "",
    valid: ""
};
const q4 = {
    question: "Let N be the greatest number that will devide 1305, 4665 and 6905, leaving the same remainder in each case. Then sum of the digits in N is:",
    option: [4, 5, 6, 8],
    answer: [4],
    status01: "",
    valid: ""
};
const q5 = {
    question: "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
    option: [9000, 9400, 9600, 9800],
    answer: [9600],
    status01: "",
    valid: ""
};
const arr = [q1, q2, q3, q4, q5];
// console.log(arr[0].answer);
//----target DOM--
var start = document.getElementById("btn");
var time = document.getElementById("time");
var divQ = document.getElementById("question");
var qus = document.getElementById("qus");
var opt = document.getElementById("opt");
var list = document.getElementsByTagName("li");
var ans = document.getElementById("ans");
var sta = document.getElementById("status001");
var resul = document.getElementById("res");
var tolT = document.getElementById("ttim");
var cAns = document.getElementById("cAns");
var wAns = document.getElementById("wAns");
var nAns = document.getElementById("nAns");
var nxt = document.getElementById("nxt");
var prev = document.getElementById("prev");
var sub = document.getElementById("sub");
let i = 0;
let j = 0;
let k = 0;
let d = 0;
let l = 0;
let startTime, mainFun;
let clickBtn = true;

//---Timing---
mainFun = start.addEventListener("click", function () {
    if (clickBtn === true) {
        divQ.style.display = "block";
        let a = Date.now();
        startTime = setInterval(() => {
            let b = Date.now() - a;
            let c = (b / 1000).toFixed(0);
            i = c;
            time.innerHTML = i + "<sub>s</sub>";
            time.style.color = "greenyellow";
            if (i < 100) {
                ans.innerHTML = "";
                quiz(c);
            }
            if (i >= 100) {
                divQ.style.display = "none";
                resul.style.display = "block";
                clearInterval(startTime);
                if (i >= 100) {
                    time.innerHTML = `<b>TimeUp!</b>`;
                    time.style.color = "red";
                }
                else {
                    time.innerHTML = `<b>Test Completed!</b>`;
                    time.style.color = "Greenyellow";
                }
                res();
            }
        }, 100);
        clickBtn = false;
    }
});

function quiz(c) {
    if (k < 20 && l < 5 && l >= 0) {
        /*--buttons display--*/
        if (l == 0) {
            prev.style.display = "none";
            nxt.style.display = "block";
        }
        else if (l == (arr.length - 1)) {
            nxt.style.display = "none";
            prev.style.display = "block";
        } else {
            prev.style.display = "block";
            nxt.style.display = "block";
        }
        k = c - d;
        divQ.style.backgroundColor = "grey";
        qus.innerHTML = (l + 1) + " . " + arr[l].question;
        let arr2 = arr[l].option;
        for (let z = 0; z < arr2.length; z++) {
            list[z].innerHTML = arr2[z];
            list[z].onclick = clickOpt;
        }
        if (k == 20) {
            d = i;
            k = 0;
            l = l + 1;
            arr[l].status01 = "Not Answered"
        }
        // console.log(k);
    }
}
function clickOpt() {
    if (l < 5) {
        console.log(this.innerText);
        arr[l].status01 = "Answered"
        if (this.innerHTML == arr[l].answer) {
            arr[l].valid = "correct"
            ans.innerHTML = "Correct Answer";
            ans.style.color = "green";
            d = i;
            k = 0;
            l = l + 1;
            mainFun;
        } else {
            arr[l].valid = "incorrect"
            ans.innerHTML = "Wrong Answer";
            ans.style.color = "red";
            d = i;
            k = 0;
            l = l + 1;
            mainFun;
        }
    }
}
function prevQus() {
    if ((l > 0 || l != 0) && i < 100) {
        k = 0;
        d = i;
        (l != 5) ? (l = l - 1) : (l = l - 2);
        quiz(d);
    }
}
function nextQus() {
    if ((l < !0 || l != 4) && i < 100) {
        k = 0;
        d = i;
        l = l + 1;
        quiz(d);
    }
}
function submition() {
    divQ.style.display = "none";
    resul.style.display = "block";
    clearInterval(startTime);
    res();
}
function res() {
    let c = 0;
    let w = 0;
    let n = 0;
    for (let x = 0; x < arr.length; x++) {
        if (arr[x].valid == "correct") {
            c = c + 1;
        }
        if (arr[x].valid == "incorrect") {
            w = w + 1;
        }
        if (arr[x].status01 == "Not Answered" || arr[x].status01 == "") {
            n = n + 1;
        }
    }
    tolT.innerHTML = i;
    cAns.innerHTML = c
    wAns.innerHTML = w;
    nAns.innerHTML = n;
}


