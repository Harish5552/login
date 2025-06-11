const users = [
  { username: "admin", email: "admin@example.com", password: "admin123" },
  { username: "john", email: "john@example.com", password: "john123" }
];

function openAuth(provider) {
  let url = "";
  switch (provider) {
    case "google":
      url = "https://accounts.google.com";
      break;
    case "github":
      url = "https://github.com/login";
      break;
    case "linkedin":
      url = "https://www.linkedin.com/login";
      break;
  }
  window.open(url, "_blank");
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const found = users.find(
    user => (user.username === usernameInput || user.email === usernameInput) && user.password === passwordInput
  );

  if (found) {
    message.style.color = "green";
    message.textContent = `✅ Welcome back, ${found.username}!`;
  } else {
    message.style.color = "red";
    message.textContent = "❌ Invalid login credentials.";
  }
});
