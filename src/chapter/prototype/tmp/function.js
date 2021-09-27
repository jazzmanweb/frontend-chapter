function test() {
    console.log(this)
    return this;
}
test.sub = 5;
test.prototype.subb = 6;
console.log(test);
console.log(test.prototype);

const result = test();

console.log(result);
console.log(result.__proto__);

console.log(typeof test);
console.log(test.sub);
console.log(result.sub);
console.log(test.subb);
console.log(result.subb);
