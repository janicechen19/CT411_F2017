var backgroundImage;
var cupOne;
var cupTwo;
var cupThree;
var cupFour;
var cupFive;
var cupSix;

var counter = 0;
var speed = 1;

var counter2 = 0;
var speed2 = 1;

var counter3 = 60;
var speed3 = 1;

var counter4 = 120;
var speed4 = 1;

var counter5 = 0;
var speed5 = 2;

var counter6 = 0;
var speed6 = 3;

var counter7 = 0;
var speed7 = 3;

var counter8 = 0;
var speed8 = 1;

var counter9 = 0;
var speed9 = 2;

var counter10 = 0;
var speed10 = 5;

function preload() {
    
    backgroundImage = loadImage("pngs/backgroundImage.png");
    cupOne = loadImage("pngs/cupOne.png");
    cupTwo = loadImage("pngs/cupTwo.png");
    cupThree = loadImage("pngs/cupThree.png");
    cupFour = loadImage("pngs/cupFour.png");
    cupFive = loadImage("pngs/cupFive.png");
    cupSix = loadImage("pngs/cupSix.png");
    
}

function setup() {
    
    createCanvas(1080,1080);

}

function draw() {
    
    background(255);
    imageMode(CENTER);
    
    push();
    translate(540,540);
    rotate(radians(counter));
    image(backgroundImage,0,0);
    pop();
    
    fill(245,226,153);
    noStroke();
    ellipse(540,540,140,140);
    
    push();
    translate(540,540);
    rotate(radians(counter2));
    push();
    translate(250,250);
    rotate(radians(counter5));
    image(cupOne,0,0,270,270);
    pop();
    push();
    translate(-250,-250);
    rotate(radians(counter6));
    image(cupTwo,0,0,270,270);
    pop();
    pop();
    
    push();
    translate(540,540);
    rotate(radians(counter3));
    push();
    translate(250,250);
    rotate(radians(counter7));
    image(cupThree,0,0,270,270);
    pop();
    push();
    translate(-250,-250);
    rotate(radians(counter8));
    image(cupFour,0,0,270,270);
    pop();
    pop();
    
    push();
    translate(540,540);
    rotate(radians(counter4));
    push();
    translate(250,250);
    rotate(radians(counter9));
    image(cupFive,0,0,270,270);
    pop();
    push();
    translate(-250,-250);
    rotate(radians(counter10));
    image(cupSix,0,0,270,270);
    pop();
    pop();
    
    counter+=speed;
    counter2-=speed2;
    counter3-=speed3;
    counter4-=speed4;
    
    counter5+=speed5;
    counter6+=speed6;
    
    counter7-=speed7;
    counter8-=speed8;
    
    counter9+=speed9;
    counter10-=speed10;
    
}