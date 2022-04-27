


function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}

let username = document.getElementById('USER NAME');
let pasword = document.getElementById('USER PASSWORD');
let email = document.getElementById('USER EMAIL');
let submit = document.getElementById('Submit');


submit.onclick = function() {

    let checker = true;

    if (username.value < 6 && username.value[0].toUpperCase() === username.value[0] && pasword.value < 6 && validateEmail(email.value) === checker) {
        alert('true answer');
        checker = false;
    } else(alert('please give true answer'))


}