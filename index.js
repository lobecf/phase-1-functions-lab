// Code your solution in this file!
const blocks = 42
const feet = 264 // 1 block = 264 feet

function distanceFromHqInBlocks(x) {
    if (x>blocks) {
        return x-blocks;
    } else {
        return blocks-x;
    }
}

function distanceFromHqInFeet(x) {
    return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(a, b) {
    return Math.abs(a-b) * 264
}

function calculatesFarePrice(start, destination) {
    let n = distanceTravelledInFeet (start, destination)
    if (n<=400) {
        return 0
    } else if (n>400 && n<=2000) {
        return (n -400) *.02
    } else if (2500>n  && n>2000) {
        return 25
    } else if (n>2500) { 
        return 'cannot travel that far'
    } 
}
    
    //gives costumer a free sample
    //charges 2 cents per foot when total feet travelled is between 400 and 2000
    //charges 25 dollars for a distance over 2000 feet
    //does not allow rides over 2500 feet