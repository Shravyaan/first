function square(x){
    return function(y){
        return x*y
    }
}
let sq = square(2)

console.log(sq(2))

// in this when console.log is put the valur there gets stored for y
// and if we run it just like that we will not get the req output
// so to get output we have to store the value in another variable called sq which stores the value for x
// sooo we will get 4 as an output if we pass the number in both sq and console.log


