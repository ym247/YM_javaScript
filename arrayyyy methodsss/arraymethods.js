// const letters = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "a",
//     "i",
//     "j",
//     "k",
//     "l",
//     "b",
//     "i",
//     "m",
//     "n",

// ];
// const nums = [0, 2, 4, 6, 8, 10, 12, 14];
// console.log(letters.pop(), "--->", letters);
// console.log(letters.push(), "--->", letters);
// console.log(letters.push("abcd"), "--->", letters);
// console.log(letters.shift(), "--->", letters);
// console.log(letters.unshift(), "--->", letters);
// console.log(letters.unshift("cdcdc", "1", "alone", 10>5), "--->", letters);
// console.log(letters.find((item) => item=== "n"));
// console.log(letters.find((item) => item=== "l"));
// console.log(letters.findIndex((item) => item === "a"));
// console.log(letters.findIndex((item) => item === "l"));
// console.log(letters.includes("b"));
// console.log(letters.includes("y"));
// console.log(letters.indexOf("d"));
// console.log(letters.some((item) => item ==="y"));
// console.log(nums.every((item) => item >16));
// console.log(letters.slice(5), "---->", letters );
// console.log(letters.slice(5), "---->" );
// console.log(letters.slice(5, 10) );
// console.log(letters.splice(5, 5), "----->", letters);
// console.log(letters.splice(5, 2, 100, 200, 300, 400), "----->", letters);
// console.log(letters.filter((item)=> item === "i"));
// const products = [
//     { category: "shoes", size: 7, color: "black", brand: "adidas", id: 1},
//     { category: "shoes", size: 8, color: "black", brand: "puma", id: 2},
//     { category: "shoes", size: 9, color: "white", brand: "woodland", id: 3},
//     { category: "shoes", size: 8, color: "red", brand: "nike", id: 4},
//     { category: "flipper", size: 9, color: "white", brand: "adidas", id: 5},
//     { category: "shoes", size: 7, color: "red", brand: "nike", id: 6},
//  ];
// const products = [
//     { category: "shoes", size: 7, color: "black", brand: "adidas"},
//     { category: "shoes", size: 8, color: "black", brand: "puma"},
//     { category: "shoes", size: 9, color: "white", brand: "woodland"},
//     { category: "shoes", size: 8, color: "red", brand: "nike"},
//     { category: "flipper", size: 9, color: "white", brand: "adidas"},
//     { category: "shoes", size: 7, color: "red", brand: "nike"},
//  ];

// console.log(products.filter((item)=> item.size === 7));
// console.log(products.filter((item)=> item.brand === "nike"));
// console.log(products.filter((item)=> item.color === "red" && item.brand === "nike"));

// console.log(products.filter((item)=> item.size !== 7));
// console.log(products.filter((item)=> item.id !==5));
// console.log(products.map((item)=> item.size + 0.5));
// console.log(products.map((item)=> item.brand +" " + "new"));
// console.log(products.map((item)=> item.category +" " + "at low price..........!!!"));
// console.log(products.map((item)=> item.size + 0.5));


// const arr1 = ["a", "b"];
// const arr2 = ["c", "d"];

// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));


// const products = [
//     { category: "shoes", size: 7, color: "black", brand: "Adidas", id: 1, price: 2000},
//     { category: "shoes", size: 8, color: "black", brand: "Puma", id: 2, price: 4000 },
//     { category: "shoes", size: 9, color: "white", brand: "puma", id: 3, price: 8000},
//     { category: "shoes", size: 8, color: "red", brand: "Nike", id: 4, price: 5000},
//     { category: "flipper", size: 9, color: "white", brand: "adidas", id: 5, price: 4000},
//     { category: "shoes", size: 7, color: "red", brand: "nike", id: 6, price: 4500},
//  ];

// const output = products.sort((itemOne, itemTwo)=> itemOne.brand.toUpperCase() > itemTwo.brand.toUpperCase() ? 1 : -1 );
// const output = products.sort((itemOne, itemTwo)=> itemOne.brand.toUpperCase() > itemTwo.brand.toUpperCase() ? -1 : 1 );
// console.log(output);

// const output = products.map((item)=> item.brand === "Adidas" || item.brand === "adidas" ?item.price*2 : item.price
// );
// const output = products.sort ((pro1, pro2)=> pro1.brand.toUpperCase > pro2.brand.toUpperCase ? -1 : -1
// );
// console.log(output);

//--------------reduced method----//
// const output = products.reduce((redu1, redu2)=> { return redu1 + redu2.price
// }, 0 );
// console.log(output);
//....................array fill method............//
// const arraySS = [2, 4, 6, 8, 10, 12];
// const mkoM = [100, 500];

// console.log(arraySS.fill("abc", 2 , 5));
// console.log(arraySS.fill("abxyzc", 2 , 6));
// console.log(arraySS.join());
// console.log(arraySS.toString());
// console.log(letters.forEach((item, index)=> console.log(`${index} ${item}`)));

// const numbers = [2, 3 , 5, 6, 8, 9, 13, 15, 20];
// const outtputt = numbers.filter((item)=> item >= 8)
// .map((item) => item*2)
// .reduce((accum, currv)=> accum+currv,0);
// console.log(outtputt);

const aarrey = [50, "alif", "allah", "aur", "insaan", 313, 1000, 5005, 10000, 50, "drama", "alif", "allah", "aur", "insaan", 313, 1000, 50005, 10000];
const meem = [1450, "nh7", 500];
// console.log(Array.isArray (meem) && Array.isArray(aarrey));
// console.log(aarrey.concat(meem));
// console.log(aarrey.fill("kkc", 2, 7));
// console.log(aarrey.length);
// console.log(aarrey.indexOf("insaan"));
console.log(aarrey.findIndex((itemm)=> itemm === 50005 ));