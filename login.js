function login(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;

  var expectedUsername = "Shahi";
  var expectedPassword = "papa";

  var loginMessage = document.querySelector("#login-message"); // Get the login message element
  var blurredBackground = document.createElement('div');
  blurredBackground.classList.add('blurred-background');
  var loadingGif = document.createElement('img');
  loadingGif.src = 'iphone-loading.gif'; // Replace 'iphone-loading.gif' with the actual path to your GIF file
  loadingGif.classList.add('loading-gif');
  blurredBackground.appendChild(loadingGif);

  if (username === expectedUsername && password === expectedPassword) {
    loginMessage.textContent = "!!!! Karthick & Shahina Welcomes You !!!!";
    loginMessage.style.color = "green";
    setTimeout(function () {
      window.location.href = "indexx.html"; // Delayed page redirection
    }, 1000); // 2000ms delay (2 seconds)
    document.body.appendChild(blurredBackground); // Add the blurred background with loading GIF
  } else {
    loginMessage.textContent = "Sorry !!! You are not allowed in our privacy";
    loginMessage.style.fontSize = "0.7rem";
    loginMessage.style.color = "red";
  }
}

document.querySelector("#login-btn").addEventListener("click", login);