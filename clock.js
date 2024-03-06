
function draw_clock(obj) {
  background(237, 224, 197); // beige

  let centerX = width / 2;
  let centerY = height / 2;
  let bigRadius = 190; // Radius of the big circle
  let numCircles = 12; // Number of small circles
  let angleStep = TWO_PI / numCircles; // Angle step between each small circle

  // big circle
  fill(83, 110, 88); // Dark green
  noStroke();
  ellipse(centerX, centerY, bigRadius * 2);

 
  let smallRadius = 10; // Radius of the small circles
  let distanceBetween = 30; // Distance between the big circle and small circles

  for (let i = 0; i < numCircles; i++) {
    push(); 
    translate(centerX, centerY); // Translate to the center of the canvas
    rotate(i * angleStep); // Rotate based on the angle
    translate(bigRadius + distanceBetween, 0); // Translate to the position outside the big circle
    fill(200); // Gray color for small circles
    ellipse(0, 0, smallRadius * 2); // Draw the small circle

    
    pop(); 
  }

//let blah = obj.hour

}