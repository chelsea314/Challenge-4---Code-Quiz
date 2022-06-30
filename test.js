var inputEl = document.getElementById("testInput");
var btnEl = document.getElementById("saveBtn");

function saveThatInputPls() {
    var valueFromTheHtml = inputEl.value;
    console.log(valueFromTheHtml)
}

btnEl.addEventListener("click", saveThatInputPls)