const text = document.getElementById("text");
const far = document.getElementById("far");
const cel = document.getElementById("cel");
const result = document.getElementById("result");
let temp;


function covert() {
    if (far.checked) {
        temp = Number(text.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if (cel.checked) {
        temp = Number(text.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) + "°C"

    }
    else {
        result.textContent = "Select a Unit!"
    }
}