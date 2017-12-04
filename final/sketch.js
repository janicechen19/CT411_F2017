var balls = [];
var cuteCharacter = [];
var controlC;

function setup() {
    
    createCanvas(windowWidth,windowHeight);
    
    for(var i = 0; i < width; i+=60){
        balls[i] = new Ball();
    }
    
    for(var a = 0; a < 4; a++){
        
        cuteCharacter[a] = new AutomatedCuteCharacter();
        
    }
    
    controlC = new ControlledCuteCharacter();
    
}

function draw() {
    
    background(179,255,255);
    
    for(var i = 0; i < balls.length; i+=60){
        balls[i].drawBall();
        balls[i].restartBall();
        balls[i].moveBall();
    }
    
    for(var a = 0; a < cuteCharacter.length; a++){
        cuteCharacter[a].drawCharacter();
        cuteCharacter[a].bounce();
        cuteCharacter[a].moveCharacter();
    }
    
    controlC.drawCharacter();
    controlC.bounce();
    controlC.moveCharacter();
    
}

function Ball() {
    this.x = round(random(10,width));
    this.y = round(random(5,height));
    this.r = 12;
    this.size = this.r*2;
    this.speed = random(3,10);
    this.drawBall = function() {
        fill(229,127,141);
        noStroke();
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.moveBall = function() {
        this.y = this.y + this.speed;
        
    }
    this.restartBall = function() {
        if(this.y > height) {
            this.y = 0;
        }
    }
    this.catchBall = function(){
        this.y = 0;
    }
}

function AutomatedCuteCharacter() {
    this.x=random(150,width);
    this.y=random(150,height);
    this.r = 50;
    this.size = this.r*2;
    this.speedX = random(2,4);
    this.speedY = random(1,2);
    this.drawCharacter = function() {
        noStroke();
        fill(216,46,3);
        ellipse(this.x,this.y,this.r*2,this.r*2);
        ellipse(this.x-this.size*0.3,this.y-this.size*0.3,this.size/2,this.size);
        ellipse(this.x+this.size*0.3,this.y-this.size*0.3,this.size/2,this.size);
        fill(0);
        ellipse(this.x-this.size*0.25,this.y-this.size*0.15,this.size/5,this.size/5);
        ellipse(this.x+this.size*0.25,this.y-this.size*0.15,this.size/5,this.size/5);
    }
    this.bounce = function() {
        if(this.x > width || this.x < 0){
            this.speedX = this.speedX * -1;
        }
        if(this.y > height || this.y < 0){
            this.speedY = this.speedY * -1;
        }
    }
    this.moveCharacter = function() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
    }
    this.changeSize = function() {
        this.size = this.size + 10;
    }
    this.returnSize = function() {
        this.size = 50;
    }
}

function ControlledCuteCharacter() {
    this.x= 100;
    this.y= 100;
    this.r = 50;
    this.size = this.r * 2;
    this.speedX = 4;
    this.dCharac = dist(this.x,this.y,AutomatedCuteCharacter.x,AutomatedCuteCharacter.y);
    this.dBall = dist(this.x,this.y,Ball.x,Ball.y);
    this.drawCharacter = function() {
        noStroke();
        fill(185,171,255);
        ellipse(this.x,this.y,this.r*2,this.r*2);
        ellipse(this.x-this.size*0.3,this.y-this.size*0.3,this.size/2,this.size);
        ellipse(this.x+this.size*0.3,this.y-this.size*0.3,this.size/2,this.size);
        fill(0);
        ellipse(this.x-this.size*0.25,this.y-this.size*0.15,this.size/5,this.size/5);
        ellipse(this.x+this.size*0.25,this.y-this.size*0.15,this.size/5,this.size/5);
    }
    this.bounce = function() {
        if(this.x > width || this.x < 0){
            this.speedX = this.speedX * -1;
        }
    }
    this.moveCharacter = function() {
        this.x = this.x + this.speedX;
    }
}


function keyPressed() {
    if(keyCode == UP_ARROW) {
        controlC.y -= 50;
    }else if (keyCode == DOWN_ARROW) {
        controlC.y += 50;
    }
}


//How can I make balls disappear if a character touched it
