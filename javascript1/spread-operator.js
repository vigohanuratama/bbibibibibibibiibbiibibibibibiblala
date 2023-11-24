// Spread Operator

// Memasukan array ke dalam array lain
const nomorLama = [1, 2, 3, 4, 5 ]
const nomorBaru = [...nomorLama, 6, 7, 8]
console.log("memasukan array ke dalam array lain: ", nomorBaru)

// Gabung 2 array
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

const gabung2array = [...array1, ...array2]
console.log("Gabung: ", gabung2array)
