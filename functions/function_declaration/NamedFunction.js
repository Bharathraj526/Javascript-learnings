//named function
for(let functionCallTimes=1;functionCallTimes<=200;functionCallTimes++){
    namedFunction();
}
function namedFunction(){
    //operational codes
    console.log("NamedFunction");
}

//function without parameters and without return value
function toProductTwoNumbers(){
    let numberOne=10;
    let numebrTwo=20;
    let productValue=numberOne*numebrTwo;
    console.log(productValue);
}
toProductTwoNumbers();

// function with parameters and without return value
function toProductThreeNumbers(numberOne,numebrTwo,numebrThree){
    let productValue=numberOne*numebrTwo*numebrThree;
    console.log(productValue);
}
toProductThreeNumbers(10,20,30);
toProductThreeNumbers(20,30,40);
toProductThreeNumbers(70,80,90);

//function with parameters and with return value
function toSquareRadius(radius){
    let squaredradius=radius*radius;
    return squaredradius;
}
function toFindAreaOfCircle(){
    const pi=3.142;
    let AreaOfCircle=pi*toSquareRadius(7.5);
    return AreaOfCircle;
}
document.getElementById("circle_area_heading").innerText="AreaOfCircle : "+parseInt(toFindAreaOfCircle())+"cm";
document.getElementById("circle_function_area_implemention").innerText=toFindAreaOfCircle;