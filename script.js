function myFunction() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navlist") {
    x.className += " responsive";
  } else {
    x.className = "navlist";
  }
}
