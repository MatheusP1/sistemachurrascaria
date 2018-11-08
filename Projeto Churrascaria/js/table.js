

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
var valorRodizio = 40.00;
var valorParcial = 0.00;
var adicional = 0.00;
var total = 0.00;
var servico = 0.00;



function rodizio() {
  var value1 = document.getElementById('1').value;
  document.getElementById('1').value = valorRodizio;

  var value2 = document.getElementById('3').value;
  valorParcial = valorParcial + valorRodizio;
  document.getElementById('3').value = valorParcial;
}
function att(){
  var value4 = document.getElementById('4').value;
  servico = (valorParcial)/100;
  servico = servico*10;
  document.getElementById('4').value = parseFloat(servico.toFixed(2));

  var value5 = document.getElementById('5').value;
  total = valorParcial + servico;
  document.getElementById('5').value = parseFloat(total.toFixed(2));;
}
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

  var value3 = document.getElementById('2').value;
  adicional = adicional + valor;
  document.getElementById('2').value = adicional;

  var value5 = document.getElementById('3').value;
  valorParcial = valorParcial + valor;
  document.getElementById('3').value = valorParcial;
}
function fechar(){

  alert('Conta fechada');
  location.reload();

}