// Code your solutions in this file
/* 
for(let age=30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
} 
*/


//const names=[];
function writeCards(names, event){
    const arr=[];
    for (let i=0; i<names.length; i++){
        if(event==="surprise"){
            arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
        }
    }
    return arr;

};

console.log(writeCards(["Ali","Can","Ela"], "surprise"));


function countDown(){    
    let i = 10;
    while (i>= 0){
    i--;
    console.log(i);
    }
}
