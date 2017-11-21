var snowX = [20,351,100,220,401,570,801,1000,50,635,422,135,250,150,725,637,888,550,920];
var speed=0.5;
var snowY = 0;
var snowSize = 15;
var shiver;

function setup() {
    
    createCanvas(1000,800);
    
}

function draw() {
    
    background(191,245,255);
    
    //Snowman
    noStroke();
    fill(255);
    ellipse(846,713,174,174);
    ellipse(846,581,129,129);
    ellipse(846,480,102,102);
    rect(400,769,600,48);
    fill(0);
    rect(806,387,80,53);
    rect(796,436,100,15);
    ellipse(829,471,13,13);
    ellipse(865,471,13,13);
    ellipse(820,503,13,13);
    ellipse(872,503,13,13);
    ellipse(835,516,13,13);
    ellipse(855,516,13,13);
    
    fill(247,147,30);
    ellipse(846,490,13,13);
    
    //Snowpile
    fill(255);
    ellipse(389,773,97,97);
    ellipse(299,720,97,97);
    ellipse(322,769,97,97);
    ellipse(253,778,97,97);
    ellipse(224,733,97,97);
    ellipse(181,792,97,97);
    ellipse(199,674,97,97);
    ellipse(126,692,97,97);
    ellipse(150,729,97,97);
    ellipse(101,774,97,97);
    ellipse(78,740,97,97);
    ellipse(34,768,97,97);
    ellipse(257,685,97,97);
    ellipse(47,720,97,97);
    
    shiver = random(-1,1);
    
    cuteCharacter(100+shiver,200+shiver,100,205,105,155);
    cuteCharacter(500+shiver,300+shiver,100,155,255,205);
    cuteCharacter(700+shiver,200+shiver,100,155,55,205);
    cuteCharacter(300+shiver,500+shiver,100,55,105,155);
    cuteCharacter(700+shiver,700+shiver,100,205,205,155);
    
    for(var i = 0; i < snowX.length; i++) {
        
        fill(255);
        noStroke();
        ellipse(snowX[i],snowY*random(-2,2),snowSize,snowSize);
            
    }
    
//    if(i%2==0) {
//        speed = 1;
//    }else{
//        speed = 2;
//    }
    
    
    
    
    snowY = snowY + speed;
    
    
//    if(snowY > height) {
//        snowY = 0;
//    }
    
    if(snowY == height/2){
        speed = 0;
    }
    
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