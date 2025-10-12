//java script printing ways
//console object(browserConsole)
console.log("javaScriptPrintingWays");
console.log(10+5);//15
console.log(10*5);//50
console.log(console);//console object ,normal message form
console.dir(console);//console object,object form
console.dir(document);//document object,obj form
console.dir(window);//window obj ,obj form


//document object
document.write("<span style='color:red;background-color:white'>FirstLine</span><br>");
document.write("<span style='color:white;background-color:red'>SecondLine</span><br>");
document.writeln("<span style='color:blue;background-color:white'>ThirdLine</span><br>");
document.writeln("<span style='color:red;background-color:black'>FourthLine</span><br>");
document.writeln("<span style='color:pink;background-color:green'>FifthLine</span><br>");

//window object

//innerHTML java script property
//dom
//If you don’t use defer and your <script> tag is in the <head>, your script might run before the elements are created, and getElementById() will return null.
document.getElementById("container_one").innerHTML="<div style='width:50%;height:50%;background-color:yellow;'><div style='width:50%;height:50%;background-color:darkblue;'></div></div>"
//innerTExt java script property
//dom
document.getElementById("container_two").innerText="<div style='width:50%;height:50%;background-color:yellow;'><div style='width:50%;height:50%;background-color:darkblue;'></div></div>";

