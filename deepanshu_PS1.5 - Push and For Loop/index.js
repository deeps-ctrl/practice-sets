//#region Exercise 1
const numbers = [2, 4, 6, 10, 5];
const doubledNumbers = []
for (let i = 0; i < numbers.length; i += 1) {
    doubledNumbers.push(numbers[i] * 2)
}
console.log(doubledNumbers)
console.log('\n')
//#endregion

//#region Exercise 2
const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' }
]
const studentsWithAGrades = []
for (let i = 0; i < students.length; i += 1) {
    if (students[i].grade === 'A') {
        studentsWithAGrades.push(students[i].name)
    }
}
console.log(studentsWithAGrades)
console.log(`\n`)
//#endregion

//#region Exercise 3
const prices = [99, 150, 75, 120, 200]
const pricesGreaterThan100 = []
for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] > 100) {
        pricesGreaterThan100.push(prices[i])
    }
}
console.log(pricesGreaterThan100)
console.log('\n')
//#endregion

//#region Exercise 4
const ages = [12, 15, 22, 29, 34]
const evenAges = []
for (let i = 0; i < ages.length; i += 1) {
    if (ages[i] % 2 === 0) {
        evenAges.push(ages[i])
    }
}
console.log(evenAges)
console.log('\n')
//#endregion

//#region Exercise 5
const sports = ['Soccer', 'Basketball', 'Tennis']
const sportsWithQuestionMark = []
for (let i = 0; i < sports.length; i += 1) {
    sportsWithQuestionMark.push(sports[i] + '?')
}
console.log(sportsWithQuestionMark)
console.log('\n')
//#endregion


//#region Exercise 6
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = []
for (let i = 0; i < numbers1.length; i += 1) {
    if (numbers1[i] % 2 === 0) {
        evenNumbers.push(numbers1[i])
    }
}
console.log(evenNumbers)
console.log('\n')
//#endregion

//#region Exercise 7
const oddNumbers = []
for (let i = 0; i < numbers1.length; i += 1) {
    if (numbers1[i] % 2 !== 0) {
        oddNumbers.push(numbers1[i])
    }
}
console.log(oddNumbers)
console.log('\n')
//#endregion

//#region Exercise 8
const names = ['John', 'Doe', 'Jane', 'Smith']
let nameString = ''
for (let i = 0; i < names.length; i += 1) {
    nameString += names[i]
    if (i !== names.length - 1) {
        nameString += '-'
    }
}
console.log(nameString)
console.log('\n')
//#endregion

//#region Exercise 9
const strings = ['Hello', 'world', 'from', 'practice', 'set']
let string = ''
for (let i = 0; i < strings.length; i += 1) {
    string += strings[i]
    if (i !== strings.length - 1) {
        string += ' '
    }
}
console.log(string)
console.log(`\n`)
//#endregion

//#region Exercise 10
const strings1 = ['apple', 'banana', 'cherry']
let fruits = ''
for (let i = 0; i < strings1.length; i += 1) {
    fruits += strings1[i]
    if (i !== strings1.length - 1) {
        fruits += ','
    }
}
console.log(fruits)
console.log(`\n`)
//#endregion

//#region Exercise 11
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Honda', model: 'Accord', year: 2008 },
    { make: 'Tesla', model: 'Model 3', year: 2020 },
    { make: 'Ford', model: 'Fusion', year: 2009 }
]
const carsAfter2010 = []
for (let i = 0; i < cars.length; i += 1) {
    if (cars[i].year > 2010) {
        carsAfter2010.push(cars[i])
    }
}
console.log(carsAfter2010)
console.log(`\n`)
//#endregion

//#region Exercise 12
const temperatures = [0, 20, 37, 100]
const temperaturesInFahrenheit = []
for (let i = 0; i < temperatures.length; i += 1) {
    const fahrenheitTemp = (temperatures[i] * 9 / 5) + 32
    temperaturesInFahrenheit.push(fahrenheitTemp)
}
console.log(temperaturesInFahrenheit)
console.log('\n')
//#endregion

//#region Exercise 13
const scores = [10, 22, 25, 33, 40, 55]
const multipleOf5 = []
for (let i = 0; i < scores.length; i += 1) {
    if (scores[i] % 5 === 0) {
        multipleOf5.push(scores[i])
    }
}
console.log(multipleOf5)
console.log('\n')
//#endregion

//#region Exercise 14
const events = [
    { title: 'Concert', date: '2022-08-10', location: 'New York' },
    { title: 'Art Exhibition', date: '2022-09-12', location: 'Los Angeles' },
    { title: 'Tech Conference', date: '2022-10-05', location: 'New York' }
]
const eventsTitleofNY = []
for (let i = 0; i < events.length; i += 1) {
    if (events[i].location === 'New York') {
        eventsTitleofNY.push(events[i].title)
    }
}
console.log(eventsTitleofNY)
console.log('\n')
//#endregion

//#region Exercise 15
const ages1 = [20, 25, 30, 35];
const updatedAges = []
for (let i = 0; i < ages1.length; i += 1) {
    updatedAges.push(ages1[i] + 10)
}
console.log(updatedAges)
//#endregion