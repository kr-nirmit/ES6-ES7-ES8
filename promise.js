// function prom(complete) {
//     return new Promise((resolve, reject) => {
//         console.log("fetching data, please wait.");
//         setTimeout(() => {
//             if (complete)
//                 resolve('Success');
//             else
//                 reject('Faliure');
//         }, 2000)
//         console.log("fetching data");
//     });
// }

// let fulfil = (result) => console.log(result);
// let reje = (err) => console.log(err);

// prom(true).then(fulfil).catch(reje);


function prom(a, b) {
    return new Promise((resolve, reject) => {
        console.log("fetching data, please wait.");
        let c = a / b;
        setTimeout(() => {
            if (a, b)
                resolve(`Success: ${c}`);
            else
                reject('Faliure');
        }, 2000)
        console.log("fetching data");
    });
}

let fulfil = (result) => console.log(result);
let reje = (err) => console.log(err);

prom(5, 2).then(fulfil).catch(reje);