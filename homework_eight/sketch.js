var ranX;
var ranY;
var ranSize;
var ranR;
var ranG;
var ranB;

var counter;
var speed=2;

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

/* Hello! I had a lot of fun with this project and I wanted to leave some comments incase you were curious. So creating functions has made my life much easier, and I get to make infinite cute characters. The math I guess and checked on, so I started with one character, figured out the math, and then did the random function, and then placed the background in the setup to constantly create the characters

Now there is a place for infinite cuteness! :) */