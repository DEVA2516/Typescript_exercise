let sum = function (x:number, y:number): number {
    return x + y;
}

console.log(sum(2,3));

function Greet(greeting : string, name:string) : string {
    return greeting + " "+ name;
}

console.log(Greet('Hello','steve'))

// // console.log(Greet('hello'))

let sumArrow = ((a:number,b:number) => {
    return a + b;
   })
   
   console.log(sumArrow(2,3))