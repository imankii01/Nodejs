const factorialCalculation = (num) => {

    if (num === 0) {
        return 1
    }
    else {
        return num * factorialCalculation(num - 1)
    }

}

let num = 4;
console.log(factorialCalculation(num))