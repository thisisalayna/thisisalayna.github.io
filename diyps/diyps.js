var img;
var initials ='af'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=1; // last screenshot never taken
let rainbow = ["#F94848", "#FC9047", "#F9B148", "#F7CD4B", "#F4E84D", "#BFF24E", "#50EF79", "#51EDB4", "#53C6EA", "#5485E8", "#7855E5", "#9E56E2", "#D558E0", "#DD58A5",];
var d;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // .jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('dnarainbow.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);
cursor('https://nookipedia.com/w/images/1/16/Lucky_Cat_HHD_Icon.png');// use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}


function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  //basic black point
   
    stroke(0,0,0);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') {  
ograinbow();

  } else if (toolChoice == '3') { 
gradient();
      
  } else if (toolChoice == '4') { 
raindot();
    
  } else if (key == '5') { 
raindot2();
    
  } else if (toolChoice == '6') {
colorArray();

  } else if (toolChoice == '7') {
noStroke();
image(img, mouseX, mouseY); 

  } else if (toolChoice == '8') {


  } else if (toolChoice == '9') {
black();

  } 
  else if (toolChoice == '0') { //might change
clear();

  } 
 }
 function gradient()
 {
   x = mouseX;
   y = mouseY;
   circle(mouseX, mouseY, 50, 50);
   noStroke();
   fill(color((x-y)*(17/40), (y-x)*(51/80), x*y*(17/16000), 25));
   print(x);
 }
function ograinbow() {
  x = mouseX;
  y = mouseY;
  noStroke();
  fill("#F94848");
circle(x,y, x/3, y/3);
  fill("#FC9047");
circle(5+x,5+y, x/3, y/3);
  fill("#F9B148"); 
circle(10+x,10+y, x/3, y/3);
  fill("#F7CD4B");
circle(15+x,15+y, x/3, y/3);
  fill("#F4E84D");
circle(20+x,20+y, x/3, y/3);
  fill("#BFF24E");
circle(25+x,25+y, x/3, y/3);
  fill("#50EF79");
circle(30+x,30+y, x/3, y/3);
  fill("#51EDB4");
circle(35+x,35+y, x/3, y/3);
  fill("#53C6EA");
circle(40+x,40+y, x/3, y/3);
  fill("#5485E8");
circle(45+x,45+y, x/3, y/3);
  fill("#7855E5");
circle(50+x,50+y, x/3, y/3);
  fill("#9E56E2");
circle(55+x,55+y, x/3, y/3);
  fill("#D558E0");
circle(60+x,60+y, x/3, y/3);
  fill("#DD58A5");
circle(65+x,65+y, x/3, y/3);
}
function raindot() {
  x = mouseX;
  y = mouseY;
  noStroke();
  fill("#F94848");
circle(x,y, 1, 1);
  fill("#FC9047");
circle(5+x,y, 1, 1);
  fill("#F9B148"); 
circle(10+x,y, 1, 1);
  fill("#F7CD4B");
circle(15+x,y, 1, 1);
  fill("#F4E84D");
circle(20+x, y, 1, 1);
  fill("#BFF24E");
circle(25+x,y, 1, 1);
  fill("#50EF79");
circle(30+x,y, 1, 1);
  fill("#51EDB4");
circle(35+x,y, 1, 1);
  fill("#53C6EA");
circle(40+x,y, 1, 1);
  fill("#5485E8");
circle(45+x,y, 1, 1);
  fill("#7855E5");
circle(50+x,y, 1, 1);
  fill("#9E56E2");
circle(55+x,y, 1, 1);
  fill("#D558E0");
circle(60+x,y, 1, 1);
  fill("#DD58A5");
circle(65+x,y, 1, 1);
}

function raindot2() {
  x = mouseX;
  y = mouseY;
  noStroke();
  
  fill("#F94848");
circle(x,y, 10, 10);
  fill("#FC9047");
circle(1+x,2+y, 10, 10);
  fill("#F9B148"); 
circle(2+x,y, 10,10);
  fill("#F7CD4B");
circle(3+x,2+y, 10,10);
  fill("#F4E84D");
circle(4+x,y, 10, 10);
  fill("#BFF24E");
circle(5+x,2+y, 10, 10);
  fill("#50EF79");
circle(6+x,y, 10, 10);
  fill("#51EDB4");
circle(7+x, 2+y, 10, 10);
  fill("#53C6EA");
circle(8+x,y, 10, 10);
  fill("#5485E8");
circle(9+x,2+y, 10, 10);
  fill("#7855E5");
circle(10+x,y, 10, 10);
  fill("#9E56E2");
circle(11+x,2+y, 10, 10);
  fill("#D558E0");
circle(12+x,y, 10, 10);
  fill("#DD58A5");
circle(13+x,2+y, 10, 10);
}

function colorArray()
{
  noStroke();
  d = new Date();
  circle(mouseX, mouseY, 30, 30);
  fill(rainbow[d.getTime()%14]);
}

function selfPortrait()
{
  
  
}

function black() 
{
  noStroke();
  fill(0,0,0, mouseX*(1/6));
  circle(mouseX, mouseY, 100, 100);
 
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
