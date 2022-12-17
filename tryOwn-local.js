var in1 = document.getElementById("input1");
var in2 = document.getElementById("input2");
var in3 = document.getElementById("input3");
var form = document.getElementById("user1");
var indexNo = document.getElementById("index");
var tab = document.getElementById("tab");
var tbody = document.getElementById("tbody");
var editBtn = document.getElementById("btn");
var deleteBtn = document.getElementById("btn1");
var tabClass = document.querySelector(".tobody");
var divMain = document.getElementById("da");
var arr = []; //--empty array
var row = null; //---row initialization
let j = 0;  //--Row creation index values
let l = null; //---edit, delete or update Object values
let trBackup = null; //---edited values change with tables
let f = 0; //---array index  values backup

//--Local storages---
if (localStorage.getItem("user") !== null) {
    var dataBackUp = JSON.parse(localStorage.getItem("user"));
    arr = [...dataBackUp];
    console.log(arr);
    for (j; j < arr.length; j++) {
        row = tbody.insertRow(j);
        let objVal = dataBackUp[j];
        let cell1 = row.insertCell(0);
        cell1.setAttribute("class", "data1");
        let cell2 = row.insertCell(1);
        cell2.setAttribute("class", "data2");
        let cell3 = row.insertCell(2);
        cell3.setAttribute("class", "data3");
        let cell4 = row.insertCell(3);
        cell1.innerText = objVal.fname;
        cell2.innerText = objVal.age;
        cell3.innerText = objVal.addr;
        cell4.innerHTML = "<input type='button' id = 'btn' class='edit_row' onclick ='editdata()' value='Edit'><input type='button' id = 'btn2' class='delete_row' value='Delete'>"
    }
    localStorage.setItem("user", JSON.stringify(arr));
    let val = localStorage.getItem("user");
    let outp = JSON.parse(val);
    console.log(outp);
}
//----input--
function submitData() {
    if (in1.value && in2.value && in3.value !== "") {
        if (confirm("If you are new user,Please press 'OK' or Existing user 'Cancel'") == true) {
            function userInput(fname, age, addr) {
                this.fname = fname;
                this.age = age;
                this.addr = addr;
            };
            let obj = new userInput(in1.value, in2.value, in3.value);
            arr.push(obj);
            localStorage.setItem("user", JSON.stringify(arr));
            let val = localStorage.getItem("user");
            let outp = JSON.parse(val);
            console.log(outp);
            row = tbody.insertRow(j);
            let objVal = outp[j];
            let cell1 = row.insertCell(0);
            cell1.setAttribute("class", "data1");
            let cell2 = row.insertCell(1);
            cell2.setAttribute("class", "data2");
            let cell3 = row.insertCell(2);
            cell3.setAttribute("class", "data3");
            let cell4 = row.insertCell(3);
            cell1.innerText = objVal.fname;
            cell2.innerText = objVal.age;
            cell3.innerText = objVal.addr;
            cell4.innerHTML = "<input type='button' id = 'btn' class='edit_row' onclick ='editdata()' value='Edit'><input type='button' id = 'btn2' class='delete_row' value='Delete'>"
            j++;
            form.reset();
        }
        else {
            updateData();
            function updateData(e) {
                console.log(l);
                for (let k = 0; k < arr.length; k++) {
                    let m = arr[k];
                    console.log(m);
                    if (JSON.stringify(m) === JSON.stringify(l)) {
                        f = k;
                        console.log(k);
                        break;
                    }
                }
                console.log(f);
                let indexValue = f;
                let searchObj = arr[indexValue];
                Object.defineProperties(searchObj, {
                    fname: { value: in1.value, },
                    age: { value: in2.value, },
                    addr: { value: in3.value, }
                });
                arr.splice(indexValue, 1, searchObj);
                console.log(arr);
                localStorage.setItem("user", JSON.stringify(arr));
                let val = localStorage.getItem("user");
                let outp = JSON.parse(val);
                console.log(outp);
                tr = trBackup
                tr.cells[0].innerText = in1.value;
                tr.cells[1].innerText = in2.value;
                tr.cells[2].innerText = in3.value;
                form.reset();
            }
        }
    }
    else {
        alert("Plese fill the form!");
    }
}
//----edit----
tabClass.addEventListener("click", editdata);
function editdata(e) {
    if (e.target.classList.contains("edit_row")) {
        tr = e.target.parentNode.parentNode;
        let fname01 = tr.cells[0].textContent;
        let age01 = tr.cells[1].textContent;
        let addr01 = tr.cells[2].textContent;
        l = { fname: fname01, age: age01, addr: addr01 };
        trBackup = tr;
        {
            in1.value = fname01;
            in2.value = age01;
            in3.value = addr01;
        }
    }
}
//-----Delete----
tabClass.addEventListener("click", deleteData);
function deleteData(e) {
    if (!e.target.classList.contains("delete_row")) {
        return;
    }
    const button1 = e.target;
    tr = e.target.parentNode.parentNode;
    let fname01 = tr.cells[0].textContent;
    let age01 = tr.cells[1].textContent;
    let addr01 = tr.cells[2].textContent;
    l = { fname: fname01, age: age01, addr: addr01 };
    console.log(l);
    for (let k = 0; k < arr.length; k++) {
        let m = arr[k];
        console.log(m);
        if (JSON.stringify(m) === JSON.stringify(l)) {
            f = k;
            console.log(k);
            break;
        }
    }
    let indexValue = f;
    let search = arr[indexValue];
    Object.defineProperties(search, {
        fname: { value: in1.value, },
        age: { value: in2.value, },
        addr: { value: in3.value, }
    });
    arr.splice(indexValue, 1);
    console.log(arr);
    localStorage.setItem("user", JSON.stringify(arr));
    let val = localStorage.getItem("user");
    let outp = JSON.parse(val);
    console.log(outp);
    j--;
    button1.closest("tr").remove();
}

