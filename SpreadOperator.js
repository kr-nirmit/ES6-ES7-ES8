// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// // const numbersCombined = [...numbersOne, ...numbersTwo];
// const numbersCombined = [...numbersOne, 'a', 'b', ...numbersTwo, 'c'];

// console.log(numbersOne);
// console.log(numbersTwo);
// console.log(numbersCombined);

// function sum(a, b, c) {
//     console.log(a + b + c);
// }
// let val = [5, 10, 25]
// sum(...val)

const Vehicle1 = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const Vehicle2 = {
    type: 'car',
    year: 2021,
}

const myVehicle = {...Vehicle1,
    ...Vehicle2
}
console.log(myVehicle);