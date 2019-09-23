const sheep = function(sheepNum) {
    if (sheepNum === 0) {
        return console.log("All Sheep jumped over the fence");
    }
    else {
        console.log(sheepNum + ": Another sheep jumps over the fence");
        updateNum = sheepNum - 1;
        sheep(updateNum);
    }
}

let count = 3;
console.log(sheep(count));