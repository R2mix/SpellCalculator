
let coutFile = ["cout1.svg", "cout2.svg", "cout3.svg", "cout4.svg"];
let couleurFile = ["rouge.svg", "vert.svg", "bleu.svg", "blanc.svg", "jaune.svg", "pure.svg", "multi.svg"];
let argumentFile = ["costume1.svg", "portee.svg", "zone.svg", "temps.svg" , "effet.svg"];

let coutImage = [];
let couleurImage = [];
let argumentImage = [];

let currentCoutImage = 0;
let currentCouleurImage = 0;

let currentArgument1Image = 0;
let currentArgument2Image = 0;
let currentArgument3Image = 0;
let currentArgument4Image = 0;

let range = 0;
let zone = 0;
let time = 0;
let effet = 0;

function setup() {

  createCanvas(600, 600);

  for (let i = 0; i < 4; i++) {
    coutImage[i] = loadImage(coutFile[i]);
  }
  for (let i = 0; i < 7; i++) {
    couleurImage[i] = loadImage(couleurFile[i]);
  }
  for (let i = 0; i < 5; i++) {
    argumentImage[i] = loadImage(argumentFile[i]);
  }

}

function draw() {
  background(0);
  imageMode(CENTER);
  push();
  translate(300, 300);
  image(coutImage[currentCoutImage], 20, -20);
  image(couleurImage[currentCouleurImage], 20, -20);
  pop();

  arg1affiche();
  arg2affiche();
  arg3affiche();
  arg4affiche();
 

  
  range = 0;
  zone = 0;
  time = 0;
  effet = 0;
  calcul();
  textSize(20);
  fill(255);
  text("portée : " + range, 50, 50);
  text("zone : " + zone, 50, 75);
  text("temps : " + time, 50, 100);
  text("effet : " + effet, 50, 125);

  /*
    stroke(255, 0, 0);
    strokeWeight(5);
    point(arg4X, arg4Y);
  */
}


function calcul() {

  effet += 1;

  if (currentArgument1Image == 1) range += 10;
  if (currentArgument1Image == 2) zone += 5;
  if (currentArgument1Image == 3) time += 1;
  if (currentArgument1Image == 4) effet += 1;

  if (currentCoutImage > 0 && currentArgument2Image == 1) range += 10;
  if (currentCoutImage > 0 && currentArgument2Image == 2) zone += 5;
  if (currentCoutImage > 0 && currentArgument2Image == 3) time += 1;
  if (currentCoutImage > 0 && currentArgument2Image == 4) effet += 1;

  if (currentCoutImage > 1 && currentArgument3Image == 1) range += 20;
  if (currentCoutImage > 1 && currentArgument3Image == 2) zone += 10;
  if (currentCoutImage > 1 && currentArgument3Image == 3) time += 2;
  if (currentCoutImage > 1 && currentArgument3Image == 4) effet += 2;

  if (currentCoutImage > 2 && currentArgument4Image == 1) range += 20;
  if (currentCoutImage > 2 && currentArgument4Image == 2) zone += 10;
  if (currentCoutImage > 2 && currentArgument4Image == 3) time += 2;
  if (currentCoutImage > 2 && currentArgument4Image == 4) effet += 2;

}

function mouseClicked() {
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  print(mouseX, mouseY);

  if (d > 40 && d < 60 + 25 * currentCoutImage) {
    currentCoutImage++;
    currentCoutImage = currentCoutImage % coutFile.length;
  }

  if (d < 30) {
    currentCouleurImage++;
    currentCouleurImage = currentCouleurImage % couleurFile.length;
  }

  arg1count();
  arg2count();
  arg3count();
  arg4count();
}

let arg1X, arg1Y;

function arg1affiche() {

  if (currentCoutImage == 0) {
    arg1X = 215;
    arg1Y = 355;
    image(argumentImage[currentArgument1Image], arg1X + 24, arg1Y - 22);
  }
  if (currentCoutImage == 1) {
    arg1X = 210;
    arg1Y = 390;
    image(argumentImage[currentArgument1Image], arg1X + 22, arg1Y - 22);
  }
  if (currentCoutImage == 2) {
    arg1X = 210;
    arg1Y = 420;
    image(argumentImage[currentArgument1Image], arg1X + 20, arg1Y - 21);
  }
  if (currentCoutImage == 3) {
    arg1X = 150;
    arg1Y = 380;
    image(argumentImage[currentArgument1Image], arg1X + 20, arg1Y - 17);
  }
}

function arg1count() {

  if (dist(mouseX, mouseY, arg1X, arg1Y) < 25) {
    currentArgument1Image++;
    currentArgument1Image = currentArgument1Image % argumentFile.length;
  }

}


let arg2X, arg2Y;

function arg2affiche() {

  if (currentCoutImage == 1) {
    arg2X = 380;
    arg2Y = 210;
    image(argumentImage[currentArgument2Image], arg2X + 27, arg2Y - 19);
  }
  if (currentCoutImage == 2) {
    arg2X = 300;
    arg2Y = 150;
    image(argumentImage[currentArgument2Image], arg2X + 21, arg2Y - 19);
  }
  if (currentCoutImage == 3) {
    arg2X = 300;
    arg2Y = 130;
    image(argumentImage[currentArgument2Image], arg2X + 20, arg2Y - 20);
  }
}

function arg2count() {

  if (dist(mouseX, mouseY, arg2X, arg2Y) < 25 && currentCoutImage > 0) {
    currentArgument2Image++;
    currentArgument2Image = currentArgument2Image % argumentFile.length;
  }
}

let arg3X, arg3Y;

function arg3affiche() {

  if (currentCoutImage == 2) {
    arg3X = 440;
    arg3Y = 260;
    image(argumentImage[currentArgument3Image], arg3X + 24, arg3Y - 25);
  }
  if (currentCoutImage == 3) {
    arg3X = 450;
    arg3Y = 220;
    image(argumentImage[currentArgument3Image], arg3X + 21, arg3Y - 22);
  }
}

function arg3count() {

  if (dist(mouseX, mouseY, arg3X, arg3Y) < 25 && currentCoutImage > 1) {
    currentArgument3Image++;
    currentArgument3Image = currentArgument3Image % argumentFile.length;
  }
}


let arg4X, arg4Y;

function arg4affiche() {

  if (currentCoutImage == 3) {
    arg4X = 450;
    arg4Y = 385;
    image(argumentImage[currentArgument4Image], arg4X + 20, arg4Y - 22);
  }
}

function arg4count() {

  if (dist(mouseX, mouseY, arg4X, arg4Y) < 25 && currentCoutImage > 2) {
    currentArgument4Image++;
    currentArgument4Image = currentArgument4Image % argumentFile.length;
  }
}