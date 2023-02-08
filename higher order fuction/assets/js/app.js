var cl = console.log

// let ages = [10, 20, 30, 40, 50, 60]


// let doubleAsege = []
// for (let i = 0; i < ages.length; i++) {
//     // cl(ages[i] * 2)
//     doubleAsege.push(ages[i]*2)
// }
// cl(doubleAsege)

// higer order function >> a function which accept another function as a parameter/ argument

// call back function >> a function which passed as prameter/ argument inside another fuction

// ages.forEach(function(eve){
//     doubleAsege.push (eve *2)
// })
// cl(doubleAsege)


// ages.forEach((eve => {
//     doubleAsege.push(eve * 2)
// }))
// cl(doubleAsege)


// ages.forEach(eve => doubleAsege.push(eve*2))
// cl(doubleAsege)



// map method
// usecase of map method
// you have give a array
// you have to creat a new array from given array
// you have to apply same functionality an each and ever element of give


// ages = [10, 20, 30, 40, 50, 60]


// map formula
// def  map it retrun new array
// new array = array.map(fuction(para){})

// let doubleAseg = ages.map(function (age) {
//     return (age * 2)
// })

// cl(doubleAseg)

// let doubleAseg = ages.map(age => (age*2))
// cl(doubleAseg)


// squre root
// ages = [10, 20, 30, 40, 50, 60]


// let sqrtAges = []

// for (let i = 0; i < ages.lenght; i++) {
//     sqrtAges.push(Math.sqrt(ages[i]))

// }
// cl(sqrtAges)

// ages.forEach(function(age){
//     sqrtAges.push(Math.sqrt(age))
// })
// cl(sqrtAges)

// ages.forEach (age => sqrtAges.push(Math.sqrt(age)))
// cl(sqrtAges)

// map

ages = [10, 20, 30, 40, 50, 60]

// let sqrtAges = ages.map(function(age){
//     return (Math.sqrt(age))
// })
// cl(sqrtAges)

// let sqrtAges = ages.map(age => Math.sqrt(age))
// cl(sqrtAges)




// let companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

//  let companyNameonly = []
// for (let i = 0; i < companies.length; i++) {
//     companyNameonly.push(companies[i].name)
//     // cl(companies)
// }

// companies.forEach(function(com){
//     companyNameonly.push(com.name)
// })

// companies.forEach(com => companyNameonly.push(com.name))

// let companyNameonly = companies



//  cl(companyNameonly)










// let compStart = []

// for ( let i = 0; i < companies.length; i++){
//     compStart.push({
//         comname : companies[i].name,
//         start : companies[i].start
//     })
// }

// companies.forEach(function(com){
//     compStart.push({
//         comname : com.name,
//         star : com.start
//     })
// })

// companies.forEach(com => compStart.push({
//     comname : com.name,
//     start : com.start
// }))

// let compStart = companies.map(function(com){
//     return{
//         comname : com.name,
//      start : com.start
//     }
// })


// let compStart = companies.map(com => {
//     return{
//         comname : com.name,
//           start : com.start
//     }
// })
// cl(compStart)


// let comDuretion = []

// for (let i = 0; companies.length; i++) {
//     comDuretion.push({
//         compName : companies[i].name,
//         duretion: companies[i].end - companies[i].start
//     })
// }

// companies.forEach(function (com) {
//     comDuretion.push({
//             compname : com.name,
//             duration : com.end - com.start
//     })
// })

// companies.forEach(com => comDuretion.push({
//     compname : com.name,
//     duration : com.end - com.start
// }))

// let comDuretion = companies.map(function(com){
//     return({
//         compname : com.name,
//     duration : com.end - com.start
//     })
// })

// let comDuretion = companies.map(com => ({
//     compname : com.name,
//     duration : com.end - com.star
// }))
// cl(comDuretion)

// for( let i = 0; i < 16; i++){
//     // cl(i)
//     if(i%2 !==0){
//         cl("even number")
//     }else{
//         cl("given number is  not a even")
//     }
// }



var ages = [10, 21, 30, 60, 40, 50]

// adult = []

// for (var i = 0; i < ages.lenth; i++) {
//     if (ages[i] >= 18) {
//         adult.push(ages[i])
//     }
// }
// cl(adult)

