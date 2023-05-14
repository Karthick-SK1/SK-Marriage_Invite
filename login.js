function login() {
  // Get the values of the username and password input fields.
  var username = document.querySelector("input[type=text]").value;
  var password = document.querySelector("input[type=password]").value;

  // Set the expected username and password values.
  var expectedUsername = "Shahi";
  var expectedPassword = "papa";

  if (username === expectedUsername && password === expectedPassword) {
    // The user logged in successfully.
    alert("Hello Azhagi !!!!");
    window.location.href = "main.html"; // redirect to blog page
  } else {
    // The user did not log in successfully.
    alert("Incorrect Username or Password!");
  }
}

// Add an event listener to the Login button to call the login() function when it's clicked.
document.querySelector("button").addEventListener("click", login);
