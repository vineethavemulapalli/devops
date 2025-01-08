function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
  
    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // Validate gender selection
    if (!gender) {
      alert("Please select your gender.");
      return false;
    }
  
    alert("Registration successful!");
    return true;
  }
  