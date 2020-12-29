const fs = require('fs');

let mapArray = fs.readFileSync('day3.txt').toString().split('\n');
// console.log(mapArray);


// right 3 down 1
let i = 1; // start counting from row 1 not row 0
let ans31 = 0;
let rowlength = mapArray[0].length; // get the length of 1 row

while (i < mapArray.length) {
  if (mapArray[i][i*3%rowlength] === '#' ) { // mod rowlegnth to restart counter 
    ans31++; 
  } 
  i++;
}
// console.log(ans31);


// PART 2
// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.

// THIRD Attempt, using a function
const day3 = (input, right, down) => {
  let i = 1; // start counting from row 1 not row 0
  let ans = 0;
  let rowlength = input[0].length; // get the length of 1 row

  while (i*down < mapArray.length) { // i*down to prevent the index call below mapArray[i*down] from exceeding the number of items, resulting in undefined.
    if (mapArray[i*down][i*right%rowlength] === '#' ) { // mod rowlegnth to restart counter 
      ans++; 
    } 
    i++;
  }
  return ans;
};
console.log(day3(mapArray,3,1));

// SECOND attempt to put into a loop
// let slopearray = [ // right down
//   [1,1],
//   [3,1],
//   [5,1],
//   [7,1],
//   [1,2],
// ]; 
// let k = 1;
// let ans = 0;
// let ansarray = [];

// for (let j = 0; j < slopearray.length; j++) {
//   k = 1;
//   ans = 0;

//   while (k*slopearray[j][1] < mapArray.length) { // modifying the while loop depending on down how many lines, otherwise will be undefined
//     if (mapArray[k*slopearray[j][1]][k*(slopearray[j][0])%rowlength] === '#' ) { // mod rowlength to restart counter 
//       ans++; 
//     } 
//     k++;
//   }
//   ansarray.push(ans);
// }

// console.log(ansarray);


// FIRST attempt

// let ans11 = 0;
// let ans51 = 0;
// let ans71 = 0;
// let ans12 = 0;

// // right 1 down 1
// let j = 1;
// while (j < mapArray.length) {
//   if (mapArray[j][j%rowlength] === '#' ) { // mod rowlegnth to restart counter 
//     ans11++; 
//   } 
//   j++;
// }
// console.log(ans11);

// // right 5 down 1
// let k = 1;
// while (k < mapArray.length) {
//   if (mapArray[k][k*5%rowlength] === '#' ) { // mod rowlegnth to restart counter 
//     ans51++; 
//   } 
//   k++;
// }
// console.log(ans51);

// // right 7 down 1
// let l = 1;
// while (l < mapArray.length) {
//   if (mapArray[l][l*7%rowlength] === '#' ) { // mod rowlegnth to restart counter 
//     ans71++; 
//   } 
//   l++;
// }
// console.log(ans71);

// // right 1 down 2
// let m = 1;
// while (2*m < mapArray.length) {
//   if (mapArray[2*m][m%rowlength] === '#' ) { // mod rowlegnth to restart counter 
//     ans12++; 
//   } 
//   m++;
// }
// console.log(ans12);

// let finalans = ans11*ans31*ans51*ans71*ans12;
// console.log(finalans);

