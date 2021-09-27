console.log('Object literal empty, assign properties', 'start');

const user2 = {};
user2.name = "Maciek";
user2.score = 10;
user2.add = function (num) {
    console.log('user2.add+' + num);
    user2.score += num;
    console.log(user2.score);
}

user2.add(1);

console.log('Object literal empty, assign properties', 'end');
