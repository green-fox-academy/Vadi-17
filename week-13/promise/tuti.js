const datas = [
    { firstName: "Jhon", lastName: "Doe", age: 31 },
    { firstName: "Jane", lastName: "Juge", age: 23 },
    { firstName: "Anna", lastName: "Marde", age: 42 },
]

function postDataCheck(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = datas.find(postdata => postdata.age === age);
            if (post) {
                resolve(post);
            } else {
                reject(Error("Data not nincs found"));
            }
        }, 2000);
    })
}
postDataCheck(3)
    .then(post => { console.log("Name", post.firstName, post.lastName); })
    //ez már undfined ide már nem jut adat
    .then(post => { console.log(post); })
    .catch(err => { console.error(err); })

console.log("itt megy tovább");