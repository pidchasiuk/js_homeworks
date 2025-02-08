const services = {
    servicesPrices: function(){
        let servicesPrices = [];
        for (let key in services){
            if (typeof services[key] === "string"){
                servicesPrices.push(Number.parseFloat(services[key]))
            }
        }
        return servicesPrices;
    },
    price: function(){
        let priceSum = 0;
        for(let i = 0; i < this.servicesPrices().length; i++){
            priceSum += this.servicesPrices()[i];
        }
        return priceSum;
    },
    minPrice: function(){
        let min = this.servicesPrices()[0];
        for(let i = 0; i < this.servicesPrices().length; i++){
            let temp = this.servicesPrices()[i];
            if (min > temp){
                min = temp;
            }
        }
        return min;
    },
    maxPrice: function(){
        let max = this.servicesPrices()[0];
        for(let i = 0; i < this.servicesPrices().length; i++){
            let temp = this.servicesPrices()[i];
            if (max < temp){
                max = temp;
            }
        }
        return max;
    },
    "haircut": "60 uah",
    "shaving": "80 uah",
    "hair wash": "100 uah",
};

services["brake window"] = "200 uah";

console.log(`Total price: ${services.price()}`);
console.log(`Min service price: ${services.minPrice()}`);
console.log(`Max service price: ${services.maxPrice()}`);