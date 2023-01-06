var msg = document.getElementById("msg");
var start = document.getElementById("start");
var timing = document.getElementById("msg2");
var master = document.getElementById("master");
//qustion-1
var q1 = document.getElementById("qus-1");
var c1 = document.getElementById("conQus1");
var vf1 = document.getElementById("veriQ1");
var ans1 = document.getElementsByName("circle");
//qustion-2
var q2 = document.getElementById("qus-2");
var c2 = document.getElementById("conQus2");
var vf2 = document.getElementById("veriQ2");
var ans2 = document.getElementsByName("circle1");
//qustion-3
var q3 = document.getElementById("qus-3");
var c3 = document.getElementById("conQus3");
var vf3 = document.getElementById("veriQ3");
var ans3 = document.getElementsByName("circle2");
//qustion-4
var q4 = document.getElementById("qus-4");
var c4 = document.getElementById("conQus4");
var vf4 = document.getElementById("veriQ4");
var ans4 = document.getElementsByName("square");
//qustion-5
var q5 = document.getElementById("qus-5");
var c5 = document.getElementById("conQus5");
var vf5 = document.getElementById("veriQ5");
var ans5 = document.getElementsByName("triangle");
//prev and next button
// var prev = document.getElementById("pre");
// var nxt = document.getElementById("nxt");
var fin = document.getElementById("fin");
//popup window
var win = document.getElementById("popup");
var t = document.getElementById("timeend");
var cAns = document.getElementById("cort");
var wAns = document.getElementById("wrg");
var nAns = document.getElementById("notAns");

var div = master.getElementsByTagName("div");
let arr = [];
let cAns1 = 0;
let wAns1 = 0;
let nAns1 = 0;
let i = 0;
let j = 0;
let k = 0;
let d = 0;
// let arr2 = [1, 2, 3, 4];

