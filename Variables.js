// variables
// variable_declaration_keyword variableName=data/value'

// difference between var let const
// clarity one: declaration and initialization(var let const)
var numberOne=10;
console.log(numberOne);
let mobileBrandName="SAMSUNG";
console.log(mobileBrandName);
const piValue=3.142;
console.log(piValue);

// clarity two:re-initialization(var let)
numberOne=20;
console.log(numberOne);
mobileBrandName="NothingPhone";
console.log(mobileBrandName);
//piValue=3.150;
console.log(piValue);

// clarity three:only-declaration(var let)
var numberTwo;
console.log(numberTwo);
let courseName;
console.log(courseName);
const earthOrderPosition=3;
console.log(earthOrderPosition);

// clarity four: re-declaration(var)
var bagBrandName="WildCraft";
var bagBrandName="SkyBags";
console.log(bagBrandName);
let classRoomNumber=202;
// let classRoomNumber=203;
console.log(classRoomNumber);
const earthGravityValue=9.81;
// const earthGravityValue=9.91;
console.log(earthGravityValue);
// clarity five:block-scoped variables(let const)
{
    var laptopBrandName="hp"; 
    let laptopModelName="NoteBookPC"; 
    console.log(laptopModelName); 
    const laptopRAM=8; 
    console.log(laptopRAM); 
}
console.log(laptopBrandName);

// clarity six:function-scoped variables(var let const)
function functionName(){
    var studentName="Rahul";
    console.log(studentName);
    let studentRollNumber=101;
    console.log(studentRollNumber);
    const studentGender="Male";
    console.log(studentGender);
}


// clarity seven:variable hoisting(var)
console.log(noteBookBrandName);
var noteBookBrandName="ClassMate";
// console.log(speakerBrandName);
let speakerBrandName="JBL";
// console.log(isSunRiseEast);
const isSunRiseEast=true;