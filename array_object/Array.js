//Array object
let name="RajKumar";
let rollNumber=101;
let age=23;

//Array literals (elements):object
let studentRollNumbers=[101,102,103,104,105];
let studentNames=["raj","Kumar","RajKumar"];
let studentAges=[32,16,30,35,43];
let StudentInformation=["bharath",34,101,false,true,5654645654654n];
console.log(StudentInformation,typeof StudentInformation);




//empty array literals:object
let colors=[];//
colors[0]="red";
colors[1]="green";
colors[2]="greenYellow";
colors[5]="blue";
console.log(colors,typeof colors);
console.log(colors[2]);


//Array():object
let courses=Array();
console.log(courses,typeof courses);
//Array(ArrayLenth):object
let CourseNames=Array(5);//it just shows memory is created if we try to add element at index 6 it is also allowed(js is not strictly typed as java)
CourseNames[0]="Oopsconcepts";
CourseNames[1]="Python";
CourseNames[2]="JavaLibrary";
CourseNames[3]="JAvaScript";
CourseNames[4]="Sql";
CourseNames[5]="Aptitude";
CourseNames[6]="HTML|CSS";
console.log(CourseNames,typeof CourseNames);
//Array(elements):object
let bagBrands=Array("skybag","wildCraft","AmericanTourister","VIP");
console.log(bagBrands,typeof bagBrands);


//new Array():object
let laptopBrands=new Array();
console.log(laptopBrands,typeof laptopBrands);
//new Array(3);
let shoes=new Array(3);
shoes[0]="Sparks";
shoes[1]="puma";
shoes[2]="adidas";
shoes[3]="Nike";
console.log(shoes,typeof shoes);
//new Array(Elements):object
let classRoomNumbers=new Array("401","402","403","404","405");
console.log(classRoomNumbers,typeof classRoomNumbers);

