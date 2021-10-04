console.log('User creator create', 'start');

function createUser(name, score) {
    this.name = name;
    this.score = score;
}

createUser.prototype.add = function (num) {
    this.score += num;
}

const user6 = new createUser('Maciek', 10);
const user7 = new createUser('Franek', 5);

user6.add(1);

delete user6.add;

user6.add(2);

console.log('instance', user6 instanceof createUser);

console.log('User creator create', 'end');
