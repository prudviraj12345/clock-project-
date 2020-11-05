
var hour,minute,sceond;







function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  

  angleMode(DEGREES);





}



function draw() {
  background(255,255,255);  
  
  translate(200,200);
  rotate(-90);
  
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360)
 
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr,0,70,0,360)



  push();
 
  rotate(scAngle);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  push();
  rotate(mnAngle);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();


  push();
  rotate(hrAngle);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,60,0);
  pop();


  
  
  drawSprites();

}