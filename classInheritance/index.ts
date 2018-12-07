class User {
    private isTeacher: boolean;
    protected age: number = 30;

    constructor(public name: string, public job: string){
        this.name = name;
        this.job = job;
    }
    public getAge(): number{
      return this.age;
    }
}

class WFM extends User {
    name:string = 'WFM';

    constructor(job: string){
        super('WFM', job);
        this.age = 100;
    }
}


const user = new User('WFM', 'Frontend');
const wfm = new WFM ('Frontend');
console.log(wfm);
console.log(wfm.getAge());


///////// Abstract class

abstract class Car {
    model: string;
    year: number = 2010;

    abstract logInfo(info: string): void // Must be implemented

    getCarYear(): number{
        return this.year;
    }
}

class Mersedes extends Car{
    logInfo(info: string): void {
        console.log(info);
    }
}

const car = new Mersedes();
console.log('car', car);
car.logInfo('info');
console.log('getCarYear', car.getCarYear());





