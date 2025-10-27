let movieReview=`He is an legendary actor,He proves that gravity does not exist and sometimes He pull railway tracks for beating rowdies.`;
console.log(movieReview);
//#replace("oldString",newString"):replacedString   
console.log(movieReview.replace("He","Balayya"));
//(Balayya is an legendary actor,He proves that gravity does not exist and sometimes He pull railway tracks for beating rowdies.)

//#replaceAll("oldString","newString"):replacedString   
console.log(movieReview.replaceAll("He","Balayya"));
//(Balayya is an legendary actor,Balayya proves that gravity does not exist and sometimes Balayya pull railway tracks for beating rowdies.)

//trim():trimmedString
let speaker=" J B L "; 
console.log(speaker);// J B L |
console.log(speaker.trim());//J B L|
//trimStart():trimmedString
console.log(speaker.trimStart());//J B L |
//trimEnd():trimmedString
console.log(speaker.trimEnd());// J B L|

//small task
let fruitName=" a p p l e ";
console.log(fruitName.trim().replaceAll(" ",""));

//padStart(maxLength,fillstring):concatenatedString
let subject="development";
console.log(subject.padStart(15,"Java "));

//padEnd(maxLength,fillString):concatenatedString
let SubjectName="Core ";
console.log(SubjectName.padEnd(9,"Java"));

//concat():concatenatedString
let webTechnologies="HTML";
console.log(webTechnologies.concat(" |css| JavaScript"));

//includes(searchString):boolean
let emailUserName="sai@gmail.com";
if(emailUserName.includes("@")){
    console.log(`${emailUserName} contains @,Username added successfully..`);
}
else{
    console.log(`${emailUserName} does not contain @,please provide @`);
}

//startsWith(searchString):boolean
//endsWith(searchString):boolean
if(emailUserName.startsWith("@gmail.com")){
    console.log("EmailUsername is valid");
}
else{
    console.log("EmailUsername is not valid,Please provide domain name");
}

//toLowercase():LowercasedString
let weatherStatus="WINDY".toLowerCase();
if(weatherStatus=="rainy"){
   console.log("Eat snacks");
}
else if(weatherStatus=="sunny"){
    console.log("Apply sunscreen");
}
else if(weatherStatus=="cloudy"){
    console.log("Eat snacks");
}
else if(weatherStatus=="windy"){
    console.log("wear Head Gear");
}

//toUpperCase:upperCasedString
let course="html";
console.log(course.toUpperCase());

//split():arrayObject
//split(splitter):arrayObject
let airConditioner="Blue Star";
console.log(airConditioner.split(""));
console.log(airConditioner.split("").length);
console.log(airConditioner.length);

//italics():<i>String</i>
function toValidateNumberPositive(givenNumber){
    if(givenNumber>0){
        return `${givenNumber} is positive`.italics();
    }
    else{
        return `${givenNumber} is not positive`.italics();
    }
}
document.getElementById("return_value").innerHTML=toValidateNumberPositive(-10);





