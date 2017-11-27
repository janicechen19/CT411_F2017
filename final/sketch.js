function setup() {
    
    createCanvas(1920,1080);
    
}

function draw() {
    
    background(179,255,255);
    
    for(var i = 30; i < width; i += 90) {
        for(var j = 30; j < height; j+= 90) {
            
            dots(i,j,23);
            
        }
    }
    
    blocks(198,198,300,25);
    blocks(738,558,300,25);
    blocks(1548,198,300,25);
    blocks(738,18,25,300);
    blocks(378,738,25,300);
    blocks(1368,558,25,300);
    blocks(1728,558,25,300);
    
}

function dots(x,y,size) {
    
    fill(229,127,141);
    noStroke();
    ellipse(x,y,size,size);
    
}

function blocks(x,y,width,height){
    
    noStroke();
    fill(255,212,141);
    rect(x,y,width,height);
    
}