console.log('User creator create subfunction', 'start');

function createUser(name, score) {
    const user = Object.create(functionsLibrary);
    user.name = name;
    user.score = score;
    return user;
}

const functionsLibrary = {
    add: function (num) {
        const addAndLog = (val) => {
            this.score += val;
        }
        addAndLog(num);
    },
};

const user6 = createUser('Maciek', 10);
const user7 = createUser('Franek', 5);

user6.add(1);

delete user6.add;

user6.add(2);

console.log('User creator create subfunction', 'end');