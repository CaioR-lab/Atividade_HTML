var Jogos = [];

function salvar(){
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;
    let genero = document.getElementById("genero").value;
    let data = document.getElementById("data").value;
    let jogo = {"id":id, "nome":nome, "genero":genero, "data":data}
    Jogos.push(jogo)
    console.log(jogo)
    localStorage.setItem("jogos", JSON.stringify(Jogos))
    console.log("dado salvo")
}
//! de carregar lista
function definirjogos(){
    let local = localStorage.getItem ("jogos")
    if (local != null) {
        Jogos = JSON.parse(local)
    }
}

function listar(){
    //let tabela = document.getElementById("tabela")
    let tabelabody = document.getElementsByTagName("tbody")[0];
    Jogos.forEach(j => {
        tabelabody.innerHTML += `<tr><td>${j["id"]}</td><td>${j["nome"]}</td><td>${j["genero"]}</td><td>${j["data"]}</td>`
    });
    console.log("deveria funcionar")
    console.log(Jogos)
}
window.onload = function(){
    definirjogos()
}

function abrecadastro(){
    let request = new XMLHttpRequest();
    request.open('GET', 'cadastro.html');
    request.onload = function(){

        let areaprincipal = document.getElementById("areaprincipal")
        console.log(this.responseText);
        areaprincipal.innerHTML= this.responseText;
    }
    request.send();
    console.log("cadastro carregado")
}

function abrelistagem(){
    let request = new XMLHttpRequest();
    request.open('GET', 'listagem.html')
    request.onload = function(){
        
        let areaprincipal = document.getElementById("areaprincipal")
        console.log(this.responseText)
        areaprincipal.innerHTML= this.responseText;
        listar()
    }
    request.send();
    console.log("lista carregada")
}

function voltatelaprincipal(){
    let request = new XMLHttpRequest();
    request.open('GET', 'tela_principal.html')
    request.onload = function(){
        
        let areaprincipal = document.getElementById("areaprincipal")
        console.log(this.responseText)
        areaprincipal.innerHTML= this.responseText;
    }
    request.send();
    console.log("INCEPTION")
    alert("INCEPTON")

}

window.onload = function(){
    definirjogos()
}
