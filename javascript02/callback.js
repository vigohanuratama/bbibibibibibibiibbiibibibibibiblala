// Callback Function adalah function biasa, yang dikirimkan sebagai parameter ke function lain

const saySomething = (text, callback) => {
    let something = `HELLO ${text}`
    return callback(something)   
}

const showSomething = (text) => {
    return "SHOW SOMETHING: " +text 
}

console.log(saySomething("BABI", showSomething))