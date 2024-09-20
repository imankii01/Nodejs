

const checkBalance = (money) => {
  if (money > 10) {
    buyMoreApple(money);
  }
  return appleCount
};
const buyMoreApple = (money) => {
  appleCount++;
  checkBalance(money - applyPrice);
};
let money = 1000;
let applyPrice = 10;
let appleCount =0;

console.log("appleCount is :",checkBalance(money))