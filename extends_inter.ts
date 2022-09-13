interface IPerson {
    name:string;
    gender:string;
}

interface IEmployee extends IPerson {
    empCode:number;
}

let empObj:IEmployee = {
    empCode : 1,
    name:"Bill",
    gender:"male"
}

console.log(empObj);