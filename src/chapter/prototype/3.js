console.log('Object create, assign properties', 'start');

const user3 = Object.create(null);
user3.name = "Maciek";
user3.score = 10;
user3.add = function (num) {
    console.log('user3.add+' + num);
    user3.score += num;
    console.log(user3.score);
}

user3.increment(1);

console.log('Object create, assign properties', 'end');
