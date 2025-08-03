function signup() {
  const userData = {
    name: document.getElementById("name").value,
    mother: document.getElementById("mother").value,
    father: document.getElementById("father").value,
    age: document.getElementById("age").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  if (Object.values(userData).some(field => !field)) {
    document.getElementById("signupMessage").innerText = "Please fill in all fields.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[userData.username]) {
    document.getElementById("signupMessage").innerText = "Username already exists.";
    return;
  }

  users[userData.username] = userData;
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("signupMessage").style.color = "green";
  document.getElementById("signupMessage").innerText = "Sign-up successful! You can login now.";
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || {};
  const user = users[username];

  if (user && user.password === password) {
    document.getElementById("loginMessage").style.color = "green";
    document.getElementById("loginMessage").innerText = "Login successful!";
    setTimeout(() => {
      alert(`Welcome ${user.name}`);
      window.location.href = "dashboard.html";
    }, 500);
  } else {
    document.getElementById("loginMessage").innerText = "Invalid credentials.";
  }
}
