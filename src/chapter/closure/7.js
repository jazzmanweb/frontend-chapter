function onceSquare() {
    let prod;
    return function (p) {
        if (!prod) {
            prod = p*p;
        }
        return prod;
    }
}

const fn = onceSquare();

console.log(fn(5));
console.log(fn(5));
console.log(fn(5));