//----Model box----
var mod = document.getElementById("model2");
var cl = document.getElementById("close");
var con = document.getElementById("para");
tabClass.addEventListener("click", moduleShow);
function moduleShow(e) {
        mod.style.display = "inline-block";
        divMain.style.filter = "blur(4px)";
        td = e.target;
        console.log(td);
        let info = td.innerHTML;
        let att = td.getAttribute("class");
        console.log(att);
        if (att == "data1") {
            con.innerHTML = "Name : " + info;
        }
        else if (att == "data2") {
            con.innerHTML = "Age : " + info;
        }
        else if (att == "data3") {
            con.innerHTML = "Address : " + info;
        }
        else if(att == "edit_row" || att == "delete_row"){
            mod.style.display = "none";
            divMain.style.filter = "blur(0px)";
        }
        cl.addEventListener("click", (e) => {
            mod.style.display = "none";
            divMain.style.filter = "blur(0px)";
        });
}

//--END-----



//------Starting thinking--

//-----update------
// function updateData() {
//     let indexValue = indexNo.value;
//     let search = arr[indexValue];
//     Object.defineProperties(search, {
//         fname: { value: in1.value, },
//         age: { value: in2.value, },
//         addr: { value: in3.value, }
//     });
//     arr.splice(indexValue, 1, search);
//     console.log(arr);
//     localStorage.setItem("user", JSON.stringify(arr));
//     let val = localStorage.getItem("user");
//     let outp = JSON.parse(val);
//     console.log(outp);
//     form.reset();
// }

//----delete---
// function deleteData(e) {
    // let indexValue = indexNo.value;
    // // let search = arr[indexValue];
    // arr.splice(indexValue, 1);
    // console.log(arr);
    // localStorage.setItem("user", JSON.stringify(arr));
    // let val = localStorage.getItem("user");
    // let outp = JSON.parse(val);
    // console.log(outp);
    // form.reset();
// }



//---Object assign---
// let a = { no1: 1, no2: 2, no3: 3, no4: 4 };
// let b = { n1: 5, n2: 6, n3: 7, n4: 8 };
// let c = Object.assign({no4:13,no5:5,no6:6},a);
// console.log(c);
// let d = Object.create(null);
// console.log(d);
// let e = Object.create(a);
// console.log(e);

// function sea(){
//     this.veg = "beans";
//     this.session = "sprit";
//     this.fruit = "goa"
// }
//     function fun(){
//         return sea.call(this);
//     }
// fun.prototype = Object.create(sea.prototype);
// const f = new fun();
// console.log(`this is ${f.veg} and ${f.session} then ${f.fruit}`);

//--define property--
// let g = {};
// Object.defineProperties(a, {
//     no1: {
//         value: 11,
//     },
//     no2: { value: 12, },
//     no3: { value: 13, },
//     no4: { value: 14 }
// });
// console.log(a);
//---string----
// let Str001 = new String("hello");
// let str = Str001.charAt(2);
// console.log(str);

//------confirm---
// if(confirm ("if u want to update!") == true){
//     console.log("normal data")
// }else{
//     console.log("updated data");
// }
// var tbody = document.getElementById("tbody");
// var getItemData = localStorage.getItem("user")
// var valu = JSON.parse(getItemData);
// for(j; j<arr.length; j++){
//     row = tbody.insertRow(j)
// }

//---match--
// let a001 = 2;
// console.log(Math.abs(a001+0.6));
// console.log(Math.hypot(8));