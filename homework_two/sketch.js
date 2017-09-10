function setup() {
    
    createCanvas(800,600);
    
}

function draw() {
    background(225);
    
    for(var i = 10; i <= width; i += 50) {
        for (var j = 10; j <= height; j += 50) {
         
            triangle(i, j, i+50, j+50, i-20, j-50);
            
            line(i,j, mouseX, mouseY);
            
            fill(mouseX,mouseY);
            stroke(mouseX,mouseY);
    
        }
    }
    
}