var jogos = [

];

function salvar(){
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;
    let genero = document.getElementById("genero").value;
    let data = document.getElementById("data").value;
    let jogo = {"id":id, "nome":nome, "genero":genero, "data":data}
    jogos.push(jogo)
    localStorage.setItem("jogos", JSON.stringify("jogos"))
    console.log("dado salvo")
}

function definirjogos(){
    if (localStorage.getItem("jogos") != null) {
        var jogos = JSON.parse(localStorage.getItem("jogos"))
    }
}

function listar(){
    //let tabela = document.getElementById("tabela")
    let tabelabody = document.getElementsByTagName("tbody")[0];
    jogos.forEach(j => {
        tabelabody.innerHTML += `<tr><td>${j["id"]}</td><td>${j["nome"]}</td><td>${j["genero"]}</td><td>${j["data"]}</td>`
    });
    console.log("deveria funcionar")
    console.log(jogos)
}
window.onload = function(){
    definirjogos()
}