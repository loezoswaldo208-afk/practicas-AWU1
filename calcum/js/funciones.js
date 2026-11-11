const inputM = document.getElementById('m');
const inputCm = document.getElementById('cm');
const inputMm = document.getElementById('mm');
const btnBorrar = document.getElementById('btnBorrar');
inputM.addEventListener('input', function() {
    const m = parseFloat(this.value);
    if (!isNaN(m)) {
        inputCm.value = m * 100;
        inputMm.value = m * 1000;
    } else {
        vaciarInputs();
    }
});
inputCm.addEventListener('input', function() {
    const cm = parseFloat(this.value);
    if (!isNaN(cm)) {
        inputM.value = cm / 100;
        inputMm.value = cm * 10;
    } else {
        vaciarInputs();
    }
});
inputMm.addEventListener('input', function() {
    const mm = parseFloat(this.value);
    if (!isNaN(mm)) {
        inputM.value = mm / 1000;
        inputCm.value = mm / 10;
    } else {
        vaciarInputs();
    }
});
btnBorrar.addEventListener('click', vaciarInputs);
function vaciarInputs() {
    inputM.value = '';
    inputCm.value = '';
    inputMm.value = '';
}