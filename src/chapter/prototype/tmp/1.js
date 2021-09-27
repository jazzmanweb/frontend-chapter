function userCreator(name, score){
    this.name = name;
    this.score = score;
}

const user1 = new userCreator("Eva", 10);

console.log();
console.log(user1.__proto__);
console.log(userCreator.prototype);

userCreator.prototype.increment = function(){ this.score++; };
userCreator.prototype.login = function(){ console.log("login"); };

user1.increment()

console.log();
console.log(user1);
console.log(user1.__proto__);

console.log();
console.log(userCreator);
console.log(userCreator.prototype);
