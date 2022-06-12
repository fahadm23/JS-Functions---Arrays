const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
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

 for(let i = 0; i < companies.length; i++) {
     
 };



// *forEach* (loop through an array like for-loop but doesn't return anything)

 companies.forEach(function(company) {
    
 });

// *filter*
// for loop you have to create an empty array, initialzize i,
//  create an if statement saying if the current iteration of ages is more than or equal to 21,
//  push(ages[i]) to the canDrink array.

//GET 21 AND OLDER

 let canDrink = [];
 for(let i = 0; i < ages.length; i++) {
     if(ages[i] >= 21) {
         canDrink.push(ages[i]);
     }
 }

// filter takes a function and a simple if statment and a return value to do the same thing
 const canDrink1 = ages.filter(function(age) {
     if(age >= 21) {
         return true;
     }
 })

// ARROW FUNCTION FILTER
const canDrink2 = ages.filter(age => age>= 21);

// FILTER RETAIL COMAPANIES

 const retailCompanies = companies.filter(function(company) {
     if(company.category === 'Retail') {
         return true;
     }
 });

 const retailCompanies1 = companies.filter(company => company.category === 'Retail');



// Filter companies that started in the 80s

 const companies80s = companies.filter(company => company.start < 1990);
 

// Get Companies that last 10 years or more
const companies10 = companies.filter(company => company.end - company.start >= 10);


// map
// Create array of company names

const companyNames = companies.map(company => company.name);

// Use map to square each number in the ages array

const squareAges = ages.map(age => Math.sqrt(age));

// Use map to multiply the numbers in the ages array by 2
const agesTimesTwo = ages.map(age => age * 2);


// sort
// Sort companies by earliest start year
const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start) {
        return 1;
       }   else {
           return -1;
       }
    
});

const sortedCompaniesShort = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages from lowest to highest
 const sortAges = ages.sort((a, b) => a - b);

// reduce
// Use reduce to add all the ages together
let sumAges = 0;
for(let i = 0; i < ages.length; i++) {
    sumAges += ages[i];
}

const agesSum = ages.reduce((total, age) => total + age, 0);


// Get total years from all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);


// COMBINE METHODS

const combined = ages
.map(age => age * 2)                // multiply by 2
.filter(age => age >= 40)           // filter only ages 40 and above
.sort((a, b) => a - b)              // sort from smallest to largest
.reduce((a, b) => a + b, 0);        // add all the values

console.log(combined);

