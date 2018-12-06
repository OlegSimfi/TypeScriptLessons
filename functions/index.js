var myName = 'WFM';
function getMyName() {
    return myName;
}
function getMyAge(age, prefix) {
    return prefix + age;
}
console.log(getMyName());
console.log(getMyAge(40, "WFM"));
function consoleLog(str) {
    console.log(str);
}
consoleLog('Test string');
var testFunc1 = function () { return 1 + 1; };
var testFunc2 = function () {
    return 1 + 1;
};
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(5, 10));
