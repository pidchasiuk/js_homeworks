function pow(x, y){
    let result = x;
    for (let i = 1; i < y; i++){
        result *= x;
    }
    return result;
}

let x = 2;
let y = 3;
console.log(`${x} in pow ${y} is ${pow(x, y)}`)