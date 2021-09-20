console.log('start');

function a() {
    console.log('a', ...arguments);
}

var b = function bb() {
    console.log('b', ...arguments);
};

let c = function () {
    console.log('c', ...arguments);
};

(function d() {
    console.log('d', ...arguments)
})(13, 14, 15)

const e = () => {
    console.log('e', ...arguments);
}

(() => {
    console.log('f', ...arguments)
})(16, 17, 18);

console.log('---------------');

a(1, 2, 3);
b(4, 5, 6);
c(7, 8, 9);
e(10, 11, 12);
