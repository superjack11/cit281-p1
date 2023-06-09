/*
    CIT 281 Project 1
    Name: Jackson Feist
*/
const alph = "abcdefghijklmnopqrstuvwxyz";

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomString () {
    let retVal = "";
    for (var i = 0; i < rand(5,26);i++) {
        retVal += alph.charAt(rand(0, alph.length));
    }
    return (retVal);
}

console.log(getRandomString());