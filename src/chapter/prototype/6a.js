console.log('User creator create subfunction', 'start');

function createUser(name, score) {
    const user = Object.create(functionsLibrary);
    user.name = name;
    user.score = score;
    return user;
}

const functionsLibrary = {
    add: function (num) {
        console.log('functionsLibrary.add+' + num);
        function addAndLog(that, val) {
            that.score += val;
            console.log(that.score);
        }
        addAndLog(this, num);
        console.log(this.score);
    }
};

const user6 = createUser('Maciek', 10);
const user7 = createUser('Franek', 5);

user6.add(1);

delete user6.add;

user6.add(2);

console.log('User creator create subfunction', 'end');
