console.log('start');

function a() {
    console.log('a');
}

var b = function bbf() {
    console.log('b');
};

let c = function () {
    console.log('c');
};

(function df() {
    console.log('d')
})()

const e = () => {
    console.log('e');
}

(() => {
    console.log('f')
})();

console.log('---------------');

console.log(a.prototype);
console.log(b.prototype);
console.log(c.prototype);
console.log(e.prototype);
