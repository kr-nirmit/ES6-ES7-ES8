hello = () => "Hello World!";
document.getElementById("demo").innerHTML = hello();

hello = (val) => "Hello " + val;
document.getElementById("demo1").innerHTML = hello("World");