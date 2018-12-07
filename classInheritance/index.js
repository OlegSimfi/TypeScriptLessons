var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
        this.name = name;
        this.job = job;
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var WFM = /** @class */ (function (_super) {
    __extends(WFM, _super);
    function WFM(job) {
        var _this = _super.call(this, 'WFM', job) || this;
        _this.name = 'WFM';
        _this.age = 100;
        return _this;
    }
    return WFM;
}(User));
var user = new User('WFM', 'Frontend');
var wfm = new WFM('Frontend');
console.log(wfm);
console.log(wfm.getAge());
///////// Abstract class
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mersedes = /** @class */ (function (_super) {
    __extends(Mersedes, _super);
    function Mersedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mersedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mersedes;
}(Car));
var car = new Mersedes();
console.log('car', car);
car.logInfo('info');
console.log('getCarYear', car.getCarYear());
