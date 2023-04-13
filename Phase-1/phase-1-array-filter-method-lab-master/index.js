// Code your solution here
/*
function findMatching(drivers, string) {
    let arr=[];
    let x=drivers.filter(item=> item===string)
    if(x){
        arr.push(x)
        return x
    } else if(x===string.toLowerCase() || x===string){
        arr.push(x)
        return x
    }
};
*/

function findMatching(drivers, name) {
    return drivers.filter(
      (driver) => driver.toLowerCase() === name.toLowerCase()
    );
  }

function fuzzyMatch(drivers, letter) {
    let arr=[];
    let y=drivers.filter(item=>item.charAt(0)===letter.charAt(0))
    if(y){
        arr.push(y)
        return y
    }
};

function matchName(drivers, string) {
    let z=drivers.filter(item=> item.name===string)
    if(z){
        return z
    }
};