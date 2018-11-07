
var agua = 2.00;
var snatural = 8.00;
var slata = 5.00;
var rlata = 5.00;
var rgarrafa = 8.00;
var cerveja = 6.00;
var sake = 14.00;
var cachaca = 12.00;
var pacoca = 1.00;
var tortinha = 2.00;
var paleta = 8.00;
var bolo = 6.00;
var sorvete = 15.00;



function inserirLinha(nome, valor){
    //indentificacao da tabela
    var table = document.getElementById("tabela");
    //declaracao da linha
    var linha = document.createElement("tr");
    //declaracao dos campos
    var campoProduto = document.createElement("td");
    var campoPreco = document.createElement("td");
    //declaracao dos atributos
    var txtProduto = document.createTextNode(nome);
    var txtPreco = document.createTextNode(valor);
    //add os atributos aos campos
    campoProduto.appendChild(txtProduto);
    campoPreco.appendChild(txtPreco);
    //add os campos com atributos a linha
    linha.appendChild(campoProduto);
    linha.appendChild(campoPreco);
    //add linha a tabela
    table.appendChild(linha);
   
}