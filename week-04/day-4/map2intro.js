'use strict';

let asszociativArry = [
    ["978-1-60309-452-8", "A Letter to Jo"],
    ["978-1-60309-459-7", "Lupus"],
    ["978-1-60309-444-3", "Red Panda and Moon Bear"],
    ["978-1-60309-461-0", "The Lab"]
];
for (let i = 0; i < asszociativArry.length; i++) {
    console.log(asszociativArry[i][1] + " (ISBN: " + asszociativArry[i][0] + ")");
}
for (let i = 0; i < asszociativArry.length; i++) {
    if (asszociativArry[i][0] === "978-1-60309-444-3") {
        asszociativArry.splice(i, 1)
    }
}
for (let i = 0; i < asszociativArry.length; i++) {
    if (asszociativArry[i][1] === "The Lab") {
        asszociativArry.splice(i, 1)
    }
}
asszociativArry.push(["978-1-60309-450-4", "They Called Us Enemy"],
    ["978-1-60309-453-5", "Why Did We Trust Him?"])

let marker = false;
for (let i = 0; i < asszociativArry.length; i++) {
    if (asszociativArry[i][0] == "478-0-61159-424-8") {
        marker = true;
    }
}
if (marker) {
    console.log("van érték társítva a 478-0-61159-424-8-as kulcshoz");
} else {
    console.log("Nincs érték társítva a 478-0-61159-424-8-as kulcshoz");
}
// Írasd ki a 978-1-60309-453-5- as kulcshoz tartozó értéket!

console.log()

console.log();
for (let i = 0; i < asszociativArry.length; i++) {
    console.log(asszociativArry[i][1] + " (ISBN: " + asszociativArry[i][0] + ")");
}
