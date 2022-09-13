function welcomeMsg(greeting : string,...name:string[]): string {
    return greeting + " "+name.join(",")+"!";
}

console.log(welcomeMsg("hello","bill","steve"))
console.log(welcomeMsg("hello"))

// function welcomeMsg112(...name:string[],greeting:string): string {
//     return greeting + " "+name.join(",")+"!";
// }