// passing functions as a parameter
// passing the functions in terms of arguments is called callback functions
// we use the keyword callback


function calculate(a, b, callback){
    let result = a + b
    callback(result)
}

calculate(10, 20, function(output){
    console.log("result is:", output)
})