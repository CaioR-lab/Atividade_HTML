var categorias = [
];

function salvar(){
    let id = parseInt(document.getElementById("id").value);
    let nome = (document.getElementById("nome").value);
    let descricao = (document.getElementById("descricao").value);
    const categoria = {"id":id, "nome":nome , "descricao":descricao};

categorias.push(categoria);

localStorage.setItem("categorias", JSON.stringify(categorias));

window.open('trabjslistagem.html', '_blank');

console.log("deveria ter funcionado")
}

window.onload = function(){

    categorias = JSON.parse(localStorage.getItem("categorias"))
    if (categorias == null){
        categorias = []
    }

}

