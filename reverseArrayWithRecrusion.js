let data = [5, 12, 65, 89, 0];
let temp;
const reverse = (data, start, last) => {
  if (start <= last) {
    temp = data[start];
    data[start] = data[last];
    data[last] = temp;
    reverse(data, start + 1, last - 1);
  }

  return data;
};

console.log(reverse(data, 0, data.length - 1));
