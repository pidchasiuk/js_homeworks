function price(servicesObject){
    let priceSum = 0;
    let servicesPrices = Object.values(servicesObject);
    for(let i = 0; i < servicesPrices.length; i++){
        priceSum += Number.parseFloat(servicesPrices[i]);
    }
    return priceSum;
}

function minPrice(servicesObject){
    let servicesPrices = Object.values(servicesObject);
    let min = Number.parseFloat(servicesPrices[0]);
    for(let i = 0; i < servicesPrices.length; i++){
        let temp = Number.parseFloat(servicesPrices[i]);
        if (min > temp){
            min = temp;
        }
    }
    return min;
}

function maxPrice(servicesObject){
    let servicesPrices = Object.values(servicesObject);
    let max = Number.parseFloat(servicesPrices[0]);
    for(let i = 0; i < servicesPrices.length; i++){
        let temp = Number.parseFloat(servicesPrices[i]);
        if (max < temp){
            max = temp;
        }
    }
    return max;
}

var services = {
    "haircut": "60 uah",
    "shaving": "80 uah",
    "hair wash": "100 uah"
    };

services["brake window"] = "200 uah";

console.log(`Total price: ${price(services)}`);
console.log(`Min service price: ${minPrice(services)}`);
console.log(`Max service price: ${maxPrice(services)}`)