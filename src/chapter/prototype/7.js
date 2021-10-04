console.log('User creator create', 'start');

function createUser(name, score) {
    const user = {};
    user.name = name;
    user.score = score;
    return user;
}

createUser.prototype.add = function (num) {
    this.score += num;
}

const user6 = createUser('Maciek', 10);
const user7 = createUser('Franek', 5);

user6.add(1);

delete user6.add;

user6.add(2);

console.log('User creator create', 'end');
