/* eslint-disable require-jsdoc */
/* eslint-disable strict */
function showFullName() {
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    document.getElementById("output").innerHTML = firstName + " " + lastName;
}