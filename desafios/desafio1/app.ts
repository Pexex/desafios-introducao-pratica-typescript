interface Employee {
    name: string;
    code: number;
}

let employee = {} as Employee;
employee.code = 10;
employee.name = "John";

console.log(employee);