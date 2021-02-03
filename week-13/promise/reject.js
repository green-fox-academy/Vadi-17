
function testReject(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (age === 0) {
                resolve("siker");
            } else {
                reject(Error("Data not nincs found"));
            }
        }, 1000);
    })
}
testReject(2)

    .then(post => { console.log(post); })
    .catch(err => { console.error(err); })

console.log("itt megy tovább");