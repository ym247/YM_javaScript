// // Arithemetic operator
// const ArithemeticOperators = (a, b)=>{
//     //addition......
//     // console.log(a + b);
//     // console.log("addition-->>", a + b);

//     //substract.........
//     console.log("substract-->>", a - b);

//     //.......multiply
//     console.log("multiply-->>", a * b);

//     //....divide
//     console.log("divide-->>", a / b);

//     //....modulus
//     console.log("modulus-->>", a % b);

//     // increment...........
//     console.log("increment...", a++);     // a+1
//  //   decrement.........
//     console.log("decrement...", a--);     // a-1
// }
// ArithemeticOperators(10, 20);

//..............................assignment operators.................................................................................................

// const AssignmentOperator =(a, b)=>{
//1.....equal to.....
// let data = "exaltechs"
// console.log(data);
//2........... addition assignment
// console.log("addass", (a +=b));   //  >>>>>>>>a= a+b
//3. substraction assignment
// console.log("subsass", (a-=b));    // >>>>>>>>>>>  a = a-b
//4..... Division Assignment
//  console.log("divass", (a /=b));    >>>>>>>>>>>  a = a/b
//5..... Modulus.........
// console.log("modulusass", (a %=b));  >>>>>>>> a = a%b

//6.multiplication assignment..............
// console.log("multpass", (a*=b));     //>>>>>>  a = a*b
//7. Exponential.....................
// console.log("exponentialass", (a **=5));
// console.log("exponentialass", (b **=5));
// console.log("exponentialass", (a **=3));


// }
// AssignmentOperator(20, 30);
// .....................comparison operator...................................................................

// const comparisonOperator = (a, b) => {
//     //1. equity check
//     // console.log(a == b);
//     // 2. not equal to......
//     // console.log(a != b);
//     // 3.strict equality check
//     console.log(a === b);  //.. stricly checks data type as well as values equal to
//     // 4.strictly not equal to
//     console.log(a !== b);     // stricly checks data type as well as values not equal to
//     //4. greater than....
//     console.log(a > b);
//     //5. greater than equal to...
//     console.log(a >= b);
//     //6. less than
//     console.log(a < b);
//     //7. less than equal to...
//     console.log(a >= b);
// }
// comparisonOperator(10, 20);
// .............logical Operators................//////
var isvalid = true;
const logicalOperator = (a, b)=>{
    // AND AND &&
    // console.log(a >= b && a > b);

    // || operator
    console.log(a >= b || a > b);
    console.log(!isvalid);

};
// logicalOperator(5, 10);
logicalOperator(20, 10);






