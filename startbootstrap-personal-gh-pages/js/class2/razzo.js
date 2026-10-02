let xMax = 400
let yMax = 600
let xrocket = xMax/2
let yrocket = yMax*0.6

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(20,24,40);

  push();
  //corpo del rocket
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(xrocket, yrocket, 80, 200, 20)

  //punta del rocket
  fill(200, 40, 40); //rosso
  triangle (xrocket-40, yrocket-100,xrocket, yrocket-165, xrocket+40, yrocket-100);

  //finestrino
  fill(40, 150, 220);
  stroke(225);
  strokeWeight(3);
  ellipse(xrocket, yrocket, 48, 48);

  //ali
  fill(180, 30, 30);
  stroke(40);
  strokeWeight(2);
  triangle(xrocket-40, yrocket+70, xrocket-80, yrocket+110, xrocket-20, yrocket+70)
  triangle(xrocket+40, yrocket+70, xrocket+80, yrocket+110, xrocket+20, yrocket+70)

  pop();

  push();
  randomSeed(99) //
  noStroke(); //tolgo il contorno alle stelle
  for (let i = 0; i < 120; i++){
    let sx = (i*37) % width + i%3;
    let sy = (i*73) % height + i%7;
    fill(255, 255, 255, random (150, 255));
    ellipse(sx, sy, random(1, 2.8));
    // if(i%2 == 0){ //condizione (tutti i numeri pari), primo tipo di stelle
    //fill(255,255,150);
    //ellipse(sx, sy,1);
  //}else if (i%3 == 0){ //secondo tipo
   // fill (200,100, 255);
    //ellipse (sx, sy, 1,5);
  //}else{
   // fill(255,255,100);
   // ellipse(sx, sy, 2.8);
 //}
 }
  
  pop();
 xrocket = (xrocket +1)%(xMax+120); // animazione
}
