
namespace  Util {
    export function isEmpty(d: any):boolean {
        return !d;
    }

    export function isUndefined(d:any): boolean{
        return typeof  d === 'undefined'
    }

    export const PI = Math.PI;
    export  const EXP = Math.E;
}

const EXP = 'TEST';

console.log(Util.isEmpty(''));
console.log(Util.isEmpty('sa'));


console.log(Util.isUndefined(20));
console.log(Util.isUndefined(undefined));
console.log(Util.isUndefined(null));

console.log(Util.PI);
console.log(Util.EXP);
console.log(EXP);




