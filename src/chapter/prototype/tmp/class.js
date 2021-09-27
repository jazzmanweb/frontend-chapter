class test {
    constructor() {
        console.log(this);
    }
}
test.sub = 5;
test.prototype.subb = 6;
console.log(test);
console.log(test.prototype);

const result = new test();

console.log(result);
console.log(result.__proto__);

console.log(typeof test);
console.log(test.sub);
console.log(result.sub);
console.log(test.subb);
console.log(result.subb);