//---function---
start.addEventListener("click", function () {
    let a = Date.now();
    let startTime;
    //--time start--
    startTime = setInterval(function () {
        let b = Date.now() - a;
        let c = (b / 1000).toFixed(0);
        timing.innerHTML = c;
        i = c;
        //---Finish-
        fin.addEventListener("click", function () {
            j = 5;
        });
        //--question-1--
        if (j == 0 && k < 20) {
            q1.style.backgroundColor = "lightgrey";
            q1.style.display = "block";
            k = c - d;
            for (let l = 0; l < div.length; l++) {
                if (l == j) {
                    continue;
                }
                div[l].disabled = true;
                div[l].style.backgroundColor = "white";
            }
            c1.addEventListener("click", function () {
                let x = ans1.length;
                for (let m = 0; m < x; m++) {
                    if (ans1[m].checked) {
                        if (ans1[m].value == "πr2") {
                            vf1.innerHTML = "Correct Answer!";
                            vf1.style.color = "green";
                            arr.splice(0, 1, 1);
                        }
                        else {
                            vf1.innerHTML = "Wrong Answer!";
                            vf1.style.color = "red";
                            arr.splice(0, 1, -1);
                        }
                        j = 1;
                        d = i;
                        k = 0;
                        break;
                    }
                }
            });
            if (k == 20) {
                j = 1;
                k = 0;
                d = i;
                arr.splice(0, 1, null);
            }
        }
        //---question-2---
        if (j == 1 && k < 20) {
            q2.style.backgroundColor = "lightgrey";
            q2.style.display = "block";
            k = c - d;
            for (let l = 0; l < div.length; l++) {
                if (l == j) {
                    continue;
                }
                div[l].disabled = true;
                div[l].style.backgroundColor = "white";
                div[l].style.display = "none";
            }
            c2.addEventListener("click", function () {
                let x = ans2.length;
                for (let m = 0; m < x; m++) {
                    if (ans2[m].checked) {
                        if (ans2[m].value == "c/2π") {
                            vf2.innerHTML = "Correct Answer!";
                            vf2.style.color = "green";
                            arr.splice(1, 1, 2);
                        }
                        else {
                            vf2.innerHTML = "Wrong Answer!";
                            vf2.style.color = "red";
                            arr.splice(1, 1, -2);
                        }
                        j = 2;
                        k = 0;
                        d = i;
                        break;
                    }
                }
            });
            if (k == 20) {
                j = 2;
                k = 0;
                d = i;
                arr.splice(1, 1, null);
            }
        }
        //---question-3---
        if (j == 2 && k < 20) {
            q3.style.backgroundColor = "lightgrey";
            q3.style.display = "block";
            k = c - d;
            for (let l = 0; l < div.length; l++) {
                if (l == j) {
                    continue;
                }
                div[l].disabled = true;
                div[l].style.backgroundColor = "white";
                div[l].style.display = "none";
            }
            c3.addEventListener("click", function () {
                let x = ans3.length;
                for (let m = 0; m < x; m++) {
                    if (ans3[m].checked) {
                        if (ans3[m].value == "2πr") {
                            vf3.innerHTML = "Correct Answer!";
                            vf3.style.color = "green";
                            arr.splice(2, 1, 3);
                        }
                        else {
                            vf3.innerHTML = "Wrong Answer!";
                            vf3.style.color = "red";
                            arr.splice(2, 1, -3);
                        }
                        j = 3;
                        k = 0;
                        d = i;
                        break;
                    }
                }
            });
            if (k == 20) {
                j = 3;
                k = 0;
                d = i;
                arr.splice(2, 1, null);
            }
        }
        //---question-4---
        if (j == 3 && k < 20) {
            q4.style.backgroundColor = "lightgrey";
            q4.style.display = "block";
            k = c - d;
            for (let l = 0; l < div.length; l++) {
                if (l == j) {
                    continue;
                }
                div[l].disabled = true;
                div[l].style.backgroundColor = "white";
                div[l].style.display = "none";
            }
            c4.addEventListener("click", function () {
                let x = ans4.length;
                for (let m = 0; m < x; m++) {
                    if (ans4[m].checked) {
                        if (ans4[m].value == "a2") {
                            vf4.innerHTML = "Correct Answer!";
                            vf4.style.color = "green";
                            arr.splice(3, 1, 4);
                        }
                        else {
                            vf4.innerHTML = "Wrong Answer!";
                            vf4.style.color = "red";
                            arr.splice(3, 1, -4);
                        }
                        j = 4;
                        k = 0;
                        d = i;
                        break;
                    }
                }
            });
            if (k == 20) {
                j = 4;
                k = 0;
                d = i;
                arr.splice(3, 1, null);
            }
        }
        //---question-5---
        if (j == 4 && k < 20) {
            q5.style.backgroundColor = "lightgrey";
            q5.style.display = "block";
            k = c - d;
            for (let l = 0; l < div.length; l++) {
                if (l == j) {
                    continue;
                }
                div[l].disabled = true;
                div[l].style.backgroundColor = "white";
                div[l].style.display = "none";
            }
            c5.addEventListener("click", function () {
                let x = ans5.length;
                for (let m = 0; m < x; m++) {
                    if (ans5[m].checked) {
                        if (ans5[m].value == "1/2xbxh") {
                            vf5.innerHTML = "Correct Answer!";
                            vf5.style.color = "green";
                            arr.splice(4, 1, 5);
                        }
                        else {
                            vf5.innerHTML = "Wrong Answer!";
                            vf5.style.color = "red";
                            arr.splice(4, 1, -5);
                        }
                        j = 5;
                        k = 0;
                        d = i;
                        break;
                    }
                }
            });
            if (k == 20) {
                j = 5;
                k = 0;
                d = i;
                arr.splice(4, 1, null);
            }
        }
        //---Answers completed
        if (j == 5 && i < 100) {
            clearInterval(startTime);
            win.style.display = "block";
            for (let l = 0; l < div.length; l++) {
                if (l == j) {
                    continue;
                }
                div[l].disabled = true;
                div[l].style.backgroundColor = "white";
                div[l].style.display = "none";
            }
            t.innerHTML = i + "<sub>s</sub>";
            console.log(arr);
            for (let ans of arr) {
                if (ans > 0) {
                    cAns1 = cAns1 + 1;
                    console.log(cAns1);
                }
                else if (ans < 0) {
                    wAns1 = wAns1 + 1;
                }
                else{
                    nAns1 = nAns1 + 1;
                }
            }
            cAns.innerHTML = cAns1;
            cAns.style.color = "green";
            wAns.innerHTML = wAns1;
            wAns.style.color = "yellow";
            nAns.innerHTML = nAns1;
            nAns.style.color = "red";    
        }
        if (i >= 100) {
            msg.innerHTML = "Time up!";
            msg.style.color = "red";
            clearInterval(startTime);
        }
    }, 100);
});


