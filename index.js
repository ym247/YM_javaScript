console.log("this is script tag");
      console.warn("warn");
      console.error("can't use");
      
      // function decleration:
      function addition(){
         console.log("addition------->>", 2+4);
        }
      addition();

      // function expression:
      const substraction = function(){
        console.log("substraction........>>", 10-3);
      }
      substraction();

      // arrow fuction:
      const division=()=>{
        console.log("division......>>", 10/3);
      }
      division();
//---------------------------------
const mdynamicValues = (value1) => {
    return value1+10;
};
console.log(dynamicValues(100));

const mdynamicValues = (value5, value2) => {
    return value5+ value2;
};
console.log(dynamicValues(100, 110));

