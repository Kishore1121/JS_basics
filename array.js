//Array is used to store the data we have some methods in array like push,pop,slice,indexof,length etc...
let bike=["ktm","yamaha","kawaski","harely","RE"];
let bikecc=[200,300,400,500,600,700,800];
console.log(bikecc);
//console.log(bike);

//now we use push it willadd the last element
bike.push("agusta");
console.log(bike);

// now we use length length will be used to check the array length
console.log("The array length is "+bike.length);

//now we use slice slice willbe used to slice the index of array 0 to 4.
console.log(bike.slice(0,3));

//now we check indexof  indexof will be used tocheck the index of array
console.log("The index of kawaski is "+bike.indexOf("kawaski")); 

// pop will be used to remove the last element
// console.log("The pop will be used to remove the last element "+bike.pop());

// reverse used to reverse the array
// console.log(`Reverse used to reverse the array ${bike.reverse()}`);

// shift
// console.log(`Shift method used to remove the first element ${bike.shift()}`)

//unshift
// console.log(`Unshift method will be used to add the first element ${bike.unshift("triump")}`);
console.log(bike);

// concat 
console.log(`The concat will be used to concat the array ${bike.concat(bikecc)}`);
