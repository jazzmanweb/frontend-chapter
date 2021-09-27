function multiplyBy(a) {
    return function (b) {
        return a * b;
    }
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy3 = multiplyBy(3);

console.log('multiplyBy2');
console.log(multiplyBy2(1));
console.log(multiplyBy2(2));
console.log(multiplyBy2(3));
console.log(multiplyBy2(4));

console.log('multiplyBy3');
console.log(multiplyBy3(1));
console.log(multiplyBy3(2));
console.log(multiplyBy3(3));
console.log(multiplyBy3(4));
