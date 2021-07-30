var categoriaSC = localStorage.getItem("categorias")
var categoriaJSON = JSON.parse(categoriaSC)
var categorias = carregarcategoria();


function Exibir(){
    var data = document.getElementById("tabela");
    console.log(tabela);
    var body = data.getElementsByTagName("tbody")[0];
    console.log(body);
    body.innerHTML = "";
    console.log("até aqui, ok");
    categoriaJSON.forEach(t => {
        body.innerHTML += `<tr><td>${t["id"]}</td><td>${t["nome"]}</td><td>${t["descricao"]}<td><button onclick="deletar()">Deletar</button><button onclick="editar()">Editar</button></td>`;
    });
    
}

function editar(){
    console.log("chamando editar")
}

// !deletar nao funciona
function deletar(){
let categorias = carregarcategoria();
    console.log("chamando deletar")
    categorias.splice(categorias.findIndex(cat => cat.id == id), 1)
    localStorage.setItem("categorias", JSON.stringify(categrias))
}

function carregarcategoria(){
    categorias = JSON.parse(localStorage.getItem("categorias"))
    if (categorias == null){
        categorias = []
    }
    console.log(categorias)
    return categorias
}
window.onload = function(){
    Exibir();
}