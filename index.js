// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function  destructivelyAppendCat(){
    return cats.push('Ralph')
}

function  destructivelyPrependCat(){
    return cats.unshift('Bob')
}


function  destructivelyRemoveLastCat(){
    return cats.pop('Garfield')
}

function   destructivelyRemoveFirstCat(){
    return cats.shift('Milo')
}

function  destructivelyRemoveFirstCat(){
    return cats.shift('Milo')
}

 


function  appendCat(){
    return  appendCat= [...cats, "Broom"];
    
}



function prependCat(){
    return prependCat=["Arnold", ...cats]
} 

function removeLastCat(){
    return removeLastCat = cats.slice(0,cats.length-1)
}

function removeFirstCat(){
    return cats.slice(1)
}