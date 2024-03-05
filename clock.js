/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  background(237, 224, 197); //  beige

  let centerX = width / 2;
  let centerY = height / 2;
  let bigRadius = 200; // Radius of the big circle
  let numCircles = 12; // Number of small circles
  let angleStep = TWO_PI / numCircles; // Angle step between each small circle

  // Draw the big circle
  fill(83, 110, 88); // Dark green
  noStroke();
  ellipse(centerX, centerY, bigRadius * 2);

  // Draw small circles around the big circle
  let smallRadius = 20; // Radius of the small circles
  for (let i = 0; i < numCircles; i++) {
    let angle = i * angleStep; // Calculate the angle for this circle
    let x = centerX + cos(angle) * (bigRadius - smallRadius); // Calculate x-coordinate
    let y = centerY + sin(angle) * (bigRadius - smallRadius); // Calculate y-coordinate

    // Draw the small circle
    fill(255); // White color
    ellipse(x, y, smallRadius * 2);
  }
}

