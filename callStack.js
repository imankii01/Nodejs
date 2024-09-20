function colors() {
  console.log("*****call Stack at colors");
}
function days() {
  console.log("*****call Stack at days");

  colors();
}

function fruits() {
  console.log("*****call Stack at fruits");
  days();
}
function topFunction() {
  console.log("*****call Stack at topFunction");
  fruits();
}

topFunction();
