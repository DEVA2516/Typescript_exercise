interface Citizen {
    name:string;
    readonly SSN:number;
}

let personObj: Citizen = { SSN:110544,name:'James Bond'}
console.log(personObj);

personObj.name = "Bond";
//personObj.SSN = 12345678;
console.log(personObj);