"use strict";
var user = {
    name: 'WFM',
    age: 50,
    jobs: ['a', 'b'],
    getJobs: function () {
        return this.jobs;
    },
    logName: function () {
        console.log(this.name);
    }
};
var user2 = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs: function () {
        return this.jobs;
    }
};
console.log(user.getJobs());
console.log(user2.getJobs());
//# sourceMappingURL=index.js.map