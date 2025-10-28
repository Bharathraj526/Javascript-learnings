//arrow function
let arrowFunction=()=>console.log("ArrowFunction");{
    for(let functionCalltimes=1;functionCalltimes<=500;functionCalltimes++){
        arrowFunction();
    }
}
arrowFunction();



//arroe function without parameter and without return type
let toFindareaOFSquare=()=>{
    let side=100;
    let areaOFSquare=side*side;
    console.log(areaOFSquare);
}
toFindareaOFSquare();

//function with paramters and without return value
let toCalculateAreaOfSquare=side=>console.log(side*side);
toCalculateAreaOfSquare(50);