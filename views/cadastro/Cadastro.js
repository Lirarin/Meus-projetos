import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// obtém o formulário de cadastro
const formCadastro = document.getElementById("form-cadastro");

// adiciona um evento de envio ao formulário
formCadastro.addEventListener("submit", function(event) {
  // evita que o formulário seja enviado normalmente
  event.preventDefault();

  // obtém os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // faz algo com os valores dos campos (aqui, apenas exibe-os no console)
  console.log("Nome: ", nome);
  console.log("Email: ", email);
  console.log("Senha: ", senha);

  // você pode adicionar mais código aqui para enviar os dados do formulário para um servidor, por exemplo
});

