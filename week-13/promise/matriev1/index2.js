const pizzaOrder = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, ['gombás pizza']);
})

console.log(pizzaOrder.then)

setTimeout(function(){ console.log("hali");; }, 3000);
