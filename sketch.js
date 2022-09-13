
let coutFile = ["cout1.svg", "cout2.svg", "cout3.svg", "cout4.svg"];
let couleurFile = ["rouge.svg", "vert.svg", "bleu.svg", "blanc.svg", "jaune.svg", "pure.svg", "Multi.svg"];
let argumentFile = ["costume1.svg", "portee.svg", "zone.svg", "temps.svg" , "effet.svg"];

let coutImage = [], couleurImage = [], argumentImage = [] ;
let currentCoutImage = 0, currentCouleurImage = 0;
let currentArgument1Image = 0, currentArgument2Image = 0, currentArgument3Image = 0, currentArgument4Image = 0;
let range = 0, zone = 0, time = 0, effet = 0;
let transX, transY;
let lightImage;

function setup() {

  createCanvas(windowWidth, windowHeight);
   transX = width/2; transY = height/1.5 ;

// charge les images pour chaque groupe
  for (let i = 0; i < 4; i++) {
    coutImage[i] = loadImage(coutFile[i]);
  }
  for (let i = 0; i < 7; i++) {
    couleurImage[i] = loadImage(couleurFile[i]);
  }
  for (let i = 0; i < 5; i++) {
    argumentImage[i] = loadImage(argumentFile[i]);
  }
lightImage = loadImage("light.png");
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
   transX = width/2; transY = height/1.5 ;

}

function draw() {
  background(0);
  
  push();
  imageMode(CENTER);
  translate(transX + 20, transY - 20); // move center
  scale(0.9); // autoScale ratio
  push();
  // couleur de font en foncton de la couleur choisie
  if (currentCouleurImage == 0)tint(255,0,0,128);
  if (currentCouleurImage == 1)tint(0,255,0,128);
  if (currentCouleurImage == 2)tint(0,0,255,128);
  if (currentCouleurImage == 3)tint(255,128);
  if (currentCouleurImage == 4)tint(255,255,0,128);
  if (currentCouleurImage == 5)tint(100,200,255,128);
  if (currentCouleurImage == 6)tint(255,0,255,128);

  image(lightImage,-20,20, 160 + (50 * currentCoutImage) ,160 + (50 * currentCoutImage) );
 
  pop();
  image(coutImage[currentCoutImage], 0, 0);
  image(couleurImage[currentCouleurImage], 0, 0);
  scale(0.9); // argument trop grands
  arg1affiche();
  arg2affiche();
  arg3affiche();
  arg4affiche();
 
  pop();
  

  // reset avant calcul
  range = 0;
  zone = 0;
  time = 0;
  effet = 0;
  calcul();
  // text écran
  textSize(20 );
  fill(255);
  text("portée : " + range, 50 , 50);
  text("zone : " + zone, 50, 50 + (height/20) * 1);
  text("temps : " + time, 50, 50 + (height/20) * 2);
  text("effet : " + effet, 50, 50 + (height/20) * 3);
  
}


function calcul() {

  effet += 1; // 1 effet de base

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
  let d = dist(mouseX, mouseY, transX, transY);
  //cercle exterieur
  if (d > 30 && d <  60 + (currentCoutImage * 20) ) {
    currentCoutImage++;
    currentCoutImage = currentCoutImage % coutFile.length;
  }
  // cercle interieur
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
    arg1X = -92;
    arg1Y = 60;
    image(argumentImage[currentArgument1Image], arg1X, arg1Y);
  }
  if (currentCoutImage == 1) {
    arg1X = -100;
    arg1Y = 98;
    image(argumentImage[currentArgument1Image], arg1X , arg1Y );
  }
  if (currentCoutImage == 2) {
    arg1X = -102;
    arg1Y = 135;
    image(argumentImage[currentArgument1Image], arg1X , arg1Y );
  }
  if (currentCoutImage == 3) {
    arg1X = -168;
    arg1Y = 94;
    image(argumentImage[currentArgument1Image], arg1X , arg1Y );
  }
}

function arg1count() {
// hitbox changer argument
  if (dist(mouseX, mouseY, arg1X + transX +20, arg1Y + transY - 15) < 25  ) {
    currentArgument1Image++;
    currentArgument1Image = currentArgument1Image % argumentFile.length;
  }

}


let arg2X, arg2Y;

function arg2affiche() {

  if (currentCoutImage == 1) {
    arg2X = 94;
    arg2Y = -96;
    image(argumentImage[currentArgument2Image], arg2X , arg2Y );
  }
  if (currentCoutImage == 2) {
    arg2X = -2;
    arg2Y = -162;
    image(argumentImage[currentArgument2Image], arg2X , arg2Y );
  }
  if (currentCoutImage == 3) {
    arg2X = -2;
    arg2Y = -186;
    image(argumentImage[currentArgument2Image], arg2X , arg2Y );
  }
}

function arg2count() {

  if (dist(mouseX, mouseY, arg2X + transX - 2 , arg2Y + transY + 26 ) < 25 && currentCoutImage > 0) {
    currentArgument2Image++;
    currentArgument2Image = currentArgument2Image % argumentFile.length;
  }
}

let arg3X, arg3Y;

function arg3affiche() {

  if (currentCoutImage == 2) {
    arg3X = 158;
    arg3Y = -49;
    image(argumentImage[currentArgument3Image], arg3X , arg3Y );
  }
  if (currentCoutImage == 3) {
    arg3X = 166;
    arg3Y = -88;
    image(argumentImage[currentArgument3Image], arg3X , arg3Y );
  }
}

function arg3count() {

  if (dist(mouseX, mouseY, arg3X + transX - 28, arg3Y + transY + 7) < 25 && currentCoutImage > 1) {
    currentArgument3Image++;
    currentArgument3Image = currentArgument3Image % argumentFile.length;
  }
}


let arg4X, arg4Y;

function arg4affiche() {

  if (currentCoutImage == 3) {
    arg4X = 165;
    arg4Y = 94;
    image(argumentImage[currentArgument4Image], arg4X , arg4Y);
  }
}

function arg4count() {

  if (dist(mouseX, mouseY, arg4X + transX - 30, arg4Y + transY - 20) < 25 && currentCoutImage > 2) {
    currentArgument4Image++;
    currentArgument4Image = currentArgument4Image % argumentFile.length;
  }
}