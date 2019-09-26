const censor = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }
  return filtered;
};

let x = censor(['oops', 'gasp', 'shout', 'sun']);
console.log(x);


//first order function
const returnHello = (sampleObject, position) => {
	return sampleObject[position] + "Hello";
}


let k = returnHello(['test', 'javascript'], 0);
console.log(k);

// higher order function
const reduce = (reducer, initial, arr) => {
  // shared stuff
  let acc = initial;
  for (let i = 0, { length } = arr; i < length; i++) {
    // unique stuff in reducer() call
    acc = reducer(acc, arr[i]);
  // more shared stuff
  }
  return acc;
};


let reducerResult = reduce((acc, curr) => acc + curr, 0, [1,2,3]); // 6

console.log(reducerResult);



const filter = (
  fn, arr
) => reduce(
(acc, curr) => fn(curr) ?
  acc.concat([curr]) :
  acc, [], arr
);

const startsWithS = words => filter(
  word => word.startsWith('s'),
  words
);

let result = startsWithS(['sugar', 'sweet', 'best', 'coder'])
console.log(result);



const greaterThan = n => n >= 3;

console.log(greaterThan(1));
console.log(greaterThan(5));


// first function takes in the cutoff.
// the second function takes in the n value
// calculates the boolean and returns
const highpass = cutoff => (n) => n >= cutoff;
const gt3 = highpass(3);
console.log([1, 2, 3, 4].filter(gt3)); // [3, 4];



////////////////////////////////////////////////////
//https://www.youtube.com/watch?v=rRgD1yVwIvE

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter(age => age >= 21);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);



// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);


// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
////////////////////////////////////////////////////////////


const retailCompanies2 = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies2);

