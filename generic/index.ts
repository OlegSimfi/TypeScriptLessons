
function genericGetter<T>(data: T): T {
    return data;
}

let newGenericFunction: <T>(data: T) => T = genericGetter;

console.log(newGenericFunction('WFM'));
console.log(newGenericFunction<string>('WFM').length);
console.log(newGenericFunction<number>(100));

//==============================================================

class Multiply <T> {
    constructor(private  a:T, private b: T){}

    public  getResult(): number{
        return +this.a * +this.b;
    }
}

const mNum  = new Multiply(10, 5);
console.log('Number:', mNum.getResult());

const mStr  = new Multiply('50', '75');
console.log('String',mStr.getResult());


