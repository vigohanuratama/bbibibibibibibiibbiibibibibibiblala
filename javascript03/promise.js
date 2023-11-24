const promise = new Promise((resolve, reject) => {
    const success = success;
    if (success) {
        resolve("BERHASIL");
    } else {
        reject(new Error("NOT SUCCESS"));
    }
});

promise
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

console.log(promise);