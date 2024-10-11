//#region Exercise 1
const projects = [
    { name: 'Project A', duration: 12, status: 'completed' },
    { name: 'Project B', duration: 8, status: 'ongoing' },
    { name: 'Project C', duration: 10, status: 'ongoing' },
    { name: 'Project D', duration: 6, status: 'completed' }
];

const ongoingProjectsName = projects.reduce((names, project) => project.status === 'ongoing' ? [...names, project.name] : names, [])
console.log(ongoingProjectsName)
console.log(`\n\n`)
//#endregion

//#region Exercise 2
const cities = [
    { name: 'New York', population: 8000000, country: 'USA' },
    { name: 'Toronto', population: 2800000, country: 'Canada' },
    { name: 'Los Angeles', population: 4000000, country: 'USA' },
    { name: 'London', population: 9000000, country: 'UK' }
];

const citiesOfUsa = cities.filter((city) => city.country === 'USA');
console.log(citiesOfUsa)
console.log(`\n\n`)

//#endregion

//#region Exercise 3
const songs = [
    { title: 'Song A', artist: 'Artist 1', duration: 4.5 },
    { title: 'Song B', artist: 'Artist 2', duration: 5.2 },
    { title: 'Song C', artist: 'Artist 3', duration: 3.8 },
    { title: 'Song D', artist: 'Artist 4', duration: 6.0 }
];

const songWithDurationOfMoreThan5Sec = songs.find((song) => song.duration > 5)
console.log(`Title : ${songWithDurationOfMoreThan5Sec.title}`);
console.log(`Artist : ${songWithDurationOfMoreThan5Sec.artist}`);
console.log(`Duration : ${songWithDurationOfMoreThan5Sec.duration}\n\n`);
//#endregion

//#region Exercise 4
const animals = [
    { species: 'Tiger', habitat: 'Forest', population: 3000 },
    { species: 'Elephant', habitat: 'Savannah', population: 5000 },
    { species: 'Panda', habitat: 'Bamboo Forest', population: 2000 },
    { species: 'Kangaroo', habitat: 'Grassland', population: 10000 }
];

function updateAnimalPopulation(animalName, updatedPopulation) {
    for (let i = 0; i < animals.length; i += 1) {
        if (animals[i].species === animalName) {
            animals[i].population = updatedPopulation
            console.log(`The updated population for ${animals[i].species} is ${animals[i].population}\n\n`)
            break
        }
    }
}
updateAnimalPopulation('Elephant', 5500)
//#endregion

//#region Exercise 5
const players = [
    { name: 'Player A', team: 'Team 1', goals_scored: 22 },
    { name: 'Player B', team: 'Team 2', goals_scored: 18 },
    { name: 'Player C', team: 'Team 1', goals_scored: 25 },
    { name: 'Player D', team: 'Team 3', goals_scored: 15 }
];
const playerNameWithMoreThan20Goals = players.reduce((playerNameArr, player) => player.goals_scored > 20 ? [...playerNameArr, player.name] : playerNameArr, [])
console.log(playerNameWithMoreThan20Goals)
console.log(`\n`)
//#endregion

//#region Exercise 6
const companies = [
    { name: 'Company A', industry: 'Tech', employees: 500 },
    { name: 'Company B', industry: 'Finance', employees: 300 },
    { name: 'Company C', industry: 'Tech', employees: 700 },
    { name: 'Company D', industry: 'Healthcare', employees: 400 }
];
const techCompanies = companies.filter((company) => company.industry === 'Tech')
console.log(techCompanies)
console.log(`\n`)
//#endregion

//#region Exercise 7
const books = [
    { title: 'Book A', author: 'Author 1', pages: 150 },
    { title: 'Book B', author: 'Author 2', pages: 320 },
    { title: 'Book C', author: 'Author 3', pages: 290 },
    { title: 'Book D', author: 'Author 4', pages: 400 }
];
books.sort((book1, book2) => book2.pages - book1.pages);
console.log(books)
console.log(`\n`)
//#endregion

//#region Exercise 8
const people = [
    { name: 'Person A', country: 'India', age: 35 },
    { name: 'Person B', country: 'USA', age: 28 },
    { name: 'Person C', country: 'India', age: 32 },
    { name: 'Person D', country: 'India', age: 24 }
];
const peopleNameOlderThan30 = people.reduce((name,people) => people.age > 30 ? [...name,people.name] : name,[])
console.log(peopleNameOlderThan30)

//#endregion