// var emp=[3,34,45]
// for(i =0;i < emp.length;i++){
//     console.log(emp[i])
// }
// var arrayname = new Array()
// arrayname[0]=44;
// arrayname[1]=44;
// arrayname[2]=44;
// arrayname[3]=44;
// console.log(arrayname)
// var  check =["a","b"]
// var arr1=["a","b",3,"d","d"]
// var arr2 = ["a",3,"ed","dd"]
// // console.log(arr1.concat(arr2))
// // console.log(arr1.copyWithin(arr2))
// const array = [1, 2, 3, 4, 5];
// array.copyWithin(0, 3);
// console.log(array); // [4, 5, 3, 4, 5]
// const array = ['a', 'b', 'c'];
// const iterator = array.entries();
// for (let [index, value] of iterator) {
//     console.log(index, value);
// }
// const array = [1, 2, 3];
// const allPositive = array.every(num => num > 0);
// console.log(allPositive); // true
// const array = [1, 2, [3, 4, [5]]];
// const flatArray = array.flat(2);
// console.log(flatArray); // [1, 2, 3, 4, 5]
// const array = [1, 2, 3];
// const flatMapped = array.flatMap(num => [num, num * 2]);
// console.log(flatMapped); // [1, 2, 2, 4, 3, 6]
// const array = new Array(5).fill(0);
// console.log(array); // [0, 0, 0, 0, 0]

// const arrayLike = 'hello';
// const array = Array.from(arrayLike);
// console.log(array); // ['h', 'e', 'l', 'l', 'o']

// const array = [1, 2, 3, 4];
// const filtered = array.filter(num => num % 2 === 0);
// console.log(filtered); // [2, 4]
// const array = ['a', 'b', 'c'];
// const joined = array.join('');
// console.log(joined); // 'a-b-c'

// const array = [1, 2, 3];
// const sum = array.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 6
// const array = [1, 2, 3];
// const product = array.reduceRight((acc, num) => acc * num, 1);
// console.log(product); // 6
const array = [1, 2, 3];
const hasEven = array.some(num => num % 2 === 0);
console.log(hasEven); // true


