
const form = document.getElementById("signUpForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const viewPassword = document.getElementById("viewPassword");


viewPassword.addEventListener("click", ()=>{
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    viewPassword.textContent = type ==="password" ? "👁️" : "🙈";
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
 const name = nameInput.value.trim();
 const phone = phoneInput.value.trim();
 const email = emailInput.value.trim();
 const password = passwordInput.value.trim();
 const confirmPassword = confirmPasswordInput.value.trim();

 if (name === ""){
    setError(nameInput, "Full name is required");
 } else if (!/^[A-Za-z\s]+$/.test(name)){
    setError(nameInput, "Name can only contain letters");
 } else{
    setSuccess(nameInput);
 }

 if (email === ""){
    setError(emailInput, "Email is required");
 }
 else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    setError(emailInput, "Please enter a valid email address");
 }
 else{
    setSuccess(emailInput);
 }

 if (phone===""){
    setError(phoneInput, "Phone number is required");
 }
 else if(!/^[0-9]{10}$/.test(phone)){
    setError(phoneInput, "Phone number must be of 10 digits");
 }
 else{
    setSuccess(phoneInput);
 }

 if(password===""){
    setError(passwordInput, "Password can not be empty");
 }
 else if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)){
    setError(passwordInput, "Min 8 chars, 1 capital, 1 number, 1 special character");
 }
 else{
    setSuccess(passwordInput);
 }

 if(confirmPassword === "") {
    setError(confirmPasswordInput, "Please confirm your password");
 }
 else if(confirmPassword !== password) {
    setError(confirmPasswordInput, "Passwords do not match");
  } 
 else{
    setSuccess(confirmPasswordInput);
  }
}

function setError(input, message) {
  const holder = input.closest(".holderControls");
  const small = holder.querySelector("small");
  small.innerText = message;
  holder.classList.add("error");
  holder.classList.remove("success");
  small.style.visibility = "visible";
}

function setSuccess(input) {
  const holder = input.closest(".holderControls");
  const small = holder.querySelector("small");
  small.innerText = "";
  holder.classList.add("success");
  holder.classList.remove("error");
  small.style.visibility = "hidden";
}

