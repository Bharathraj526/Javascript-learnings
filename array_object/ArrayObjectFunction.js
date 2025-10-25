// fill(fillElement,startIndex,endIndex):filledArray
let emptyArrayObject=new Array(10);
console.log(emptyArrayObject);
console.log(emptyArrayObject.fill("CoreJava",0,4));
console.log(emptyArrayObject.fill("JavaLibrary",4,7));
console.log(emptyArrayObject.fill("JavaScript",7));

// flat(depth_factor):flattenedArray
let nestedArray=[["a","b","A","B",[1,2,["I","ii","iii"]]],["c","d","C","D",[3,4,["iV","Iv",["iv","iiiv"]]]],["e","f","E","F",[5,6,["v","vi","vii"]]]];
console.log(nestedArray);
console.log(nestedArray.flat(Infinity));

// sort():sortedArray
// sort(callBackFunction):sortedArray
let numbers=[-10,110,45,11,5,-55];
console.log(numbers.sort((firstElement,secondElement)=>{
    return firstElement-secondElement;
}));
let courses=["JavaLibrary","JavaScript","JavaProgramming","Java"];
console.log(courses.sort((firstElement,secondElement)=>{
    return firstElement.length-secondElement.length;
}));

// map(callBackFunction):mappedArray
let numericals=[1,3,5,7,9,11];
console.log(numericals.map(number=>{return number*2;}));
console.log(numericals.map(number=>{return number*2;}));
console.log(numericals.map(number=>{return number**3;}));
let radius=[90,5,9,15,20];
console.log(radius.map(radius=>{return 3.14*radius*radius;}));
console.log(radius.map(radius=>{return 2*3.14*radius;}));

// find(callBackFunction):foundElement
console.log(radius.find(radius=>{
    if(radius<10){
        return radius;
    }
}));

// findIndex(callBackFunction):foundElementIndex
console.log(radius.findIndex(radius=>{
    if(radius<10){
        return radius;
    }
}));

// filter(callBackFunction):filteredArray
let numerics=[1,2,3,4,5,6,7,8,9,10,11,12];
console.log(`Odd Numbers : ${numerics.filter(numeric=>{return numeric%2==1})} `);
console.log(`Even Numbers : ${numerics.filter(numeric=>{return numeric%2==0})}` );

// some():boolean
let students=["SriKanth","Ajay","Pawan","Sai","SaiPawan"];
console.log(students.some(student=>{
    if(student.length<=5){
        return student;
    }
}));

// every():boolean
console.log(students.every(student=>{
    if(student.length<=5){
        return student;
    }
}));
