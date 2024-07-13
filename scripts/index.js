const btnLogin = document.getElementById("btnLogin");
const btnGoogle = document.getElementById("btnGoogle");
const radiusRemember = document.getElementById("radiusRemember");
let isChecked = false;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Preencha todos os campos!");
  } else {
    alert(
      `Obrigado por logar,\nEmail: ${email}\nSenha: ${password}\nLembrar de mim: ${
        isChecked ? "Sim" : "Não"
      }`
    );
  }

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  radiusRemember.checked = false;
  isChecked = false;
});

btnGoogle.addEventListener("click", (e) => {
  e.preventDefault();
  alert("No momento não é possível logar com o Google!");
});

radiusRemember.addEventListener("click", () => {
  if (!isChecked) {
    isChecked = true;
    radiusRemember.checked = true;
  } else {
    isChecked = false;
    radiusRemember.checked = false;
  }
});
