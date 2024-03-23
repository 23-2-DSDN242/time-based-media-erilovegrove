
// draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-999
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

   
let raindrop; 
let flower;
let hourflowers = []
let colourflower0;
let colourflower1;
let colourflower2;
let colourflower3;
let colourflower4;
let colourflower5;
let colourflower6;
let colourflower7;
let colourflower8;
let colourflower9;
let colourflower10;
let colourflower11;
let bigflower;
let manyflowers;
let watercan;
let colourflowers = []

function preload() {
    // Load the image before setup()
    raindrop = loadImage('assets/raindrop.png');  
    flower = loadImage('assets/flower.png')
    for (let i = 0; i < 6; i++) {
      hourflowers[i] = loadImage('assets/flower' + i + '.png'); 
    }
    for (let i = 0; i < 6; i++) {
      colourflowers[i] = loadImage('assets/colour' + i + '.png'); 
    }

    colourflower0 = loadImage('assets/colour0.png');
    colourflower1 = loadImage('assets/colour1.png');
    colourflower2 = loadImage('assets/colour2.png');
    colourflower3 = loadImage('assets/colour3.png');
    colourflower4 = loadImage('assets/colour4.png');
    colourflower5 = loadImage('assets/colour5.png');
    colourflower6 = loadImage('assets/colour6.png');
    colourflower7 = loadImage('assets/colour7.png');
    colourflower8 = loadImage('assets/colour8.png');
    colourflower9 = loadImage('assets/colour9.png');
    colourflower10 = loadImage('assets/colour10.png');
    colourflower11 = loadImage('assets/colour11.png');
    bigflower = loadImage ('assets/bigflower.png')
    manyflowers = loadImage ('assets/manyflowers.png')
    watercan = loadImage ('assets/watercan.png')
  }

function draw_clock(obj) {

  noStroke()
  angleMode (DEGREES);
  translate (width/2, height/2);
  ellipseMode (CENTER);
  background(15, 34, 38);
  imageMode (CENTER) ;
  
  fill(97, 163, 126); 
  ellipse (0, 0, 350) 


   for (let i = 0; i < 6; i++) {
    push();
    rotate(360 / 12 * i);

    image(hourflowers[i], 0, -215, 35, 35);
    image(hourflowers[i], 0, 215, 35, 35); 
    pop();
  }
 
  if (obj.hours < 12) {
    hourHand = map(obj.hours, 0, 11, 0, 330); //330 is 11:00
  } else {
    hourHand = map(obj.hours, 12, 23, 0, 330); 
  }


  push();
  rotate(hourHand);
  const specificHours1 = [0, 12];
  const specificHours2 = [1, 13]
  const specificHours3 = [2, 14]
  const specificHours4 = [3, 15];
  const specificHours5 = [4, 16];
  const specificHours6 = [5, 17];
  const specificHours7 = [6, 18];
  const specificHours8 = [7, 19];
  const specificHours9 = [8, 20];
  const specificHours10 = [9, 21];
  const specificHours11 = [10, 22];
  const specificHours12 = [11, 23];

   if (specificHours1.includes(obj.hours)) {
    image (colourflower0, 0, -215, 55, 55);
   }
   if (specificHours2.includes(obj.hours)) {
    image (colourflower1, 0, -215, 55, 55);
   }
   if (specificHours3.includes(obj.hours)) {
    image (colourflower2, 0, -215, 55, 55);
   }
   if (specificHours4.includes(obj.hours)) {
    image (colourflower3, 0, -215, 55, 55);
   }
   if (specificHours5.includes(obj.hours)) {
    image (colourflower4, 0, -215, 55, 55);
   }
   if (specificHours6.includes(obj.hours)) {
    image (colourflower5, 0, -215, 55, 55);
   }
   if (specificHours7.includes(obj.hours)) {
    image (colourflower6, 0, -215, 55, 55);
   }
   if (specificHours8.includes(obj.hours)) {
    image (colourflower7, 0, -215, 55, 55);
   }
   if (specificHours9.includes(obj.hours)) {
    image (colourflower8, 0, -215, 55, 55);
   }
   if (specificHours10.includes(obj.hours)) {
    image (colourflower9, 0, -215, 55, 55);
   }
   if (specificHours11.includes(obj.hours)) {
    image (colourflower10, 0, -215, 55, 55);
   }
   if (specificHours12.includes(obj.hours)) {
    image (colourflower11, 0, -215, 55, 55);
   }


  pop();


//minutes
image (bigflower, 0, 0, 240, 240);
image (manyflowers, 0, 0, 330, 330);


  push()
  fill (255);
  textSize (60);
  textAlign (CENTER);
  text ((obj.minutes), 0, 20);
  pop()

  //seconds
  
  let waterY = map (obj.millis, 0, 999, -300, 220);
  if (raindrop) {
    image(raindrop, 290, waterY, 20, 30); 
  }

push ()
fill (158, 218, 230);
rectMode (CORNERS);
let waterfill = map (obj.seconds, 0, 59, 225, 150);
rect(250, waterfill, 340, 225);

  image (watercan, 280, 180, 200, 100);
  pop()
//alarm



  if(obj.seconds_until_alarm < 0 || obj.seconds_until_alarm == undefined) {
  }
    else if (obj.seconds_until_alarm > 0){
} else {
   
 for (let i = 0; i < 6; i++) {
   push();
    if (obj.seconds % 2 == 0) {
      rotate(360 / 12 * i);
    
    image(colourflowers[i], 0, -215, 55, 55);
    image(colourflowers[i], 0, 215, 55, 55); 
    }
      
    pop();
     }
 
}


}


