var brain;
var gears;
var roboto;

var ranOpacity;

var circX;
var circY;

var circDia = 54;
var circRai = circDia/2;

var d;

var backcolor = 255;
var textFill = 0;
var on = "ON";
var r = 122;
var g = 201;
var b = 67;

function preload() {
    
    brain = loadImage("images/brain.png");
    gears = loadImage("images/gears.png");
    roboto = loadFont("Roboto-Bold.ttf");
    
}

function setup() {
    
    createCanvas(1000,850);
    circX = 53;
    circY = 779;
    
    textFont(roboto);
    
    
}

function draw() {
    
    background(backcolor);
    imageMode(CENTER);
    image(brain,500,425,970,831);
    textSize(16);
    //on switch
    fill(r,g,b);
    noStroke();
    ellipse(circX,circY,circDia,circDia);
    d = dist(circX,circY,mouseX,mouseY);
    fill(textFill);
    text(on,41,830);
    ranOpacity = random(150,255);
    
    if (d < circRai) {
    backcolor = 255;
    textFill = 0;
    textSize(16);
    on = "ON";
    r = 122;
    g = 201;
    b = 67;
    
    image(gears,655,359,628,484);
    
    //suns
    fill(252,238,33);
    noStroke();
    ellipse(219,209,151,151);
    
    stroke(252,238,33,ranOpacity);
    strokeWeight(4);
    line(219,0,219,132);
    line(274,89,246,138);
    line(341,77,268,151);
    line(335,150,285,178);
    line(399,208,295,208);
    line(285,239,340,254);
    line(268,265,342,338);
    line(262,332,248,277);
    line(219,283,219,387);
    line(188,276,160,325);
    line(92,326,166,253);
    line(149,236,99,264);
    line(40,208,144,208);
    line(95,166,150,181);
    line(166,162,92,89);
    line(173,86,187,141);
    
    //shelf
    stroke(96,56,19);
    strokeWeight(12);
    line(577,470,883,470);
    
    //ladder
    strokeWeight(8);
    line(795,475,872,850);
    line(740,850,664,475);
    line(675,522,804,522);
    line(817,583,686,583);
    line(698,644,830,644);
    line(842,705,711,705);
    line(724,766,855,766);
    line(868,827,737,827);
    
    //desk
    fill(96,56,19);
    noStroke();
    
    rect(288,667,346,16);
    rect(296,683,327,123);
    
    //file cabinent
    fill(153);
    rect(123,577,134,229);
    
    fill(77);
    rect(128,590,124,95);
    rect(128,699,124,95);
    
    fill(153);
    rect(164,599,50,7);
    rect(164,709,50,7);
    
    //stack on desk
    fill(0);
    rect(305,655,94,12);
    rect(313,645,94,12);
    rect(300,635,94,12);
    rect(313,623,94,12);
    
    //books on shelf
    fill(255,123,172);
    rect(590,387,31,85);
    
    fill(122,133,178);
    rect(621,359,31,113);
    
    fill(13,103,153);
    rect(650,372,31,100);
    
    fill(229,204,0);
    rect(681,378,42,94);
    
    fill(255,149,188);
    rect(723,392,18,80);
    
    fill(110,255,198);
    rect(741,372,18,100);
    
    fill(122,201,67);
    rect(759,362,26,110);
    
    fill(146,61,214);
    rect(785,382,26,90);
    
    fill(227,174,53);
    rect(811,392,34,80);
    
    fill(53,182,227);
    rect(845,387,24,85);
    
    //characters
    fill(141,255,220);
    ellipse(731,479,79,86);
    ellipse(706,459,31,71);
    ellipse(758,460,31,71);
    
    fill(255,218,128);
    ellipse(492,629,79,86);
    ellipse(463,609,31,71);
    ellipse(515,609,31,71);
    
    fill(185,171,255);
    ellipse(232,681,79,86);
    ellipse(259,662,31,71);
    ellipse(207,662,31,71);
    
    fill(255,128,255);
    ellipse(412,90,79,86);
    ellipse(398,70,31,71);
    ellipse(442,70,31,71);
    
    //eyes
    fill(0);
    ellipse(501,616,13,13);
    ellipse(469,616,13,13);
    
    ellipse(439,75,13,13);
    ellipse(407,75,13,13);
    
    }else {
        backcolor = 0;
        textFill = 255;
        textSize(16);
        on = "OFF";
        r = 255;
        g = 29;
        b = 37;
        
        //moon
        strokeWeight(4);
        stroke(255);
        line(219,0,219,132);
        
        fill(255);
        noStroke();
        ellipse(246,214,170,170);
        
        fill(0);
        ellipse(297,196,170,170);
        
        //stars
        fill(255,255,255,ranOpacity);
        ellipse(41,175,23,23);
        ellipse(80,49,25,25);
        ellipse(146,115,15,15);
        ellipse(320,75,21,21);
        ellipse(333,197,15,15);
        ellipse(478,30,15,15);
        ellipse(453,149,25,25);
        ellipse(500,246,23,23);
        ellipse(573,103,15,15);
        ellipse(637,196,15,15);
        ellipse(732,73,23,23);
        ellipse(769,173,25,25);
        ellipse(846,73,15,15);
        ellipse(861,238,15,15);
        ellipse(895,122,23,23);
        ellipse(953,44,25,25);

        //zzz
        textSize(50);
        fill(255);
        text("Z",699,519);
        
        textSize(94);
        text("Z",627,439);
        
        textSize(140);
        text("Z",531,331);
        
        //characters
        fill(141,255,220);
        ellipse(814,548,79,86);
        ellipse(789,528,31,71);
        ellipse(841,528,31,71);
        
        fill(185,171,255);
        ellipse(675,661,79,86);
        ellipse(650,641,31,71);
        ellipse(702,641,31,71);
        
        fill(255,167,205);
        ellipse(845,710,79,86);
        ellipse(820,690,31,71);
        ellipse(872,690,31,71);
        
        fill(255,218,128);
        ellipse(444,296,79,86);
        ellipse(415,276,31,71);
        ellipse(467,277,31,71);
        
        fill(255,128,255);
        ellipse(317,417,79,86);
        ellipse(303,397,31,71);
        ellipse(347,398,31,71);
        
        //eyes - circle
        fill(0);
        ellipse(453,283,13,13);
        ellipse(421,283,13,13);
        
        ellipse(344,402,13,13);
        ellipse(312,402,13,13);
        
        //eyes - line
        stroke(0);
        strokeWeight(3);
        line(649,651,665,651);
        line(702,651,686,651);
        
        line(789,536,805,536);
        line(842,536,826,536);
        
        line(819,700,835,700);
        line(872,700,856,700);
        
    }
    
}

function mousePressed() {
    
    
    
}