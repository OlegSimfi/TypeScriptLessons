var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(d) {
        return typeof d === 'undefined';
    }
    Util.isUndefined = isUndefined;
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
var EXP = 'TEST';
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('sa'));
console.log(Util.isUndefined(20));
console.log(Util.isUndefined(undefined));
console.log(Util.isUndefined(null));
console.log(Util.PI);
console.log(Util.EXP);
console.log(EXP);
