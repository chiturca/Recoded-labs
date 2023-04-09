// Write your solution in this file!
const employee={
    name: "Bobby",
    streetAddress: "4 GOP"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value}
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee
};

function deleteFromEmployeeByKey(employee, key, value){
    let newEmployee= {...employee}
    newEmployee[key]=value
    delete newEmployee.streetAddress
    return newEmployee
};

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value
    delete employee.streetAddress
    return employee
}