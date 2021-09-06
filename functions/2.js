console.log('start');

console.log(a);
console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

function a() {
    console.log('a');
}

var b = function bb() {
    console.log('b');
};

let c = function () {
    console.log('c');
};

(function d() {
    console.log('d')
})()

const e = () => {
    console.log('e');
}

(() => {
    console.log('f')
})();

console.log('---------------');

// a();
// b();
// c();
// e();
