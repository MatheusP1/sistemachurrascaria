<?php 

class Rodizio {

	public $valorRodizio;
	public $qtdPessoas;

	public $bebidas = array("Água","Refrigerante","Suco","Cerveja","Vinho","Caipirinha","Whisky");
	public $valorBebidas = array(4.5, 6, 8, 6.5, 45, 12, 10, 80);


	public $sobremesas = array("Açai","Sorvete","Bolo","Pudim","Mousse","Gelatina","Brigadeiro","Paçoca");
	public $valorSobremesas = array(22, 13, 7.5, 5, 7, 5, 4.5, 3);

	public $totalConta, $totalCaixa, $totalAcompanhamentos, $totalServicos;

	public function __construct($vR, $qtdP, $tA, $tCo,$tCa){

		$this -> valorRodizio = $vR;
		$this -> qtdPessoas = $qtdP;
		$this -> totalAcompanhamentos =$tA;
		$this -> totalConta = $tCo;
		$this -> totalCaixa = $tCa;



	}//construct


}//class



?>