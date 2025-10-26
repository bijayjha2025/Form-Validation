
const signUpForm = document.getElementById("signUpForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const viewPassword = document.getElementById("viewPassword");
const submitButton = document.getElementById("submitButton");
const inputs = signUpForm.querySelectorAll("input");

function validateName{
    const name = nameInput.value.trim();
    const regex = /^[A-Za-z\s]+$/;
    if(name===""){
        setError(nameInput, "Full name is required");
        return false;
    }
    else if(!regex.test(name)){
        setError(nameInput, "Name can only contain letters");
        return false;
    }
    else{
        setSuccess(nameInput);
        return true;
    }
}