//#region Exercise 1
const numbers = [2, 5, 10, 6, 4]
numbers.sort((a, b) => a - b)
console.log(numbers)
console.log(`\n`)
//#endregion

//#region Exercise 2
const ages = [32, 21, 45, 29, 39]
ages.sort((a, b) => b - a)
console.log(ages)
console.log(`\n`)
//#endregion

//#region Exercise 3
const prices = [99, 150, 75, 120, 200]
prices.sort((a, b) => b - a)
console.log(prices)
console.log(`\n`)
//#endregion

//#region Exercise 4
const projects = [
    { name: 'Project A', duration: 12, status: 'completed' },
    { name: 'Project B', duration: 8, status: 'ongoing' },
    { name: 'Project C', duration: 10, status: 'ongoing' },
    { name: 'Project D', duration: 6, status: 'completed' }
]
const onGoingProjects = projects.filter((project) => project.status === 'ongoing').sort((a, b) => a.duration - b.duration)
console.log(onGoingProjects)
console.log(`\n`)
//#endregion


//#region Exercise 5
const completedProjects = projects.filter((project) => project.status === 'completed').sort((a, b) => a.duration - b.duration)
console.log(completedProjects)
console.log(`\n`)
//#endregion

//#region Exercise 6
projects.sort((a, b) => a.duration - b.duration)
console.log(projects)
console.log(`\n`)
//#endregion

//#region Exercise 7
const gadgets = [
    { name: 'iPhone', brand: 'Apple', quantity: 2 },
    { name: 'Galaxy S21', brand: 'Samsung', quantity: 5 },
    { name: 'iPad', brand: 'Apple', quantity: 3 },
    { name: 'Pixel 5', brand: 'Google', quantity: 1 }
];
const appleProducts = gadgets.filter(gadget => gadget.brand === 'Apple').sort((a, b) => a.quantity - b.quantity)
console.log(appleProducts)
console.log(`\n`)
//#endregion

//#region Exercise 8
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 600 },
    { name: 'Monitor', price: 300 },
    { name: 'Keyboard', price: 100 }
]
products.sort((a, b) => a.price - b.price)
console.log(products)
console.log(`\n`)
//#endregion

//#region Exercise 9
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Honda', model: 'Accord', year: 2008 },
    { make: 'Tesla', model: 'Model 3', year: 2020 },
    { make: 'Ford', model: 'Fusion', year: 2009 }
]
cars.sort((a, b) => a.year - b.year)
console.log(cars)
console.log(`\n`)
//#endregion

//#region Exercise 10
const athletes = [
    { name: 'John', score: 85 },
    { name: 'Mike', score: 92 },
    { name: 'Sara', score: 88 },
    { name: 'Linda', score: 95 }
]

const athletesScoresAbove90 = athletes.filter((athlete) => athlete.score > 90).sort((a, b) => a.score - b.score)
console.log(athletesScoresAbove90)
console.log(`\n`)
//#endregion

//#region Exercise 11
const students = [
    { name: 'Alex', grade: 'B', marks: 75 },
    { name: 'Bella', grade: 'A', marks: 90 },
    { name: 'Chris', grade: 'C', marks: 58 },
    { name: 'Diana', grade: 'A', marks: 80 }
]
const studentWithGradeA = students.filter((student) => student.grade === 'A').sort((a, b) => b.marks - a.marks)
console.log(studentWithGradeA)
console.log(`\n`)
//#endregion

//#region Exercise 12
const employees = [
    { name: 'Raman', department: 'Engineering', salary: 70000 },
    { name: 'Samiksha', department: 'Marketing', salary: 55000 },
    { name: 'Ronak', department: 'Engineering', salary: 80000 },
    { name: 'Siddharth', department: 'Sales', salary: 60000 }
]
const engineeringEmployees = employees.filter(employee => employee.department === 'Engineering').sort((a, b) => b.salary - a.salary)
console.log(engineeringEmployees)
console.log(`\n`)
//#endregion

//#region Exercise 13
const employees1 = [
    { name: 'Raman', department: 'Engineering', salary: 70000 },
    { name: 'Samiksha', department: 'Marketing', salary: 55000 },
    { name: 'Ronak', department: 'Engineering', salary: 50000 },
    { name: 'Kevin', department: 'Marketing', salary: 50000 },
    { name: 'Siddharth', department: 'Sales', salary: 60000 }
]
const marketingEmployees = employees1.filter(employee => employee.department === 'Marketing').sort((a, b) => a.salary - b.salary)
console.log(marketingEmployees)
console.log(`\n`)
//#endregion

//#region Exercise 14
const employees2 = [
    { name: 'Eve', department: 'Engineering', salary: 70000 },
    { name: 'Sam', department: 'Marketing', salary: 55000 },
    { name: 'John', department: 'Engineering', salary: 80000 },
    { name: 'Lucy', department: 'Sales', salary: 60000 }
]
const employeesSalaryGreaterThan60000 = employees2.filter(employee => employee.salary > 60000).sort((a, b) => b.salary - a.salary)
console.log(employeesSalaryGreaterThan60000)
console.log('\n')
//#endregion

//#region Exercise 15
const employees3 = [
    { name: 'Eve', department: 'Engineering', salary: 70000 },
    { name: 'Sam', department: 'Marketing', salary: 55000 },
    { name: 'John', department: 'Engineering', salary: 80000 },
    { name: 'Lucy', department: 'Sales', salary: 60000 }
]
const employeesSalaryLessThan70000 = employees3.filter(employee => employee.salary < 70000).sort((a, b) => a.salary - b.salary)
console.log(employeesSalaryLessThan70000)
console.log(`\n`)
//#endregion