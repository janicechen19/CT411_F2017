//var rectOneX = 100;
//var rectOneY = 100;
//var rectOneSize = 100;

var rectOne = {
    x: 100,
    y: 100,
    size: 100
//    top: rectOne.y,
//    bottom: rectOne.y + rectOne.size,
//    left: rectOne.x,
//    right: rectOne.x + rectOne.size 
};

var rectOneTop = rectOne.y;
var rectOneBottom = rectOne.y + rectOne.size;
var rectOneLeft = rectOne.x;
var rectOneRight = rectOne.x + rectOne.size;

var colR = 255;

function setup() {
    
    createCanvas(windowWidth,windowHeight);

}

function draw() {
    
    background(200);
    
    noStroke();
    fill(colR,10,100);
    rect(rectOne.x,rectOne.y,rectOne.size,rectOne.size);
    
    if(mouseX > rectOneLeft && mouseX < rectOneRight && mouseY > rectOneTop && mouseY < rectOneBottom) {
        colR = 0;
    }else {
        colR = 255;
    }
    
}