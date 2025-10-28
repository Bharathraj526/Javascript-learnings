// anonymous higher order function
// anonymous callback function
let anonymousHigherOrderFunction=function(anotherFunction){
    anotherFunction();
}
anonymousHigherOrderFunction(function (){
    console.log("AnonymousCallBackFunction");
});