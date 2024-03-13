

// function draw_clock(obj) {
//   background(237, 224, 197); // beige

//   let centerX = width / 2;
//   let centerY = height / 2;
//   let bigRadius = 190; // Radius of the big circle
//   let numCircles = 12; // Number of small circles
//   let angleStep = TWO_PI / numCircles; // Angle step between each small circle

//   // Draw the big circle
//   fill(83, 110, 88); // Dark green
//   noStroke();
//   ellipse(centerX, centerY, bigRadius * 2);

//   // Draw the small circles around the big circle
//   let smallRadius = 10; // Radius of the small circles
//   let distanceBetween = 30; // Distance between the big circle and small circles

//   for (let i = 0; i < numCircles; i++) {
//     push();
//     translate(centerX, centerY); // Translate to the center of the canvas
//     rotate(i * angleStep); // Rotate based on the angle
//     translate(bigRadius + distanceBetween, 0); // Translate to the position outside the big circle
    
//     // Determine if the current circle should be highlighted
//     if (i === obj.hours % numCircles) {
//       fill(255, 0, 0); // Red color for highlighted circle
//     } else {
//       fill(200); // Gray color for other circles
//     }
    
//     ellipse(0, 0, smallRadius * 2); // Draw the small circle
//     pop(); // Restore the transformation state
//   }
// }


// draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-999
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

   


function draw_clock(obj) {

   




  noStroke()
  angleMode (DEGREES);
  translate (width/2, height/2);
  ellipseMode (CENTER);
  background(39, 42, 59); 
 
  fill(122, 163, 118); 
  ellipse (0, 0, 350) //center


  if (obj.hours < 12) {
    
    hourHand = map(obj.hours, 0, 11, 0, 330); //330 is 11:00
  } else {
    hourHand = map(obj.hours, 12, 23, 0, 330); 
  }

  

  for(let i=0; i < 12; i ++){
    rotate (360/12)
    fill (56, 84, 53);
    ellipse (0, -210, 15)
  }
 


  push();
  rotate(hourHand);
  fill (81, 207, 200);
  ellipse(0, -210, 15);
  pop();


  //minutes

  push ()
  let flowerXpos = [0,40,90, 0, -50, -90, -30]
  let flowerYpos = [0,40,-90,100, -50, 90, -30]
  // this for loop draw the flowers
  for(let i = 0; i <= 6; i++  ){
    text(i,flowerXpos[i], flowerYpos[i]);
  }


for (let i=0; i<=6; i++) {
  if (obj.minutes == i) {
    fill (255);
    text(i,flowerXpos[i], flowerYpos[i]);
  }
}
  pop()


  push()
  fill (255);
  text ((obj.minutes), -20, -20);
  pop()



  //seconds
  let waterY = map (obj.millis, 0, 999, -100, 100);
  ellipse (300, waterY, 20);

push ()
fill (158, 218, 230);
rectMode (CORNERS);
let waterfill = map (obj.seconds, 0, 59, 180, 70);
rect(250, waterfill, 350, 180);

  // rect (250, 50, waterfill);
  // let waterfill = map (obj.seconds, 0, 59, 0, 100);
  pop()

  



}



//opacity cirles

 // let OpacityAm = 35;

  // let blue = color (140, 255, 251, OpacityAm);
  // let purple = color (175, 133, 255, OpacityAm);

  // let minForLerp = map ( obj.minutes, 0, 59, 0, 1);
  // let colorOfOrb = lerpColor (blue, purple, minForLerp);

  // let sizeStep = 15;
  // let howManyCircles = map (obj.seconds, 0, 59, 20, 40);

  // fill (colorOfOrb);
  // for (let i = 0; i < howManyCircles; i++) {
  //   ellipse (0,0, sizeStep*i);
  // }