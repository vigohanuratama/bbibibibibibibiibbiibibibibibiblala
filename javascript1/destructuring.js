const student = {
    firstName: 'Figo',
    lastName: 'Hanuratama'
}

const dataFirstname = 'ini firstName ' + student.firstName
console.log(dataFirstname)

// destructuring 
const {firstName, lastName} = student

const dataFirstNameDest = 'ini firstName ' + firstName
console.log(dataFirstNameDest)