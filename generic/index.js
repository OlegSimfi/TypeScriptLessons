function genericGetter(data) {
    return data;
}
var newGenericFunction = genericGetter;
console.log(newGenericFunction('WFM'));
console.log(newGenericFunction('WFM').length);
console.log(newGenericFunction(100));
//==============================================================
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return +this.a * +this.b;
    };
    return Multiply;
}());
var mNum = new Multiply(10, 5);
console.log('Number:', mNum.getResult());
var mStr = new Multiply('50', '75');
console.log('String', mStr.getResult());
