function login(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;

  var expectedUsername = "Shahi";
  var expectedPassword = "papa";

  var loginMessage = document.querySelector("#login-message"); // Get the login message element

  if (username === expectedUsername && password === expectedPassword) {
    loginMessage.textContent = "!!!! Karthick & Shahina Welcomes You !!!!";
    loginMessage.style.color = "green";
    window.location.href = "indexx.html";
  } else {
    loginMessage.textContent = "Sorry !!! You are not allowed in our privacy";
    loginMessage.style.color = "red";
  }
}

document.querySelector("#login-btn").addEventListener("click", login);