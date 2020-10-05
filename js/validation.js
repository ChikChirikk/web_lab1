let y_input = document.getElementById("y");
let r_input = document.getElementById("r");


let R_ox = document.getElementById("R_ox");
let R2_ox = document.getElementById("R2_ox");
let mR2_ox = document.getElementById("-R2_ox");
let mR_ox = document.getElementById("-R_ox");
let R_oy = document.getElementById("R_oy");
let R2_oy = document.getElementById("R2_oy");
let mR2_oy = document.getElementById("-R2_oy");
let mR_oy = document.getElementById("-R_oy");


r_input.onchange = function () {
    redraw_r();
}


function redraw_r() {
    let R = document.getElementById("r").value;
    if (!(R == "")) {
        R_ox.innerText = (R);
        R2_ox.innerText = (R / 2);
        mR2_ox.innerText = (-R / 2);
        mR_ox.innerText = (-R);
        R_oy.innerText = (R);
        R2_oy.innerText = (R / 2);
        mR2_oy.innerText = (-R / 2);
        mR_oy.innerText = (-R);
    } else {
        R_ox.innerText = ("R");
        R2_ox.innerText = ("R/2");
        mR2_ox.innerText = ("-R/2");
        mR_ox.innerText = ("-R");
        R_oy.innerText = ("R");
        R2_oy.innerText = ("R/2");
        mR2_oy.innerText = ("-R/2");
        mR_oy.innerText = ("-R");
    }
}

function check_input() {
    if (!/^-?\d+(\.|,)?\d*$/i.test(y_input.value)) {
        y_input.setCustomValidity("Значение должно быть числом в интервале [-5;5]")
        alert("Значение \"Y\" должно быть числом в интервале [-5;5]");
        y_input.value = "";
        return false;
    } else if (y_input.value.replace(/[,]/, ".") >= -5 && y_input.value.replace(/[,]/, ".") <= 5) {
        if (/(\.|,)$/i.test(y_input.value)) {
            alert("Значение \"Y\" должно быть числом в интервале [-5;5]");
            y_input.value = "";
            return false;
        } else {
            y_input = y_input.value.replace(/[,]/, ".");
            return true;
        }
    } else if (/(\.|,)$/i.test(y_input.value)) {
        alert("Значение \"Y\" должно быть числом в интервале [-5;5]");
        y_input.value = "";
        return false;
    } else {
        alert("Значение \"Y\" должно быть числом в интервале [-5;5]");
        y_input.value = "";
        return false;
    }

}
