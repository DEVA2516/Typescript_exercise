function Greet(greeting: string, name?:string) : string {
    return greeting + " "+ name;
}

console.log(Greet('Hello','steve'))

console.log(Greet('hello'))

// console.log(Greet('hello','bill',true))
