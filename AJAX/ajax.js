
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
    request.open('GET', 'cadastro.html');
    request.send();
    console.log("listagem carregada")
}

function voltatelaprincipal(){
    let request = new XMLHttpRequest();
    request.open('GET', 'listagem.html');
    request.onload = funcaoonload();
    request.send();
    console.log("menu principal carregado")
}
