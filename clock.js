

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




function draw_clock(obj) {
  noStroke()
  angleMode (DEGREES);
  translate (width/2, height/2);
  ellipseMode (CENTER);
  background (20);
  fill (200);
  let OpacityAm = 35;

  let blue = color (140, 255, 251, OpacityAm);
  let purple = color (175, 133, 255, OpacityAm);

  let minForLerp = map ( obj.minutes, 0, 59, 0, 1);
  let colorOfOrb = lerpColor (blue, purple, minForLerp);

  let sizeStep = 15;
  let howManyCircles = obj.seconds;

  fill (colorOfOrb);
  for (let i = 0; i < howManyCircles; i++) {
    ellipse (0,0, sizeStep*i);
  }
  fill ("#fae")
  ellipse (0, 0, 50) //center

  let hourHand = map (obj.hours, 0, 23, 0, 360)

  drawTriangles (100, 100, 20);
}