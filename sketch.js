let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria(); // palavra recebe alguma palavra aleatória
}

function palavraAleatoria() { // função palavra aleatória
  let palavras = ["Caminhante", "Caminho", "Caminha"]; // lista das palavras
  return random(palavras); // sorteia a palavra
}

function inicializaCores() { // inicia as cores
  background("white"); // fundo branco
  fill("black"); // letra preta
  textSize(64); // letra tamanho 64
  textAlign(CENTER, CENTER); // texto centralizado
}

function draw() {
  inicializaCores(); // executa a função

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length

  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
}
