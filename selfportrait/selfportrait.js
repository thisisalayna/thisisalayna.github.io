function setup() {
createCanvas(600, 600);

}


function draw() {
background("#36A5A5");

//Hair
noStroke();
fill(89, 53, 4);
arc(300, 300, 250, 400, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
square(175, 100, 250, 75, 100);


//Face
fill("#FFECE5");
ellipse(300, 250, 175, 250);
strokeWeight(0);

//Bangs
fill(89, 53, 4);
 arc(300, 100, 200, 165, 0.9, 0.8 * Math.PI);

//Eyelashes
arc(270, 205, 4, 9, HALF_PI, PI); //First Left
arc(265, 204, 4, 9, HALF_PI, PI); //Second Left
arc(260, 206, 4, 9, HALF_PI, PI); //Third Left
arc(340, 205, 4, 9, HALF_PI, PI); //First Right
arc(345, 204, 4, 9, HALF_PI, PI); //Second Right
arc(350, 206, 4, 9, HALF_PI, PI); //Third Right

//Eyes
fill(255, 255, 255);
ellipse(270, 220, 35, 25);
ellipse(340, 220, 35, 25); 

//Eyeball
fill("#593504");
ellipse(340, 220, 20, 20);
ellipse(270, 220, 20, 20);

//Shimmer
noStroke();
 fill(255);
 ellipse(265, 215, 6, 6);
 ellipse(335, 215, 6, 6);

//Eyebrows
stroke(89, 53, 4, 60);
strokeWeight(2);
noFill();
arc(270, 200, 30, 4, PI, TWO_PI, OPEN);
arc(340, 200, 30, 4, PI, TWO_PI, OPEN);


//Nose
noFill();
stroke("#FFCFC2");
strokeWeight(2);
line(300, 220, 295, 250, 200, 10);
arc(305, 260, 10, 10, 0, HALF_PI );

//Neck
noStroke();
fill("#FFECE5");
rect(265,350, 75, 75);


//Clothes
fill(63, 63, 63, 255);
noStroke();
square(150, 400, 300, 50, 50);


//Neckline
fill("#FFECE5");
rect(400, 500, 50, 100);
rect(150, 500, 50, 100);
arc(303, 400, 80, 40, 0, HALF_PI+HALF_PI);

///Mouth
//fill(255, 255, 255);
//stroke(227, 227, 227);
//strokeWeight(1);
//arc(300, 300, 50, 30, 0, PI, CHORD);
//line(279, 307, 320, 307);

}
