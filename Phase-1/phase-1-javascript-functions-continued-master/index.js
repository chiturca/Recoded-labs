// code your solution here
function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`
};
//saturdayFun()
//saturdayFun("sleep")

const mondayWork= function(event = "go to the office") {
    return `This Monday, I will ${event}.`
};

function wrapAdjective(string="*") {
    return function(item="special") {
        return `You are ${string}${item}${string}!`
    }
}