//operators(operand)
//operators(operands)

//arithmetic operators(+ - * / % **)
console.log(10+10);
console.log(20-10);
console.log(10*10);
console.log(10/5);
console.log(10**5);
console.log(10**2);
console.log(10*10);

//relational operators(> < <= >= == === != !==)
console.log(10>5);
console.log(10<5);
console.log(10<=10);
console.log(10>=20);
console.log(10==10);
console.log(10==="10");
console.log(10!=10);
console.log(10!=="10");

//logical operators(&& || !)
console.log((10<5)&&(5==5));
console.log((10<5)||(5==5));
console.log(!((10==10)&&(10>20)||(20==="20")&&(10<=10)));


//assignment operator(= += -= *= /= %= **=)
let number =10;//assignment
console.log(number=20);//re-assignment
console.log(number+=5);//compound-assignment
console.log(number+=10);
console.log(number-=5);
console.log(number*=5);
console.log(number/=5);
console.log(number%=5);
console.log(number**=5);

//unary operators(++ -- typeof delete void)
let gameScore=0;
console.log(++gameScore);
console.log(++gameScore);
let playerLives=3;
console.log(--playerLives);
console.log(--playerLives);
console.log(--playerLives);
console.log(10,typeof 10);