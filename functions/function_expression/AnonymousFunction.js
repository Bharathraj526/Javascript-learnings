let number=10;
let anonymousFunction=function(){
    console.log("AnonymousFunction.");
}
for(let functionCallTimes=1;functionCalltimes<=5;functionCal++){
    anonymousFunction();
}
anonymousFunction();


///function without parameters and without return value
let toDoubleNUmber=function(){
    let number=10;
    let doubleNumber=number*2;
    console.log(doubleNumber);
}
toDoubleNUmber();


//function with parameters and without return value
let tofindAreaOfRightAngledTrianle=function(base,height){
  let areaOfRightAngledTriangle=0.5*base*height;
  console.log(areaOfRightAngledTriangle);
}
tofindAreaOfRightAngledTrianle(10,15);


//function with parameters and with return value
let tofindAreaOfRectangle=function(length,breadth){
  let areaOfRectangle=length*breadth;
  return areaOfRectangle;
}

document.getElementById("area_of_rectangle_heading").innertext="area of rectangle"+tofindAreaOfRectangle(100,200)+"cm";
