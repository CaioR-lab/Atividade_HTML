var tabela = [
    {"id":1,"nome":"Eletronicos", "descricao":"produtos eletronicos"},
    {"id":2,"nome":"Automoveis", "descricao":"produtos automobilisticos"}
];

function Salvar(){
var id = parseInt(document.getElementById("id").value);
var nome = (document.getElementById("nome").value);
var descricao = (document.getElementById("descricao").value);
console.log (`id:${id},nome:${nome},descricao${descricao}`)
categoria = {"id":id, "nome":nome , "descricao":descricao};
tabela.push(categoria);
Carregar();
console.log("é, nao carregou")
}

function Carregar()
{
    var data = document.getElementById("tabela");
    console.log(tabela);
    var body = data.getElementsByTagName("tbody")[0];
    console.log(body);
    body.innerHTML = "";
    console.log("até aqui, ok");
    tabela.forEach(t => {
        body.innerHTML += `<tr><td>${t["id"]}</td><td>${t["nome"]}</td><td>${t["descricao"]}</td></tr>`;
    });
    console.log("funcao sendo chamada, nada acontecendo desgraça")

    window.onload = function(){
        Carregar();
    }
}
