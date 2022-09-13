interface IEmployee{
    empCode: number;
    empName: string;
    empDept?: string;
}

let empObj1:IEmployee = {
    empCode:1,
    empName:"steve"
}

console.log(empObj1)

let empObj2:IEmployee = {
    empCode:2,
    empName:"Bill",
    empDept:"IT"
}

console.log(empObj2);