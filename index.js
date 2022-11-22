a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a, b) {
    return (a + b);
}
add(45, 65);

function subtract(a, b) {
    return (a - b);
}
subtract(14, 12);

function multiply(a, b) {
    return (a * b);
}
multiply(4, 10);

function divide(a, b) {
    return (a / b);
}
divide(4, 10);

function increment(a) {
    var num = a;
    return (num += 1);
}
increment(4);

function decrement(a) {
    var num = a;
    return (num -= 1);
}
decrement(4);

function makeInt(n) {
    // const parse = parseInt("n", 10)
    return parseInt(n, 10);
}
function makeInt1(n) {
    var parse = parseInt(n, 10)
    return(parse);
}
function preserveDecimal(n) {
    return parseFloat(n);
}