/**
 * const validation = () => {
    // pegando o valor do nome pelos names
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value == "admin" && password.value == "admin") {
    window.location.href = "teste.html";

    return;
  }

 

  if (username.value == "") {
      alert("Nome não informado");

      username.focus();

      return;
  }

  if (password.value == "") {
    alert("Senha não informada");

    return;
}

  
}
 */


const validation = () => {
  // pegando o valor do nome pelos names
var username = document.getElementById("username");
var password = document.getElementById("password");

  if (username.value == "admin" && password.value == "admin") {
    localStorage.setItem("acesso", true);
    alert("Usuário autenticado");

    window.location.href = "teste.html";

  } else {
    alert("usuário ou senha inválidos!");
  }  

}