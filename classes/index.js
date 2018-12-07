var User = /** @class */ (function () {
    function User(name, job) {
        this.age = 30;
        this.name = name;
        this.job = job;
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setTitle = function (title) {
        console.log('this.isTeacher After', this.isTeacher);
        this.isTeacher = title;
        console.log('this.isTeacher Before', this.isTeacher);
    };
    return User;
}());
var user = new User('WFM', 'Frontend');
console.log(user);
console.log(user.getAge());
user.setTitle(false);
