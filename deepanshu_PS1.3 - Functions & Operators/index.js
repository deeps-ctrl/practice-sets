//#region Exercise 1
const studentData = [
    { studentName: 'John', rollNo: 201, science: 88, history: 75, geography: 90 },
    { studentName: 'Alice', rollNo: 202, science: 92, history: 85, geography: 88 },
    { studentName: 'Bob', rollNo: 203, science: 78, history: 89, geography: 91 }
];

function generateReportCard(rollNo) {
    for (let i = 0; i < studentData.length; i += 1) {
        if (studentData[i].rollNo === rollNo) {
            console.log(`===== Report Card for ${studentData[i].studentName} =====`)
            console.log(`Roll No. : ${studentData[i].rollNo}`)
            console.log(`------`)
            console.log(`Marks:`)
            console.log(`------`)
            console.log(`science: ${studentData[i].science}`)
            console.log(`history: ${studentData[i].history}`)
            console.log(`geography: ${studentData[i].geography}`)
            console.log(`------ ------ ------`)
            break
        }
    }
}
generateReportCard(201)

//#endregion

//#region Exercise 2
function filterStudentsByScienceCutoff(cutOff) {
    return studentData.filter((student) => student.science >= cutOff)
}
console.log(filterStudentsByScienceCutoff(80))
//#endregion

//#region Exercise 3
function filterStudentsByAverageMarks(cutOff) {
    for (let i = 0; i < studentData.length; i += 1) {
        const averageMarks = (studentData[i].history + studentData[i].science + studentData[i].geography) / 3
        if (averageMarks >= cutOff) {
            console.log(`${studentData[i].studentName} has average marks ${averageMarks.toFixed(2)}`)
        }
    }
}
filterStudentsByAverageMarks(85)

//#endregion

//#region Exercise 4
function getStudentWithHighestAverageMarks() {
    let highestAverage = 0
    let topStudent = null
    for (let i = 0; i < studentData.length; i += 1) {
        const totalMarks = (studentData[i].geography + studentData[i].history + studentData[i].science) / 3
        if (totalMarks > highestAverage) {
            topStudent = studentData[i]
            highestAverage = totalMarks
        }
    }
    console.log(`${topStudent.studentName} has the highest average marks of ${highestAverage.toFixed(2)}`)
}
getStudentWithHighestAverageMarks()
//#endregion

//#region Exercise 5
function convertToMinutes(hours) {
    return hours * 60
}
const minutes = convertToMinutes(2)
console.log(`2 hours = ${minutes} minutes`)
//#endregion

//#region Exercise 6
function countOccurences(str, char) {
    let count = 0
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === char) {
            count += 1
        }
    }
    console.log(`Character '${char} repeats ${count} times`)
}
const str = 'hello world';
const char = 'o';
countOccurences(str, char)
//#endregion

//#region Exercise 7
let numbers = [1, 2, 3, 4, 5, 6];
function sumOfEvenNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i]
        }
    }
    console.log(`The sum of all even number is ${sum}`)
}
sumOfEvenNumbers(numbers)
//#endregion