
let tempo = 0;

let ratoX = 400;
let ratoY = 300;

let velocidadeRato = 0;
let ratoXAnterior = 400;
let ratoYAnterior = 300;

let cores = [
  "#36C5C0",
  "#668FE8",
  "#A78BDF",
  "#F28C83"
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  ratoX = width / 2;
  ratoY = height / 2;

  ratoXAnterior = ratoX;
  ratoYAnterior = ratoY;
}

function draw() {

  
  background(16, 24, 39, 35);

  tempo += 0.025;

 
  ratoX = lerp(ratoX, mouseX, 0.04);
  ratoY = lerp(ratoY, mouseY, 0.04);

  
  let movimentoX = ratoX - ratoXAnterior;
  let movimentoY = ratoY - ratoYAnterior;

  velocidadeRato = dist(0, 0, movimentoX, movimentoY);

  
  velocidadeRato = constrain(velocidadeRato, 0, 20);


  ratoXAnterior = ratoX;
  ratoYAnterior = ratoY;

  
  let influenciaX = map(ratoX, 0, width, -80, 80);
  let influenciaY = map(ratoY, 0, height, -60, 60);


  
  for (let i = 0; i < 7; i++) {

    let posicao = height / 2 + (i - 3) * 55;

    stroke(cores[i % cores.length]);
    strokeWeight(3);
    noFill();

    let controlo1 =
      posicao + sin(tempo + i * 0.6) *
      (90 + velocidadeRato * 1.5) + influenciaY;

    let controlo2 =
      posicao + cos(tempo + i * 0.6) *
      (90 + velocidadeRato * 1.5) - influenciaY;

   
    let deslocacao = sin(tempo + i * 0.8) * 45;

    bezier(
      width * 0.08 + influenciaX, posicao + deslocacao,
      width * 0.30, controlo1,
      width * 0.70, controlo2,
      width * 0.92 + influenciaX, posicao - deslocacao
    );
  }


 
  for (let i = 0; i < 5; i++) {

    let posicao = height / 2 + (i - 2) * 75;

    
    let cor = color(cores[i % cores.length]);
    cor.setAlpha(85);

    stroke(cor);
    strokeWeight(1.5);
    noFill();

    let controlo1 =
      posicao + sin(tempo * 1.3 + i) *
      (130 + velocidadeRato) + influenciaY * 0.5;

    let controlo2 =
      posicao + cos(tempo * 1.3 + i) *
      (130 + velocidadeRato) - influenciaY * 0.5;

    bezier(
      width * 0.04, posicao,
      width * 0.30, controlo1,
      width * 0.70, controlo2,
      width * 0.96, posicao
    );
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
