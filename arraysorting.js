const sorting = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data
};

let array = [76, 862, 74, 35, 96, 47, 36];
let response = sorting(array);

console.log(response)