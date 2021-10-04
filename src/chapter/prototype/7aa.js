console.log('User creator create', 'start');

function CreateUser(name, score) {
    this.name = name;
    this.score = score;
}

CreateUser.prototype.add = function (num) {
    this.score += num;
}

const user6 = new CreateUser('Maciek', 10);
const user7 = new CreateUser('Franek', 5);

user6.add(1);

delete user6.add;

user6.add(2);

console.log('instance', user6 instanceof CreateUser);


console.log('User creator create', 'end');
