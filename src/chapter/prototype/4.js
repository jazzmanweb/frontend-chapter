console.log('User creator', 'start');

function createUser(name, score) {
    const user = {};
    user.name = name;
    user.score = score;
    user.add = function (num) {
        console.log('createUser.user.increment');
        user.score += num;
        console.log(user.score);
    }
    return user;
}

const user4 = createUser('Maciek', 10);
const user5 = createUser('Franek', 5);

user4.add(1);

delete user4.add;

console.log('User creator', 'end');
