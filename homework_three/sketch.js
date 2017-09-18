var state = 1;

function setup() {
    
    createCanvas(850,500);
    
}

function draw() {
    
    noStroke();
    
    if(state == 1) {
        
        background(255,0,0);
        
        fill(255);
        ellipse(249,250,276,276);
        ellipse(613,250,276,276);
        fill(255,0,0);
        ellipse(249,250,154,154);
        ellipse(613,250,154,154);
        fill(0);
        ellipse(249,250,82,82);
        ellipse(613,250,82,82);
        
    }else if(state == 2) {
        
        background(87,194,255);
        
        fill(0);
        ellipse(249,250,276,276);
        ellipse(613,250,276,276);
        fill(255);
        ellipse(211,230,98,98);
        ellipse(579,230,98,98);
        ellipse(294,313,68,68);
        ellipse(662,313,68,68);
        
    }else if(state == 3) {
        
        background(37,212,0);
        
        fill(255);
        stroke(0);
        strokeWeight(16);
        ellipse(249,250,276,276);
        ellipse(613,250,276,276);
        fill(0);
        ellipse(249,151,78,78);
        ellipse(613,151,78,78);
        
        
    }else{
        
        background(0);
        
        stroke(255);
        strokeWeight(14);
        
        line(138,147,344,352);
        line(344,147,138,352);
        line(506,147,712,352);
        line(712,147,506,352);
        
    }
    
}

function mousePressed() {
    
    if(state < 4) {
        state += 1;
    }else {
        state = 1;
    }
    
}