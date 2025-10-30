
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

function validateEmail{
    const email= emailInput.value.trim();
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email===""){
        setError(emailInput, "Email is required");
        return false;
    }
    else if(!regex.test(email)){
        setError(emailInput, "Please enter a valid email address");
        return false;
    }
    else{
        setSuccess(emailInput);
        return true;
    }
}

function validatePhone{
    const phone = phoneInput.value.trim();
    const regex = /^[0-9]{10}$/;
    if (phone===""){
        setError(phoneInput, "Phone number is required");
        return false;
    }else if(!regex.test(phone)){
        setError(phoneInput, "Phone number must be of 10 digits");
        return false;
    }else{
        setSuccess(phoneInput);
        return true;
    }
}

function validatePassword{
    const password = passwordInput.value.trim();
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(password===""){
        setError(passwordInput, "Password can not be empty");
        return false;
    }
    else if(!regex.test(password)){
        setError(passwordInput, "Min 8 chars, 1 capital, 1 number, 1 special character");
        return false;
    }
    else{
        setSuccess(passwordInput);
        return true;
    }
}

function validateConfirmPassword{
    const password = passwordInput.value.trim();
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(password===""){
        setError(passwordInput, "Password can not be empty");
        return false;
    }
    else if(!regex.test(password)){
        setError(passwordInput, "Min 8 chars, 1 capital, 1 number, 1 special character");
        return false;
    }
    else{
        setSuccess(passwordInput);
        return true;
    }
}




