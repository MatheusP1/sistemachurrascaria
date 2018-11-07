function inserirLinha(){

    //indentificacao da tabela
    var table = document.getElementById("tabela");
    //declaracao da linha
    var linha = document.createElement("tr");
    //declaracao dos campos
    var campoProduto = document.createElement("td");
    var campoPreco = document.createElement("td");
    //declaracao dos atributos
    var txtProduto = document.createTextNode('nome');
    var txtPreco = document.createTextNode('2.00');
    //add os atributos aos campos
    campoProduto.appendChild(txtProduto);
    campoPreco.appendChild(txtPreco);
    //add os campos com atributos a linha
    linha.appendChild(campoProduto);
    linha.appendChild(campoPreco);
    //add linha a tabela
    table.appendChild(linha);
   
}