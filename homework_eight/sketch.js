var ranX;
var ranY;
var ranSize;
var ranR;
var ranG;
var ranB;

function setup() {
    
    createCanvas(windowWidth,windowHeight);
    background(105);
    
}

function draw() {
    
    ranX = random(width);
    ranY = random(height);
    ranSize = random(5,200);
    ranR = random(255);
    ranG = random(255);
    ranB = random(255);

    cuteCharacter(ranX,ranY,ranSize,ranR,ranG,ranB);
    
}

function cuteCharacter(x,y,size,r,g,b) {
    
    noStroke();
    fill(r,g,b);
    ellipse(x,y,size,size);
    ellipse(x-size*0.3,y-size*0.3,size/2,size);
    ellipse(x+size*0.3,y-size*0.3,size/2,size);
    fill(0);
    ellipse(x-size*0.25,y-size*0.15,size/5,size/5);
    ellipse(x+size*0.25,y-size*0.15,size/5,size/5);
    
}