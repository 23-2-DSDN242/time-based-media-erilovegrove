// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(25);
  textAlign(CENTER, CENTER);

  let textllinewidth1 = width/5
  text("00\n01\n02\n03\n04\n05\n06\n07\n08\n09", textllinewidth1, height/2);
  text("10\n11\n12\n13\n14\n15\n16\n17\n18\n19", textllinewidth1 + 50, height/2);
  text("20\n21\n22\n23\n24\n25\n26\n27\n28\n29", textllinewidth1 + 100, height/2);
}
