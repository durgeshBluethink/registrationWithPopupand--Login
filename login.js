// JavaScript for login logic
function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    // Get existing data from localStorage or initialize an empty array
    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Check if the email exists
    let user = userData.find(u => u.email === email);

    if (user) {
        // Check if the password is correct
        if (user.password === password) {
            showUserPopup(user);
        } else {
            showPopup('Incorrect password. Please try again.');
        }
    } else {
        showPopup('Invalid email. Please try again or register.');
        // Redirect to the registration page
        window.location.href = 'registration.html';
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

// Function to show a popup with user data in JSON format
function showUserPopup(user) {
    let userDataJson = JSON.stringify(user, null, 2); // Prettify JSON with indentation
    showPopup('Login successful. Welcome, ' + user.name + '!\nUser Data:\n' + userDataJson);
}
