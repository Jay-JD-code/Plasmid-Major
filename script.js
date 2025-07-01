document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission

  // Collect values
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Error Elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  let valid = true;

  // Name Validation
  if (name.length < 5) {
    nameError.textContent = "Name must be at least 5 characters";
    valid = false;
  }

  // Email Validation
  if (!email.includes('@')) {
    emailError.textContent = "Enter a valid email with @";
    valid = false;
  }

  // Phone Number Validation
  if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number";
    valid = false;
  }

  // Password Validation
  if (password.toLowerCase() === "password" || password === name || password.length < 8) {
    passwordError.textContent = "Password is not strong";
    valid = false;
  }

  // Confirm Password Validation
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    // You can clear the form or send data to a backend here
    document.getElementById('registrationForm').reset();
  }
});
