// arrow higher order function
// arrow callback function
let arrowHigherOrderFunction=(anotherFunction)=>{
    anotherFunction();
}
arrowHigherOrderFunction(()=>{
    console.log("ArrowCallBackFunction");
});