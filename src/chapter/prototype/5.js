console.log('User creator create', 'start');

function createUser(name, score) {
    const user = Object.create(functionsLibrary);
    user.name = name;
    user.score = score;
    return user;
}

const functionsLibrary = {
    add: function (num) {
        console.log('functionsLibrary.add+' + num);
        this.score += num;
        console.log(this.score);
    },
};

const user6 = createUser('Maciek', 10);
const user7 = createUser('Franek', 5);

user6.add();

delete user6.add;

user6.add();

console.log('User creator create', 'end');