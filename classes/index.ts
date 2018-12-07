class User {

    public name: string;
    private isTeacher: boolean;
    protected age: number = 30;
    public job: string;

    constructor(name: string, job: string){
        this.name = name;
        this.job = job;
    }
    getAge(): number{
      return this.age;
    }
    public setTitle(title: boolean){
        console.log('this.isTeacher After', this.isTeacher);
        this.isTeacher = title;
        console.log('this.isTeacher Before',this.isTeacher);
    }
}

const user = new User('WFM', 'Frontend');
console.log(user);
console.log(user.getAge());
user.setTitle(false);