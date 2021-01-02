const fs = require('fs');
const input = fs.readFileSync('day4.txt').toString().split('\n\n');

// PART 1
// cid is optional, all else valid
let essentialDetails = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

// function to check for no. of details
function checkPassport (passport, essentialDetails) {
  let numberOfDetails = 0;
  essentialDetails.forEach(detail => {
    if (passport.includes(detail)) {
      numberOfDetails++;
    }
  })
  return numberOfDetails;
}

let validPassports = 0;
let validArray = [];
for (passport of input) {
  if (checkPassport(passport, essentialDetails) === essentialDetails.length){
    validPassports++;
    validArray.push(passport);
  }
}
console.log(validPassports);

// PART 2
// added valid array in part 1 to work on a smaller group
// sort and transform the array
let sortedArray = validArray.map(
    passport => passport.replace(/\n/g, ' ').split(' ').sort()
  );

function checkByr (passport) {
  let byrDetail = passport.find(details => details.includes('byr'));
  let byrValue = byrDetail.split(':')[1]; //get value of byr
  // returns if true 
  return (byrValue.length === 4 && byrValue >=1920 && byrValue <= 2002);
}

function checkIyr (passport) {
  let iyrDetail = passport.find(details => details.includes('iyr'));
  let iyrValue = iyrDetail.split(':')[1]; 

  return (iyrValue.length === 4 && iyrValue >=2010 && iyrValue <= 2020);
}

function checkEyr (passport) {
  let eyrDetail = passport.find(details => details.includes('eyr'));
  let eyrValue = eyrDetail.split(':')[1]; 

  return (eyrValue.length === 4 && eyrValue >=2020 && eyrValue <= 2030);
}

function checkHgt (passport) {
  let hgtDetail = passport.find(details => details.includes('hgt'));
  let hgtValue = hgtDetail.split(':')[1]; 

  let Value = 0;
  if (hgtValue.includes('cm')) {
    Value = hgtValue.split('cm')[0];
    return (Value <= 193 && Value >= 150);

  } else if (hgtValue.includes('in')) {
    Value = hgtValue.split('in')[0];
    return (Value <=76 && Value  >= 59);

  } else {
    return false;
  }
}

function checkHcl (passport) {
  let hclDetail = passport.find(details => details.includes('hcl'));
  let hclValue = hclDetail.split(':')[1]; 
  let criteria = new RegExp(/^[a-f0-9]+$/i); 
  /*------------------
  ^ start of string
  [a-z0-9] 
  + one or more times
  $ end of string
  /i case-insensitive 
  -------------------*/
  
  return (hclValue[0] === '#' 
    && hclValue.length === 7 
    && criteria.test(hclValue.substring(1,7))
  );
}

function checkEcl (passport) {
  let eclDetail = passport.find(details => details.includes('ecl'));
  let eclValue = eclDetail.split(':')[1]; 
  let criteria = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

  return (criteria.includes(eclValue)) 
}

function checkPid (passport) {
  let pidDetail = passport.find(details => details.includes('pid'));
  let pidValue = pidDetail.split(':')[1]; 
  let criteria = new RegExp(/^[0-9]+$/); 

  return (pidValue.length === 9 && criteria.test(pidValue));
}

let validPassports2 = 0;
for (passport of sortedArray) {
  if (checkByr(passport) 
    && checkEcl(passport) 
    && checkEyr(passport)
    && checkHcl(passport)
    && checkHgt(passport)
    && checkIyr(passport)
    && checkPid(passport)
  ) {
    validPassports2++;
  }
}

console.log(validPassports2);

// console.log(sortedArray[2]);
// console.log(checkPid(sortedArray[2]))