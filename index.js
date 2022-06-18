function abc() {
  var count = 9;
  var word = "bottles";
  while (count > 0) {
    document.write(count + " " + word + " of beer on the wall" + "<br>");
    document.write(count + " " + word + " of beers" + " <br>");
    document.write("Take one and pass" + " <br>");
    count = count - 1;
    if (count > 0) {
      document.write(
        count + " " + word + " of beer on the wall" + " <br>" + "<br>"
      );
    } else {
      document.write(
        "No more " + " " + word + " of beer on the wall" + " <br>"
      );
    }
  }
}
abc();
