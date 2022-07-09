console.log("........");
// const restsParameter = (...data) =>{
    const restsParameter = (a, b, ...data) =>{
    console.log(data);
    console.log(data[2]);
    console.log(a, b,);
    let c= data[2];
    console.log(c);
}
restsParameter(10, 20, 30, 40, 50, 60, 70);

//-----------------
// TEMPLATE LITERAL
const templateLiteral = (name, age)=>{
    // console.log("this" + " " + "is" + name+" " + age+" " + "years" + "old");
    console.log(`this is ${name} ${age} years old`);

};
templateLiteral("yaseen", 29);