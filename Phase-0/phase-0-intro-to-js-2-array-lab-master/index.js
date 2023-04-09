// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
    return cats;
};

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
};

function destructivelyRemoveLastCat(){
    return cats.pop();
};

function destructivelyRemoveFirstCat(){ 
    return cats.shift();
};

function appendCat(name){
    const copyOfCats= [...cats, name]
    return copyOfCats
};

function prependCat(name){
    const copy=[name, ...cats]
    return copy
};

function removeLastCat(){
    const last=cats.slice(0, -1)
    return last
};

function removeFirstCat(){
    const first=cats.slice(1, 3)
    return first
}