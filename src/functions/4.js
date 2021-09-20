console.log('start');

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

const aa = new a();
console.log(aa.prototype);
const bb = new b();
console.log(bb.prototype);
const cc = new c();
console.log(cc.prototype);
const ee = new e();
console.log(ee.prototype);
