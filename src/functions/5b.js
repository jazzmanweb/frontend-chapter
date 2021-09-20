console.log('start');

function a(...rest) {
    console.log('a', ...rest);
}

var b = function bb(...rest) {
    console.log('b', ...rest);
};

let c = function (...rest) {
    console.log('c', ...rest);
};

(function d(...rest) {
    console.log('d', ...rest)
})(13, 14, 15)

const e = (...rest) => {
    console.log('e', ...rest);
}

((...rest) => {
    console.log('f', ...rest)
})(16, 17, 18);

console.log('---------------');

a(1, 2, 3);
b(4, 5, 6);
c(7, 8, 9);
e(10, 11, 12);
