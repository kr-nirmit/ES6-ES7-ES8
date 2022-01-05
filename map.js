// const colors = ['red', 'green', 'blue'];

// const item = colors.map(color => `<li>${color}</li>`)
// console.log(item);

// const oldarr = ['nirmit', 'sanket', 'meet'];

// // console.log(olderr[0]);

// const newarr = oldarr.map((x) => x + "Thummar")
// console.log(newarr);

const studentdata = [{
    id: 1,
    name: 'nirmit',
    age: 20,
    deg: 'BE'
}, {
    id: 2,
    name: 'sanket',
    age: 20,
    deg: 'BE'
}, {
    id: 3,
    name: 'meet',
    age: 22,
    deg: 'BE'
}];

// console.log(studentdata[0].name);

const newdata = studentdata.map((x) => {
    return `My name is ${x.name}. My age is ${x.age}.`
})
console.log(newdata);