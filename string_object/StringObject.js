//string object
//string literals(""| ''):string
let batteryName="Dura'c'ell";
let projectorName='Ep"s"on';
console.log(batteryName,typeof batteryName);
console.log(projectorName,typeof projectorName);

//string():string
let bagBrandName=String("WildCraft");
console.log(bagBrandName,typeof bagBrandName);
let bikeModelName=String('ApacheRTR180');
console.log(bikeModelName,typeof bikeModelName);

//template literals(``):string
let purpose=`webDevelopment is the process of desingning and developing of front-end of webpages by using web
technologies`;
console.log(purpose,typeof purpose);


//new String();StringObject
let courseName=new String('JavaScript');//boxing
console.log(courseName,typeof courseName);


//string interpolation(${variableName|functionName|ConstructorName})
function toCheckGivenNumberIsDivisibleByFiveandThree(givenNumber){
    if((givenNumber%3==0)&&(givenNumber%5==0)&&(givenNumber>0)){
         return `${givenNumber} is divisible by 3 and 5`;
    }
    else if((givenNumber%3==0)){
        return `${givenNumber} is divisible by 3`;
    }
    
    else if((givenNumber%5==0)){
        return `${givenNumber} is divisible by 5`;
    }
    else{
        return `${givenNumber} is not divisible by 3 or 5`;
    }
}
console.log(`Given Number Divisibility Status : ${toCheckGivenNumberIsDivisibleByFiveandThree(15)}`);
console.log(`Today Date and time:${Date()}`);
let colorName=prompt("enter the colorName");
let CarBrandName=prompt("enter brandName");
document.getElementById("user_statement").innerHTML=`user loves <span style="color:${colorName}">${colorName}</span> color <span style="color:${colorName}">${CarBrandName}</span> car`;

