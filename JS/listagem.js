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

window.onload = function () {
    Exibir();
}