    // async function new1() {
    //     console.log('Inside new function');
    //     const response = await fetch('https://api.github.com/users');
    //     console.log('before response');
    // }

    // console.log("Start Tutorial");
    // console.log("before caalling new1");
    // let a = new1();
    // console.log("after caalling new1");
    // console.log(a);
    // console.log("Last line of this js file")


    // // let test = async ()=> "Hello";
    // async function test() {
    //     return "Hello";
    // }
    // // console.log(test());

    // test().then((x) => {
    //     console.log(x);
    // });

    // async function test() {
    //     console.log("2: Message");
    //     const response = await fetch('https://api.github.com/users');
    //     console.log("3: Message");
    //     console.log("4: Message");
    // }
    // console.log("1: Message");
    // let a = test();
    // console.log("5: Message");
    // console.log(a);


    async function test() {
        try {
            const response = await fetch('https://api.github.com/users');
        } catch (error) {
            console.log(error);
        }
    }
    console.log("1: Message");
    let a = test();
    console.log("5: Message");
    console.log(a);

    test().then((x) => {
        console.log(x);
    });