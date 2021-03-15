/* eslint-disable require-jsdoc */
/* eslint-disable strict */
function okClick() {
    // let button = document.getElementById("ok");
    // // button.style.color = "red";
    // // button.style.fontSize="5em";
    // button.className = "styled";
    setTimeout(multiplyAndDisplay, 2000, 3, 4); //a and b pass to function 3 and 4
}
function hello() {
    alert("Hello");
}
function multiplyAndDisplay(a, b) {
    alert(a * b);
}

window.onload = () => {
    document.getElementById("ok").onclick = okClick;
};

