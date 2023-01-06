var inp = document.getElementById("txt");
var btn = document.getElementById("btn");
var txt = document.getElementById("txt1");
var sec = document.getElementById("sec");
var msg = document.getElementById("msg");

if (confirm("The input field available with 20 seconds only.\n Are you reay click \"OK\"") == true) {
    let b = Date.now();
    let i = 0;
    let start;
    start = setInterval(function () {
        if (i < 20) {
            txt.style.display = "flex";
            inp.focus();
            let c = Date.now() - b;
            sec.innerHTML = (c / 1000).toFixed(0);
            i++;
        }
        else {
            txt.style.display = "flex";
            txt.style.color = "red";
            msg.style.textAlign = "center";
            msg.innerHTML = "Time up! : \v";
            btn.disabled = true;
            btn.style.backgroundColor = "grey";
            btn.style.color = "#c1c1c1";
            clearInterval(start);
        }
    }, 1000);
}