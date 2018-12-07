function getLength(variable) {
    console.log('getLength', variable.length);
}
var box = {
    name: 'WFM',
    length: 20
};
getLength(box);
getLength([1, 2, 3, 4, 5]);
var User = /** @class */ (function () {
    function User() {
        this.name = 'user';
    }
    User.prototype.logInfo = function (info) {
        console.log(info);
    };
    User.prototype.getYear = function () {
        return 200;
    };
    return User;
}());
