const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const eml = document.getElementById("email");
const phn = document.getElementById("phone");
const pwd = document.getElementById("password");
const cPwd = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", e => {
    const pwd1 = pwd.value;
    const pwd2 = cPwd.value;
    if (pwd1 !== pwd2) {
        alert("Your password and confirm passwords don't match!");
        e.preventDefault();
    }
});