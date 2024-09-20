let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
  if (currentSize >= max) {
    console.log("Stack si full");
  }
  data[currentSize] = newVal;
  currentSize++;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    console.lot("stack is already empty");
  }
}
push(20);
push(120);
push(220);
push(320);
console.warn(data);
pop()

console.warn(data);
