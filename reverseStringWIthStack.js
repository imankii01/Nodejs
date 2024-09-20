let data = [];
let currentSize = data.length;
function push(params) {
  data[currentSize] = params;
  currentSize += 1;
}

function pop(params) {
  lastRemoveItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemoveItem;
}

function reversStr(params) {
  for (let i = 0; i < params.length; i++) {
    push(params[i]);
  }
  for (let i = 0; i < params.length; i++) {
    console.log(pop());
  }
}
let str = "hello";
str = str.split("");

reversStr(str);
