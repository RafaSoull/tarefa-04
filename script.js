// verbo + Substantivo
function calcular(){
var valor1 = parseInt(document.getElementById('primeiroNumero').value);
var valor2 = parseInt(document.getElementById('segundoNumero').value);
var valor3 = parseInt(document.getElementById('segundoNumero').value);
var total = valor1 + valor2 + valor3; 

document.getElementById('resultado').value = total / 3;

};