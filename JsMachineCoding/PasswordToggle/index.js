const checkboxInput = document.getElementById('checkbox-input');
const mainInput = document.getElementById('main-input');

checkboxInput.addEventListener('change', function () {
    mainInput.type = mainInput.type === "text" ? "password" : "text";
})