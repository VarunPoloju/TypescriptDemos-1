var employeeName = "John Smith";
var employeeDept = "Finance";
// Pre-ES6 
var employeeDesc1 = employeeName + " works in the " + employeeDept + " department.";
// Post-ES6 
// let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 
console.log(employeeDesc1); //John Smith works in the Finance department. 
// console.log(employeeDesc2);//John Smith works in the Finance department. 
