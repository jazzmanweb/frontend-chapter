console.log('Object literal', 'start');

const user1 = {
    name: "Maciek",
    score: 10,
    add: function (num) {
        console.log('user1.add+' + num);
        user1.score += num;
        console.log(user1.score);
    },
}

user1.increment(1);

console.log('Object literal', 'end');
