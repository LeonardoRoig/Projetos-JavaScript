let valor_a = 10;
let valor_b = 20;

if(valor_a < valor_b) {
    console.log("OK!!!!");
    console.log("Parabéns!") // Multiplos "Output"
}

let valor_a = 100;
let valor_b = 150;
if(valor_a < valor_b) console.log("Uia!!!!") // Output única.


//Condicionais
let valor = 10;
if(valor > 5) {
    console.log("Sim");
} else {
    console.log("Não")
}


let valor_c = 200;
if(valor_c < 100) {
    console.log("Menor que 100 ");
} else if (valor_c > 100) {
    console.log("Maior que 100 ");
} else {
    console.log("Outro...")
}



// Operador Condicional   1º True 2º False

let nome = "Leo";
let verificacao = nome == "Leo" ? "Sim" : "Não";
console.log("O utilizador está autorizado?" + verificacao);



