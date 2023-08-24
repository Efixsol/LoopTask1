
// Adding Array elements using loop function
const numbers = [5, 5, 5, 5, 5,];
total = 0
for (let i = 0; i<numbers.length; i++){
    total += numbers[i];
}

console.log(`sum of array is: ${total}`)

////////////XXXXXXXXXXXXXXXXXXXXXxx////////////////
// Reverse Array function !!!!!!!!
// const digits = [5, 10, 15, 20, 25,];

// for (let i = 0; i<numbers.length; i++){
//     let a= digits.reserve(i);
// }

// console.log(`sum of array is: ${a}`)
// !!!!!!!!!!!!!!!XXXXXXXXXXXXXXX!!!!!!!!!!!!!!!!
/////////////////////////////////////////////////

// Table of 5 using for loop

for (let T = 1; T <= 10; T++) {
    console.log(`5 x ${T} = ${5 * T}`);
}

////////////////////////////////////////////////////
// Table of 6 using do while loop
var i=1
do {  ; 
    console.log(`6 x ${i} = ${6 * i}`);
    i++
} while (i<=10); 
//////////////////////////////////////////////
// Table of 7 using while loop


var a = 1;
while (a <= 10) {
    console.log(`7 x ${a} = ${7 * a}`);
    a++;
}

/////////////////////////////////////////////////////
// Reverse Array using loop

var myarray = ["a", "b", "c", "d", "e", "f"];
var newarray = [];

for (let i = myarray.length - 1; i >= 0; i--) {
    newarray.push(myarray[i]);  
}

console.log(newarray);

