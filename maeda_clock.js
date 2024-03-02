// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(100); // dark grey
  textSize(20);
  textAlign(CENTER, CENTER);

translate (120, 1);
rotate (PI/16);


  let textllinewidth1 = width / 20;
  let verticalspacing = 40;
  let horizontalspacing = 40;
  
  // Draw the numbers from 00 to 59
  for (let i = 0; i < 60; i++) {
    let column = floor(i/10);
    let row = i % 10;
    let x = textllinewidth1 + column * horizontalspacing;
    let y = verticalspacing * row + 20;
    text(nf(i, 2), x, y); // nf() formats numbers to have two digits
  }

  // Emphasize the current second
  
  let column2 = floor(obj.seconds/10);
  let row2 = obj.seconds % 10;
  let currentSecondX = textllinewidth1 + column2 * horizontalspacing;
  let currentSecondY = verticalspacing * row2 + 20;
  push();
  fill(255, 25, 0); // red
  textSize (50);
  text(nf(obj.seconds, 2), currentSecondX, currentSecondY );
  pop();
  
// Emphasise current min

  let columnmin = floor(obj.minutes/10);
  let rowmin = obj.minutes % 10;
  let currentMinuteX = textllinewidth1 + columnmin * horizontalspacing;
  let currentMinuteY = verticalspacing * rowmin + 20;
  push();
  fill(300); // white
  textSize (20);
  text(nf(obj.minutes, 2), currentMinuteX, currentMinuteY );
  pop();

//emphasise current hour
let columnHour = floor(obj.hours / 10);
  let rowHour = obj.hours % 10;
  let currentHourX = textllinewidth1 + columnHour * horizontalspacing;
  let currentHourY = verticalspacing * rowHour + 20;
  push();
  fill(100); 
  stroke (300);
  strokeWeight (3);
  textSize(20);
  text(nf(obj.hours, 2), currentHourX, currentHourY);
  pop();

}
