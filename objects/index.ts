type User = {name: string, age:number, getJobs: () => void, logName?: () => void,jobs: string[]};


let user: User = {
    name: 'WFM',
    age: 50,
    jobs: ['a', 'b'],
    getJobs():string[] {
        return this.jobs
    },
    logName(): void {
        console.log(this.name);
    }
};

let user2: User = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs():string[] {
        return this.jobs
    }
};

console.log(user.getJobs());
console.log(user2.getJobs());
