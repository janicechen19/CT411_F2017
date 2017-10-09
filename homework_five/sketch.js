var colorBlackWhite = 0;
var catchMeColor = 255;

var circDiameter = 100;
var circRadius = circDiameter/2;

var speed = 10;
var speedTwo = 20;
var speedThree = 15;
var speedFour = 12;

var circX;
var circY;
var d;

var circTwoX;
var circTwoY;
var dTwo;

var circThreeX;
var circThreeY;
var dThree;

var circFourX;
var circFourY;
var dFour;

var roboto;
var catchMe = "CATCH ME";

var isClicked = false;

function preload() {
    roboto = loadFont("Roboto-Bold.ttf");
}

function setup() {
    
    createCanvas(1000,700);
    
    circX = 200;
    circY = 200;
    
    circTwoX = 200;
    circTwoY = 500;
    
    circThreeX = 300;
    circThreeY = 700;
    
    circFourX = 700;
    circFourY = 200;
    
    textFont(roboto);
    textSize(80);
    textStyle(BOLD);
    textAlign(CENTER);
    
}

function draw() {
    
    background(colorBlackWhite);
    noStroke();
    
    //green
    fill(141,255,220);
    ellipse(circX+30,circY-25,50,90);
    ellipse(circX-30,circY-25,50,90);
    ellipse(circX,circY,circDiameter,circDiameter);
    fill(0);
    ellipse(circX+20,circY-15,15,15);
    ellipse(circX-20,circY-15,15,15);
    
    d = dist(circX,circY,mouseX,mouseY);
    
    if(circX > width || circX < 0 || circY > height || circY < 0) {
        speed = speed * -1;
    }
    
    if(d > circRadius) {
        circX = circX + speed;
    } else {
        circY = circY + speed;
    }
    
    //purple
    fill(185,171,255);
    ellipse(circTwoX+30,circTwoY-25,50,90);
    ellipse(circTwoX-30,circTwoY-25,50,90);
    ellipse(circTwoX,circTwoY,circDiameter,circDiameter);
    fill(0);
    ellipse(circTwoX+20,circTwoY-15,15,15);
    ellipse(circTwoX-20,circTwoY-15,15,15);
    
    dTwo = dist(circTwoX,circTwoY,mouseX,mouseY);
    
    if(circTwoX > width || circTwoX < 0 || circTwoY > height || circTwoY < 0) {
        speedTwo = speedTwo * -1;
    }
    
    if (dTwo > circRadius) {
        circTwoY = circTwoY + speedTwo;
    }else {
        circTwoX = circTwoX + speedTwo;
    }
    
    //pink
    fill(255,128,255);
    ellipse(circThreeX+30,circThreeY-25,50,90);
    ellipse(circThreeX-30,circThreeY-25,50,90);
    ellipse(circThreeX,circThreeY,circDiameter,circDiameter);
    fill(0);
    ellipse(circThreeX+20,circThreeY-15,15,15);
    ellipse(circThreeX-20,circThreeY-15,15,15);
    dThree = dist(circThreeX,circThreeY,mouseX,mouseY);
    if(circThreeX > width || circThreeX < 0 || circThreeY > height || circThreeY < 0) {
        speedThree = speedThree * -1;
    }
    
    if (dThree > circRadius) {
        circThreeX = circThreeX + speedThree;
    }else {
        circThreeY = circThreeY + speedThree;
    }
    
    //yellow
    fill(255,218,128);
    ellipse(circFourX+30,circFourY-25,50,90);
    ellipse(circFourX-30,circFourY-25,50,90);
    ellipse(circFourX,circFourY,circDiameter,circDiameter);
    fill(0);
    ellipse(circFourX+20,circFourY-15,15,15);
    ellipse(circFourX-20,circFourY-15,15,15);
    dFour = dist(circFourX,circFourY,mouseX,mouseY);
    if(circFourX > width || circFourX < 0 || circFourY > height || circFourY < 0) {
        speedFour = speedFour * -1;
    }
    
    if (dFour > circRadius) {
        circFourY = circFourY + speedFour;
    }else {
        circFourX = circFourX + speedFour;
    }
    
    fill(catchMeColor);
    text(catchMe,500,350);
    
}

function mousePressed() {
    if(d < circRadius || dTwo < circRadius || dThree < circRadius || dFour < CircRadius && isClicked == false) {
        catchMe = "YOU CAUGHT ME"
        colorBlackWhite = 255;
        speed = 0;
        speedTwo = 0;
        speedThree = 0;
        speedFour = 0;
        catchMeColor = 0;
        
        isClicked = !isClicked;
    }else if(d < circRadius || dTwo < circRadius || dThree < circRadius || dFour < CircRadius && isClicked == true) {
        catchMe = "CATCH ME";
        colorBlackWhite = 0;
        speed = 10;
        speedTwo = 20;
        speedThree = 15;
        speedFour = 12;
        catchMeColor = 255;
        
        isClicked = !isClicked;
    }
}