function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);
   hr = hour();
   mn = minute();
   sc = second();  

   
  }

function draw() {
  background(255,255,255); 
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360); 
  mnAngle = map(mn,0,60,0,360); 
  hrAngle = map(hr,0,1,0,360); 
    drawSprites();
    // hands clock=
    push();
    rotate(scAngle);
   stroke("red");
   strokeWeight(7);
   line(0,0,100,0);
   translate(0,0);   
    pop(); 
 
}