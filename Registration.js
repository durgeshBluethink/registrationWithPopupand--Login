// JavaScript for registration logic
function register() {
    let name = document.getElementById('regName').value;
    let mobile = document.getElementById('regMobile').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;

    // Check if any required field is empty
    if (!name || !mobile || !email || !password) {
        showPopup('Please fill in all required fields, including a password.');
        return; // Do not proceed with registration if any field is empty
    }

    // Get existing data from localStorage or initialize an empty array
    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Check if the email or mobile already exists
    if (userData.some(user => user.email === email)) {
        showPopup('Email already exists. Please use a different email.');
    } else if (userData.some(user => user.mobile === mobile)) {
        showPopup('Mobile number already exists. Please use a different mobile number.');
    } else {
        // Add the new user to the userData array
        userData.push({ name, mobile, email, password });
        // Save the updated data back to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        showPopup('Registration successful. You can now log in.');

        // Clear the registration form
        document.getElementById('regName').value = '';
        document.getElementById('regMobile').value = '';
        document.getElementById('regEmail').value = '';
        document.getElementById('regPassword').value = '';
        
        // Show the login button
        showLoginButton();
    }
}

// Function to show a popup with custom content
function showPopup(content) {
    document.getElementById('popupContent').innerText = content;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

// Function to show the login button on the registration page
function showLoginButton() {
    let loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.style.display = 'inline-block';
    }
}
