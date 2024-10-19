//#region Exercise 1
const students = [
    { id: 1, name: 'John', grade: 'B' },
    { id: 2, name: 'Emily', grade: 'C' },
    { id: 3, name: 'David', grade: 'A' }
]
function updateGrade(id, grade) {
    for (let i = 0; i < students.length; i += 1) {
        if (students[i].id === id) {
            students[i].grade = grade
        }
    }
    return students
}
console.log(updateGrade(2, 'A'))
console.log('\n')
//#endregion

//#region Exercise 2
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Monitor', price: 300 },
    { id: 3, name: 'Keyboard', price: 100 }
]
function deleteProductById(products, id) {
    return products.filter((product) => product.id !== id)
}
console.log(deleteProductById(products, 3))
console.log('\n')
//#endregion

//#region Exercise 3
const employees = [
    { id: 1, name: 'John', department: 'Engineering' },
    { id: 2, name: 'Eve', department: 'Sales' },
    { id: 3, name: 'Mark', department: 'Marketing' }
]
function updateDepartmentById(employees, id, department) {
    for (let i = 0; i < employees.length; i += 1) {
        if (employees[i].id === id) {
            employees[i].department = department
        }
    }
    return employees
}
console.log(updateDepartmentById(employees, 1, 'Human Resources'))
console.log('\n')
//#endregion

//#region Exercise 4
const books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
]
function deleteBookById(books, id) {
    return books.filter((book) => book.id !== id)
}
console.log(deleteBookById(books, 2))
console.log('\n')
//#endregion


//#region Exercise 5
const cars = [
    { id: 1, make: 'Toyota', year: 2015 },
    { id: 2, make: 'Honda', year: 2008 },
    { id: 3, make: 'Tesla', year: 2020 }
]
function updateYearOfCarById(cars, id, year) {
    for (let i = 0; i < cars.length; i += 1) {
        if (cars[i].id === id) {
            cars[i].year = year
        }
    }
    return cars
}
console.log(updateYearOfCarById(cars, 3, 2021))
console.log(`\n`)
//#endregion

//#region Exercise 6
let gadgets = [
    { id: 1, name: 'iPhone', brand: 'Apple' },
    { id: 2, name: 'Pixel', brand: 'Google' },
    { id: 3, name: 'Galaxy', brand: 'Samsung' }
]
function deleteGadgetsById(gadgets, id) {
    return gadgets.filter((gadget) => gadget.id === id)
}
console.log(deleteGadgetsById(gadgets, 1))
console.log('\n')
//#endregion

//#region Exercise 7
const projects = [
    { id: 1, name: 'Project Alpha', duration: 12 },
    { id: 2, name: 'Project Beta', duration: 10 },
    { id: 3, name: 'Project Gamma', duration: 8 }
]
function updateDurationOfProjectById(projects, id, duration) {
    for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].id === id) {
            projects[i].duration = duration
        }
    }
    return projects
}
console.log(updateDurationOfProjectById(projects, 1, 14))
console.log('\n')
//#endregion

//#region Exercise 8
const restaurants = [
    { id: 1, name: 'Pasta Palace', cuisine: 'Italian' },
    { id: 2, name: 'Dragon Wok', cuisine: 'Chinese' },
    { id: 3, name: 'Burger Barn', cuisine: 'American' }
]
function deleteRestaurantById(restaurants, id) {
    return restaurants.filter(restaurant => restaurant.id !== id)
}
console.log(deleteRestaurantById(restaurants, 2))
console.log(`\n`)
//#endregion

//#region Exercise 9
const athletes = [
    { id: 1, name: 'John', score: 85 },
    { id: 2, name: 'Mike', score: 92 },
    { id: 3, name: 'Sara', score: 88 }
]
function updatetheScoresOfAthlete(athletes, id, score) {
    for (let i = 0; i < athletes.length; i += 1) {
        if (athletes[i].id === id) {
            athletes[i].score = score
        }
    }
    return athletes
}
console.log(updatetheScoresOfAthlete(athletes, 2, 95))
console.log('\n')
//#endregion


//#region Exercise 10
const movies = [
    { id: 1, title: 'Inception', rating: 8.8 },
    { id: 2, title: 'Titanic', rating: 7.8 },
    { id: 3, title: 'The Room', rating: 3.7 }
]
function deleteMoviesById(movies, id) {
    return movies.filter((movie) => movie.id !== id)
}
console.log(deleteMoviesById(movies, 3))
console.log('\n')
//#endregion


//#region Exercise 11
const cities = [
    { id: 1, name: 'Los Angeles', population: 4000000 },
    { id: 2, name: 'New York', population: 8175133 },
    { id: 3, name: 'Chicago', population: 2695598 }
]
function updateThePopulationById(cities, id, population) {
    for (let i = 0; i < cities.length; i += 1) {
        if (cities[i].id === id) {
            cities[i].population = population
        }
    }
    return cities
}
console.log(updateThePopulationById(cities, 3, 8500000))
console.log('\n')
//#endregion

//#region Exercise 12
let courses = [
    { id: 1, title: 'Mathematics', duration: '3 months' },
    { id: 2, title: 'Physics', duration: '4 months' },
    { id: 3, title: 'Chemistry', duration: '5 months' }
]
function deleteCourse(courses, id) {
    return courses.filter(course => course.id !== id)
}
console.log(deleteCourse(courses, 1))
console.log('\n')
//#endregion

//#region Exercise 13
const pets = [
    { id: 1, name: 'Whiskers', type: 'Cat' },
    { id: 2, name: 'Rover', type: 'Fish' },
    { id: 3, name: 'Bella', type: 'Dog' }
]
function updatePetsById(pets, id, type) {
    for (let i = 0; i < pets.length; i += 1) {
        if (pets[i].id === id) {
            pets[i].type = type
        }
    }
    return pets
}
console.log(updatePetsById(pets, 2, 'Dog'))
console.log('\n')
//#endregion

//#region Exercise 14
const computers = [
    { id: 1, brand: 'Apple', model: 'MacBook Pro' },
    { id: 2, brand: 'Dell', model: 'XPS 13' },
    { id: 3, brand: 'HP', model: 'Spectre x360' }
]
function deleteComputerById(computers, id) {
    return computers.filter(computer => computer.id === id)
}
console.log(deleteComputerById(computers, 3))
console.log('\n')
//#endregion

//#region Exercise 15
const appliances = [
    { id: 1, name: 'Microwave', wattage: 1000 },
    { id: 2, name: 'Toaster', wattage: 800 },
    { id: 3, name: 'Blender', wattage: 500 }
]
function updateTheWattageById(appliances, id, wattage){
    for(let i = 0; i < appliances.length; i += 1){
        if(appliances[i].id === id){
            appliances[i].wattage = wattage
        }
    }
    return appliances
}
console.log(updateTheWattageById(appliances,1,1200))
console.log('\n')
//#endregion