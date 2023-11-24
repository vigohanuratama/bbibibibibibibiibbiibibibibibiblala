const array = [
    {
    angka: 1
},
{
    angka: 5
},
{
    angka: 3
}];

// SORT
console.log("SORT")
console.log(array.sort((a,b) => a.angka - b.angka))

// FILTER
console.log("FILTER")
console.log(array.filter((el) => el.angka === 1))

// PUSH
console.log("PUSH")
array.push({
    angka: 6
})
console.log(array)

// foreach 
const number = [2, 3, 4, 5];

console.log("FOREACH")
number.forEach((number) => {
    console.log("FOREACH: " + number * 5);
});

// map
console.log("MAP")
console.log(number.map((number) => number * 5))
