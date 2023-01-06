var fyear = document.getElementById("formYear");
var inyear = document.getElementById("input-year");
var pre = document.getElementById("preview01")
var head = document.getElementById("current");
var nxt = document.getElementById("next02");
var list = document.getElementById("listyear");
var row = document.getElementsByName("row1");
var table = document.querySelector("#listyear");
var cells = document.querySelectorAll(".cell1");
var opt = document.getElementById("opt");
var date = new Date();
var year = date.getFullYear();
let l = Math.floor(year / 12) * 12;
let k = l;
// console.log(k);
let count = 0;
//--default current year--
inyear.value = year;
head.innerText = year;
// console.log(row.length);

//---function--
inyear.addEventListener("click", function () {
    opt.style.display = "block";
    if (count == 0) {
        drop();
        //--selection---
        sele();
    }
});
//---function--
function drop() {
    if (l >= 0) {
        for (let i = 0; i < row.length; i++) {
            for (let j = 0; j < 3; j++) {
                let rowsize = row[i].closest("td");
                // console.log(rowsize);
                if (rowsize == null) {
                    let a = row[i].insertCell(j);
                    a.setAttribute("class", "cell1");
                    a.innerHTML = k + 1;
                    k = k + 1;
                }
            }
            // console.log(row[i]);
        }
        //--selection---
        sele();
    }
    count++;
}
//--previews button--
pre.addEventListener('click', function (e) {
    if (l >= 0) {
        for (let i = 0; i < row.length; i++) {
            for (let j = 0; j < 3; j++) {
                let a = row[i].deleteCell(0);
            }
        }
        l = (l - 12);
        k = l
        return drop();
    }
});
//-next button--
nxt.addEventListener('click', function (e) {
    if (l >= 0) {
        for (let i = 0; i < row.length; i++) {
            for (let j = 0; j < 3; j++) {
                let a = row[i].deleteCell(0);
            }
        }
        l = (l + 12);
        k = l;
        count = 0;
        return drop();
    }
});
//--any changes in input--
inyear.addEventListener("change", function () {
    let m = new RegExp('[0-9]');
    let n = inyear.value;
    if (m.test(n) == true) {
        for (let i = 0; i < row.length; i++) {
            for (let j = 0; j < 3; j++) {
                let a = row[i].deleteCell(0)
            }
        }
        l = Math.floor(n / 12) * 12;
        k = l;
        count = 0;
        head.innerText = n;
        return drop();
    }
});
//----each cell---
table.addEventListener('click', function (e) {
    const cell = e.target.closest("td");
    if (!cell) { return; }
    inyear.value = cell.innerHTML;
    head.innerText = cell.innerHTML;
    // console.log(cell.innerHTML);
    //--selection---
    sele();
});
//--selection---
function sele() {
    let x = inyear.value;
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < 3; j++) {
            let cellVal = row[i].cells[j];
            if (cellVal.innerHTML == x) {
                let z = cellVal.style.color = "grey";
            }
            else {
                let z = cellVal.style.color = "black";
            }
        }
    }
}


