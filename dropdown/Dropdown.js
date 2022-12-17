var year = document.getElementById("year01");
// var yearErr = document.getElementById("year02");
var month = document.getElementById("month01");
var monthErr = document.getElementById("month02");
var day = document.getElementById("day01");
var dayErr = document.getElementById("day02");
var age = document.getElementById("age01");
var valid = false;

//----year selection--
for (let i = 1940; i <= 2025; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = i;
    opt.value = i;
    year.appendChild(opt);
}
//---Month selection---
var month_value = ["select", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
var fragment = document.createDocumentFragment();
for (let i = 0; i < month_value.length; i++) {
    var month_opt = document.createElement("option");
    month_opt.innerHTML = month_value[i];
    month_opt.value = month_value[i];
    month.appendChild(month_opt);
}
//----Day selection---
var day_value01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var day_value02 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
var day_value03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
var day_value04 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function valueAssign() {
    const month_val = month.value;
    const year_val = year.value;
    console.log(month_val);
    console.log(year_val);
    if (month_val == "jan" || month_val == "mar" || month_val == "may" || month_val == "jul" || month_val == "aug" || month_val == "oct" || month_val == "dec") {
        for (let i = 0; i < day_value01.length; i++) {
            var day_opt = document.createElement("option");
            day_opt.innerHTML = day_value01[i];
            day_opt.value = day_value01[i];
            day.appendChild(day_opt);
        }
        return valid = true;
    }
    else if (month_val == "apr" || month_val == "jun" || month_val == "sep" || month_val == "nov") {
        for (let i = 0; i < day_value04.length; i++) {
            var day_opt = document.createElement("option");
            day_opt.innerHTML = day_value04[i];
            day_opt.value = day_value04[i];
            day.appendChild(day_opt);
        }
        return valid = true;
    }
    else if (month_val == "feb" && ((year_val % 4 == 0 && year_val % 100 != 0) || year_val % 400 == 0)) {
        for (let i = 0; i < day_value03.length; i++) {
            var day_opt = document.createElement("option");
            day_opt.innerHTML = day_value03[i];
            day_opt.value = day_value03[i];
            day.appendChild(day_opt);
        }
        return valid = true;
    }
    else if (month_val == "feb" && ((year_val % 4 != 0 && year_val % 100 == 0) || year_val % 400 != 0)) {
        for (let i = 0; i < day_value02.length; i++) {
            var day_opt = document.createElement("option");
            day_opt.innerHTML = day_value02[i];
            day_opt.value = day_value02[i];
            day.appendChild(day_opt);
        }
        return valid = true;
    }
    else {
        dayErr.innerHTML = "please select any one month!";
        dayErr.style.color = "red";
        // return valid = false;
    }
}
//----Age Calculation---
// var date = new Date();
// var currYear = date.getFullYear();
var ageValue = null;
function ageCal() {
    var date = new Date();
    var currYear = date.getFullYear();
    ageValue = currYear - year.value;
    if (valid == true) {
        if (ageValue >= 18) {
            age.style.color = "green";
            age.innerHTML = "Your age is " + ageValue + " are eligiable to use this application!";
        }
        else {
            // age.style.color = "red";
            // age.innerHTML = "Your age is " + ageValue + " are not eligiable to use this application!";
            alert("Your age is " + ageValue + " are not eligiable to use this application!");
        }
    }
}

//---local Storages

document.getElementById("formId").addEventListener('submit', (e) => {
    // e.preventDefault();
    if (valid == true) {
        ageCal();
        const val = {
            year01: year.value,
            month01: month.value,
            day01: day.value,
            age01: ageValue
        };
        localStorage.setItem("Obj", JSON.stringify(val));
        console.log(val);
    }
});
