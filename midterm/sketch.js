var backR = 221;
var backG = 196;
var backB = 167;

var speed = 1;

var totoro;

var trumpet;
var cello;
var flute;
var drum;

var trumpet_rest = {
    loc: 0,
    width: 222,
    height: 132,
    x: 50,
    y: 326,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
var trumpet_play = {
    loc: 0,
    width: 223,
    height: 136,
    x: 51,
    y: 324,
};

    trumpet_rest.top = trumpet_rest.y;
    trumpet_rest.bottom = trumpet_rest.y + trumpet_rest.height;
    trumpet_rest.left = trumpet_rest.x;
    trumpet_rest.right = trumpet_rest.x + trumpet_rest.width;

var cello_rest  = {
    loc: 0,
    width: 211,
    height: 296,
    x: 246,
    y: 176,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
var cello_play = {
    loc: 0,
    width: 230,
    height: 296,
    x: 236,
    y: 174,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

    cello_rest.top = cello_rest.y;
    cello_rest.bottom = cello_rest.y + cello_rest.height;
    cello_rest.left = cello_rest.x;
    cello_rest.right = cello_rest.x + cello_rest.width;

var flute_rest = {
    loc: 0,
    width: 189,
    height: 124,
    x: 466,
    y: 324,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
var flute_play = {
    loc: 0,
    width: 189,
    height: 124,
    x: 466,
    y: 322,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

    flute_rest.top = flute_rest.y;
    flute_rest.bottom = flute_rest.y + flute_rest.height;
    flute_rest.left = flute_rest.x;
    flute_rest.right = flute_rest.x + flute_rest.width;

var drum_rest = {
    loc: 0,
    width: 233,
    height: 222,
    x: 709,
    y: 266,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
var drum_play = {
    loc: 0,
    width: 233,
    height: 207,
    x: 709,
    y: 266,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

    drum_rest.top = drum_rest.y;
    drum_rest.bottom = drum_rest.y + drum_rest.height;
    drum_rest.left = drum_rest.x;
    drum_rest.right = drum_rest.x + drum_rest.width;

function preload() {
    
    trumpet_rest.loc = loadImage("pngs/trumpet_rest.png");
    trumpet_play.loc = loadImage("pngs/trumpet_play.png");
    cello_rest.loc = loadImage("pngs/cello_rest.png");
    cello_play.loc = loadImage("pngs/cello_play.png");
    flute_rest.loc = loadImage("pngs/flute_rest.png");
    flute_play.loc = loadImage("pngs/flute_play.png");
    drum_rest.loc = loadImage("pngs/drum_rest.png");
    drum_play.loc = loadImage("pngs/drum_play.png");
    
    totoro = loadSound("totoro.mp3");
    
    trumpet = loadSound("soundclips/trumpet.mp3");
    cello = loadSound("soundclips/cello.mp3");
    flute = loadSound("soundclips/flute.mp3");
    drum = loadSound("soundclips/drum.mp3");
    
}

function setup() {
    
    createCanvas(1000,700);
    
    totoro.setVolume(0.07,[0],[0]);
    totoro.loop();
    
    
}

function draw() {
    
    background(backR, backG, backB);
    
//    if(trumpet_rest.x > width) {
//        trumpet_rest.x = 0;
//    }
//    
//    trumpet_rest.x = trumpet_rest.x + speed;
//    
//    if(cello_rest.x > width) {
//        cello_rest.x = 0;
//    }
//    
//    cello_rest.x = cello_rest.x + speed;
//    
//    if(flute_rest.x > width) {
//        flute_rest.x = 0;
//    }
//    
//    flute_rest.x = flute_rest.x + speed;
//    
//    if(drum_rest.x > width) {
//        drum_rest.x = 0;
//    }
//    
//    drum_rest.x = drum_rest.x + speed;
    
    if(mouseX > trumpet_rest.left && mouseX < trumpet_rest.right && mouseY > trumpet_rest.top && mouseY < trumpet_rest.bottom) {
//        trumpet_play.x = trumpet_rest.x;
        image(trumpet_play.loc,trumpet_play.x,trumpet_play.y,trumpet_play.width,trumpet_play.height);
    }else {
        image(trumpet_rest.loc,trumpet_rest.x,trumpet_rest.y,trumpet_rest.width,trumpet_rest.height);
    }
    
    if(mouseX > cello_rest.left && mouseX < cello_rest.right && mouseY > cello_rest.top && mouseY < cello_rest.bottom) {
//        cello_play.x = cello_rest.x;
        image(cello_play.loc,cello_play.x,cello_play.y,cello_play.width,cello_play.height);
    }else {
        image(cello_rest.loc,cello_rest.x,cello_rest.y,cello_rest.width,cello_rest.height);
    }
    
    if(mouseX > flute_rest.left && mouseX < flute_rest.right && mouseY > flute_rest.top && mouseY < flute_rest.bottom) {
//        flute_play.x = flute_rest.x;
        image(flute_play.loc,flute_play.x,flute_play.y,flute_play.width,flute_play.height);
    }else {
        image(flute_rest.loc,flute_rest.x,flute_rest.y,flute_rest.width,flute_rest.height);
    }
    
    if(mouseX > drum_rest.left && mouseX < drum_rest.right && mouseY > drum_rest.top && mouseY < drum_rest.bottom) {
//        drum_play.x = drum_rest.x;
        image(drum_play.loc,drum_play.x,drum_play.y,drum_play.width,drum_play.height);
    }else {
        image(drum_rest.loc,drum_rest.x,drum_rest.y,drum_rest.width,drum_rest.height);
    }
    
    if(mouseX > trumpet_rest.left && mouseX < trumpet_rest.right && mouseY > trumpet_rest.top && mouseY < trumpet_rest.bottom){
        
        backR = 187;
        backG = 255;
        backB = 234;
       
    }else if(mouseX > cello_rest.left && mouseX < cello_rest.right && mouseY > cello_rest.top && mouseY < cello_rest.bottom){
        
        backR = 220;
        backG = 213;
        backB = 252;
        
    }else if(mouseX > flute_rest.left && mouseX < flute_rest.right && mouseY > flute_rest.top && mouseY < flute_rest.bottom){
        
        backR = 209;
        backG = 151;
        backB = 209;
        
    }else if(mouseX > drum_rest.left && mouseX < drum_rest.right && mouseY > drum_rest.top && mouseY < drum_rest.bottom) {
        
        backR = 220;
        backG = 213;
        backB = 252;
        
    }else {
        
        backR = 221;
        backG = 196;
        backB = 167;
        
    }
    
}

function mousePressed() {
    
    if(mouseX > trumpet_rest.left && mouseX < trumpet_rest.right && mouseY > trumpet_rest.top && mouseY < trumpet_rest.bottom) {
        trumpet.play();
    }
    
    if(mouseX > cello_rest.left && mouseX < cello_rest.right && mouseY > cello_rest.top && mouseY < cello_rest.bottom) {
        cello.play();
    }
    
    if(mouseX > flute_rest.left && mouseX < flute_rest.right && mouseY > flute_rest.top && mouseY < flute_rest.bottom) {
        flute.play();
    }
    
    if(mouseX > drum_rest.left && mouseX < drum_rest.right && mouseY > drum_rest.top && mouseY < drum_rest.bottom) {
        drum.play();
    }
    
}

//function keyTyped() {
//    
//    if(key === 'f') {
//        trumpet.play();
//    }else if (key === 'g') {
//        cello.play();
//        cello_rest = cello_play;
//    }else if (key === 'h') {
//        flute.play();
//    }else if (key === 'j') {
//        drum.play();
//    }
//    
//}
