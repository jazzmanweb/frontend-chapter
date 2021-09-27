console.log('User creator create', 'start');

function createUser(name, score) {
    const user = Object.create(functionsLibrary);
    user.name = name;
    user.score = score;
    user.add = function (num) {
        console.log('createUser.user.add+' + num);
        user.score += num;
        console.log(user.score);
    }
    return user;
}

const functionsLibrary = {
    add: function (num) {
        console.log('functionsLibrary.add+' + num);
        this.score += num;
        console.log(this.score);
    }
};

function add(num) {
    console.log('global.add+' + num);
    this.score += num;
    console.log(this.score);
}

const user6 = createUser('Maciek', 10);
const user7 = createUser('Franek', 5);

user6.add(1);

delete user6.add;
delete user6.__proto__.add;

add.bind(user6);
add(3);

console.log('User creator create', 'end');
