    // const myprog = ['js', 'php', 'c', 'python'];

    // let [top1, top2, top3, top4] = myprog;
    // console.log(`Fav prog is ${top1}`);

    // let [, top2] = myprog;
    // console.log(`2 fav prog is ${top2}`);

    // let [, top2, , top4] = myprog;
    // console.log(`2 fav prog is ${top2} and 4 fav prog is ${top4}`);


    // const bioData = {
    //     name: 'Nirmit',
    //     age: 20,
    //     deg: 'BE'
    // }
    // let {
    //     name,
    //     age: 20,
    //     deg: 'BE'
    // }
    // let {
    //     name,
    //     age,
    //     deg
    // } = bioData;
    // console.log(`My name is ${name}`); // bioData.name

    const bioData = {
        name: 'Nirmit',
        age: 20,
        deg: 'BE'
    }
    let {
        name: n,
        age: a,
        deg: d
    } = bioData;
    console.log(`My name is ${n}`); // bioData.name