var cuteCharacter;

var cuteCharacters = [];

var balls = [];

var ptsans;
var score = 0;
var level = 1;

var state = 1;

var rand = random(20,100);

var gameSound;

// automatedColor = 216,46,3
// controlColor = 185,171,255;

function preload() {
    
    ptsans = loadFont("PT_Sans-Web-Bold.ttf");
    
    gameSound = loadSound("explore.mp3");
    
}

function setup() {

	createCanvas(windowWidth,windowHeight);

	cuteCharacter = new CuteCharacter;

	for(var i = 0; i < 5; i++){
		cuteCharacters[i] = new CuteCharacter();
	}

	for(var b = 0; b < width; b+=60){
		balls[b] = new Balls();
	}
    
    textFont(ptsans);
    textStyle(BOLD);
    
    gameSound.loop();

}

function draw() {

	background(179,255,255);
    
    if(state == 1) {
        textAlign(CENTER);
        fill(255,191,102);
        textSize(40);
        text("INSTRUCTIONS ARE SIMPLE",width/2,height/2-100);
        textSize(30);
        text("USE THE ARROW KEYS TO MOVE THE CHARACTER",width/2,height/2);
        textSize(80);
        fill(255,136,115,random(150,255));
        text("CLICK ANYWHERE TO START", width/2,height/2+200);
    }
    
    else if(state == 2){
	cuteCharacter.drawCharacter(185,171,255);
    cuteCharacter.moveCharacterSlow();
    cuteCharacter.bounce();

	for(var i = 0; i < cuteCharacters.length; i++){
		cuteCharacters[i].drawCharacter(216,46,3);
		cuteCharacters[i].bounce();
		cuteCharacters[i].moveCharacter();

		if(cuteCharacter.lose(cuteCharacters[i])){
			cuteCharacter.returnSize();
            score = score - 2;
		}
        
        if(score == 100) {
            cuteCharacters[i].speedX = random(4,8);
            cuteCharacters.speedY = random(2,6);
        }else if (score == 200) {
            cuteCharacters[i].speedX = random(6,10);
            cuteCharacters.speedY = random(4,8);
        }else if (score == 300){
            cuteCharacters[i].speedX = random(8,12);
            cuteCharacters.speedY = random(6,10);
        }
	}

	for(var b = 0; b < balls.length; b+=60){
		balls[b].drawBall();
		balls[b].moveBall();
		balls[b].restartBall();

		if(cuteCharacter.eat(balls[b])){
			balls[b].restartBall();
            score = score + 1;
		}
        
        if(score == 100){
            balls[b].speed = random(2,6);
        }else if(score == 200){
            balls[b].speed = random(4,8);
        }else if(score == 300){
            balls[b].speed = random(6,10);
        }
	}
    
    fill(255,191,102);
    textSize(40);
    textAlign(LEFT);
    text("Level " + level + " " + "Score " + score,20,height-25);
    
    if(score > 300) {
        level = 4;
    }else if(score > 200){
        level = 3;
    }else if(score > 100){
        level = 2;
    }
        
    }
    
    else if(state == 3){
        background(179,255,255);
        fill(255,191,102)
        textAlign(CENTER);
        textSize(100);
        text("GAME OVER",width/2,height/2);
        textSize(50);
        fill(255,136,115,random(150,255));
        text("CLICK ANYWHERE TRY AGAIN", width/2,height/2+100);
    }
    
    else if(state == 4){
        background(179,255,255);
        fill(255,191,102)
        textAlign(CENTER);
        textSize(80);
        text("CONGRATULATIONS",width/2,height/2-100);
        text("YOU WON!",width/2,height/2);
        textSize(50);
        fill(255,136,115,random(150,255));
        text("CLICK ANYWHERE PLAY AGAIN", width/2,height/2+100);
    }
    
    if(score < 0){
        state = 3;
        score = 0;
        cuteCharacter.x = 10;
        cuteCharacter.y = 10;
        cuteCharacter.r = 20;
    }
    if(score == 500){
        state = 4;
        score = 0;
        cuteCharacter.x = 10;
        cuteCharacter.y = 10;
        cuteCharacter.r = 20;
        level = 1;
    }

}

function keyPressed() {
    if(keyCode == UP_ARROW) {
        cuteCharacter.y -= 50;
    }else if(keyCode == DOWN_ARROW) {
        cuteCharacter.y += 50;
    }else if(keyCode == RIGHT_ARROW){
    	cuteCharacter.x += 50;
    }else if(keyCode == LEFT_ARROW) {
    	cuteCharacter.x -= 50;
    }
}

function mousePressed() {
    if(state == 1) {
        state = 2;
    }
    if(state == 3){
        state = 2;
    }
    if(state == 4){
        state = 2;
    }
}

function CuteCharacter() {
	this.x = random(150,width);
	this.y = random(150,height);
	this.r = 20;
	this.speedX = random(2,6);
	this.speedY = random(1,4);
    this.speed2X = random(-2,2);
    this.speed2Y = random(-2,2);
	this.drawCharacter = function(r,g,b) {
		noStroke();
		fill(r,g,b);
		ellipse(this.x,this.y,this.r*2,this.r*2);
		ellipse(this.x-this.r*2*0.3,this.y-this.r*2*0.3,this.r,this.r*2);
		ellipse(this.x+this.r*2*0.3,this.y-this.r*2*0.3,this.r,this.r*2);
		fill(0);
		ellipse(this.x-this.r*2*0.25,this.y-this.r*2*0.15,this.r/2.5,this.r/2.5);
		ellipse(this.x+this.r*2*0.25,this.y-this.r*2*0.15,this.r/2.5,this.r/2.5);
	}
	this.bounce = function() {
		if(this.x > width || this.x < 0) {
			this.speedX = this.speedX * -1;
		}
		if(this.y > height || this.y < 0) {
			this.speedY = this.speedY * -1;
		}
        if(this.x > width || this.x < 0) {
			this.speed2X = this.speed2X * -1;
		}
		if(this.y > height || this.y < 0) {
			this.speed2Y = this.speed2Y * -1;
		}
	}
	this.moveCharacter = function() {
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;
	}
    this.moveCharacterSlow = function() {
        this.x = this.x + this.speed2X;
        this.y = this.y + this.speed2Y;
    }
	this.eat = function(other) {
		var d = dist(this.x,this.y,other.x,other.y);
		if(d < this.r + other.r){
			this.r += 1;
			return true;
		}else {
			return false;
		}
	}
	this.lose = function(other) {
		var d = dist(this.x,this.y,other.x,other.y);
		if(d < this.r + other. r) {
			return true;
		}else {
			return false;
		}
	}
	this.returnSize = function() {
		this.r = 15;
	}
}

function Balls() {
	this.x = round(random(10,width));
	this.y = round(random(5,height));
	this.r = 5;
	this.speed = random(1,4);
	this.drawBall = function(){
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
}