// ages.forEach(age => {
//     if (age <= 18) {
//         adult.push(age)
//     }
// })
// cl(adult)

let adultAges = ages.filter(function (age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
})
cl(adultAges)

let adul = ages.filter(age => age >= 18)
cl(adul)




// let companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// let comRetail = []

// for (var i = 0; i < companies.length; i++) {
//     if (companies[i].category.toLowerCase().trim() === "retail") {
//         comRetail.push(companies[i])
//     }
// }
// cl(comRetail)

// companies.forEach(com => {
//     if(com.category.toLowerCase().trim() === 'retail'){
//         comRetail.push(com)
//     }
// })

// let comRetail = companies.filter(com =>{
//     return com.category.toLowerCase().trim() === 'retail'
// })

// let comRetail = companies.filter(com => com.category.toLowerCase().trim() ==='retail')


// cl(comRetail)



// let companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// var atleast10year = []

// for (let i = 0; i < companies.length; i++) {
//     if (companies[i].end - companies[i].start >10) {
//         atleast10year.push(companies[i])
//     }
// }


// companies.forEach(com => {
//     if(com.end - com.start > 10){
//         atleast10year.push(com)
//     }
// })


// let atleast10year = companies.filter(function (com) {
//     return com.end - com.start > 10
// })


// let atleast10year = companies.filter(com => com.end - com.start >= 10)
// cl(atleast10year)

///


let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// filtet and map mathod
// [{comname = "company name and duration==22"}] and started in 80s (1920 to 1989)
// let com80s = []


// companies.forEach(com => {
//     if (com.start >= 1980 && com.end <= 1989) {
//         com80s.push({
//             comName: com.name,
//             duration: com.end - com.start
//         })
//     }
// })
// cl(com80s)

// let com80s =  companies.filter(com => com.start >=1980 && com.end <=1989).map(com =>({
//     comname :com.name,
//     duration : com.end - com.start
// }))

// [comname "comnay name ", lifespan : "1981 - 2000"] and cat === finace

// let comfinance = []

// companies.forEach( com => {
//     if (com.category.toLocaleLowerCase().trim() === 'finance'){
//         comfinance.push({
//             comname : com.name,
//             lifespan : `${com.start}-${com.end}`
//         })
//     }
// })


let comfinance = companies
    .filter(com => com.category.toLocaleLowerCase().trim() === 'finance')

    .map(com => ({
        compname: com.name, lefespan: `${com.start}- ${com.end}`
    }))
cl(comfinance)



// let comrunat10 = []


// companies.forEach(com => {
//     if(com.end - com.start>=10) {
//         comrunat10.push({
//             comname : com.name,
//             category : com.category
//         })
//     }
// })


let comrunat10 = companies.filter(com => (com.end - com.start) >= 10).map(com => ({
    comname: com.name,
    category: com.category
}))
cl(comrunat10)



// find 
// use case of find method
// we have given a array with one object
// and we have to find out a object which pass the given condition
// after satify the condition find method stop the ittretion and filter method are not stop itteretion
// after satify condition

companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];


let givenId = 4;
let getObj;// we want object

// companies.forEach(com => {
//     if (Number(com.id) === givenId)
//         getObj = com
// })

// getObj = companies.find(com => {
//     return +com.id === givenId
// })

getObj = companies.find(com => +com.id === givenId)

cl(getObj)


var ages = [10, 20, 30, 40, 50, 60]

// let totalAges = 0;
// ages.forEach(age => {
//     //  totalAges = totalAges + age
//     totalAges += age;
// })
// cl(totalAges)


// let totalAges = ages.reduce((accum, nextvalue) =>{
//     return accum = accum + nextvalue
// })

// let multiAges = 1;
// ages.forEach(age => multiAges *= age)


let multiAges = ages.reduce ((multi, nextAges)=> multi *=nextAges)

cl(multiAges)


// let compNameDur = companies.reduce((accum, comp)=>{
//     accum.push({
//         compName : comp.name,
//         duration : comp.end -comp.start
        
//     })
//     return accum
// },[])


let totalAgesofComp = companies.reduce(( total, comp)=> {
    return total += comp.end - comp.start
},0)
cl(totalAgesofComp)