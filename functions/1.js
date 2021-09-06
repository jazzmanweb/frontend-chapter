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
})(); // iife

const e = () => {
    console.log('e');
}

(() => {
    console.log('f')
})();

console.log('---------------');

a();
b();
c();
e();
bb();
