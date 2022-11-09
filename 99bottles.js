var word = "bottles";
var words = "bottle";
var count = 99;
while (count > 1) {
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer,");
  console.log("Take one down, pass it around,");
  count = count - 1;

  if (count > 1) {
    console.log(count + " " + word + " of beer on the wall.");
  } else {
    console.log("No more " + word + " of beer on the wall.");
  }

  if (count == 1) {
    console.log(count + " " + words + " of beer on the wall");
    console.log(count + " " + words + " of beer,");
    console.log("Take one down, pass it around,");
    console.log("No more " + words + " of beer on the wall.");
  }

  if (count == 1) {
  } else {
    console.log("No more " + words + " of beer on the wall.");
    console.log("Take one down, pass it around,");
  }
}
