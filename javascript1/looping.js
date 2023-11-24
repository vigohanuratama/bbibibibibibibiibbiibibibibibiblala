let number = 5, i = 0;

/* Loop */
// for(i; i < number; i++ ){
//     console.log(i)
// }

/* While */
// while (i < number) {
//     console.log("while",i)
//     i++
// }

/* Do While */
// do {
//     console.log("do-while", i)
//     i++
// } while(i < number)


// Print Segitiga

function printSegitiga(n) {
    for (let i = n; i >= 1; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j + ' ';
      }
      console.log(row);
    }
  }
  
  const tinggiSegitiga = 5;
  printSegitiga(tinggiSegitiga);