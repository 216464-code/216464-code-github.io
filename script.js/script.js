/* validação de formulario */
document.getElementById("formContato").addEventListener("submit", function(event){

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        event.preventDefault();
    }

});
/* modo escuro */

function modoEscuro() {

    document.body.classList.toggle("darkMode");

    let icone = document.getElementById("iconeTema");

    if(document.body.classList.contains("darkMode")) {

        icone.src = "../imagens/light_mode.svg";
        icone.alt = "Modo Claro";

    } else {

        icone.src = "../imagens/dark_mode.svg";
        icone.alt = "Modo Escuro";

    }
}

/* Tamanho Letra */

function aumentarFonte() {

    let tamanhoAtual = window.getComputedStyle(document.body).fontSize;

    tamanhoAtual = parseFloat(tamanhoAtual);

    document.body.style.fontSize = (tamanhoAtual + 2) + "px";
}

function diminuirFonte() {

    let tamanhoAtual = window.getComputedStyle(document.body).fontSize;

    tamanhoAtual = parseFloat(tamanhoAtual);

    document.body.style.fontSize = (tamanhoAtual - 2) + "px";
}