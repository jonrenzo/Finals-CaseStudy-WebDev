let username = document.getElementById("username");
let password = document.getElementById("password");
let loginForm = document.getElementById("login-form");

var numAttempt = 0;
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var usernameVal = username.value.trim();
  var passwordVal = password.value.trim();

  if (usernameVal === "admin" && passwordVal === "password") {
    location.href = "landing.html";
  } else {
    alert("Attempts: " + numAttempt);
    numAttempt++
    if (numAttempt > 3) {
      username.disabled = true;
      password.disabled = true;
      alert("Maximum number of attempts reached. Contact your administrator.");
    } else {
      alert("Invalid username or password");
    }
  }  

});

