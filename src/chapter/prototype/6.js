console.log('User creator create subfunction', 'start');

function createUser(name, score) {
    const user = Object.create(functionsLibrary);
    user.name = name;
    user.score = score;
    return user;
}

const functionsLibrary = {
    add: function (num) {
        function addAndLog(val) {
            this.score += val;
        }
        addAndLog(num);
    }
};

const user6 = createUser('Maciek', 10);
const user7 = createUser('Franek', 5);

user6.add(1);

console.log('User creator create subfunction', 'end');
