const togglePassword = (button) => {
  button.classList.toggle("showing");
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
};
