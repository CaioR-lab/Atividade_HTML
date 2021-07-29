var categorias = [
];

function salvar(){
    let id = parseInt(document.getElementById("id").value);
    let nome = (document.getElementById("nome").value);
    let descricao = (document.getElementById("descricao").value);
    const categoria = {"id":id, "nome":nome , "descricao":descricao};

categorias.push(categoria);

localStorage.setItem("categorias", JSON.stringify(categorias));

console.log("deveria ter funcionado")
}

function Exibir(){
    let categoriaSC = localStorage.getItem("categorias")
    const categoriaJSON = JSON.parse(categoriaSC)

    var data = document.getElementById("tabela");
    console.log(tabela);
    var body = data.getElementsByTagName("tbody")[0];
    console.log(body);
    body.innerHTML = "";
    console.log("até aqui, ok");
    categoriaJSON.forEach(t => {
        body.innerHTML += `<tr><td>${t["id"]}</td><td>${t["nome"]}</td><td>${t["descricao"]}</td></tr>`;
    });
}
window.onload = function(){

    categorias = JSON.parse(localStorage.getItem("categorias"))
    Exibir();

}