function validateLogin() {
  const validUsername = "luci";
  const validPassword = "easypassword";
  const validEmail = "jaganjaganrout@gmail.com";

  const username = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (username === validUsername && password === validPassword && email === validEmail) {
      // Store the username in localStorage
      localStorage.setItem('username', username);
      
      // Redirect to main.html
      window.location.href = 'main.html';
  } else {
      alert('Invalid username, email, or password. Please try again.');
  }
}




function showLoadingAndValidateLogin() {

  document.getElementById('loadingScreen').style.visibility = 'visible';


  setTimeout(validateLogin, 2000);
}

function validateLogin() {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;


  if (email === "jaganjaganrout@gmail.com" && password === "easypassword" && name === "luci") {
      
      document.getElementById('loadingScreen').style.visibility = 'hidden';

     
      window.location.href = "main.html";
  } else {
      
      document.getElementById('loadingScreen').style.visibility = 'hidden';


      alert("Invalid credentials. Please try again.");
  }
}

