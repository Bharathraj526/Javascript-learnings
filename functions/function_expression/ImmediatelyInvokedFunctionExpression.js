
//immeditely invoked function expression   //  (anonymous||arrow function)();
(function(){console.log("Immediately Invoked Function Expression")})();

//function with parameters and without return value
((length,breadth)=>console.log(length*breadth))(10,15);

//function with parameter and with return value
let squaredNumber=(number=>{return number*number})(625);
console.log(squaredNumber);