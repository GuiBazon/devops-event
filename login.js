// login.js
// simulacao de tela de login

function login(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
        console.log("login realizado com sucesso!");
        return true;
    } else {
        console.log("usuario ou senha invalidos.");
        return false;
    }
}

// exemplo de teste
login("admin", "1234");
login("teste", "0000");
