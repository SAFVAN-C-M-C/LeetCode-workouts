var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return (hours.filter(i=>i>=target)).length
};
console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2],6));