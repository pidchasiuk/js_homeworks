class Services{
    constructor(servicesObj){
        this.servicesObj = servicesObj;
        this.priceValues = Object.values(this.servicesObj);
    }

    price(){
        let priceSum = 0;
        for(let i = 0; i < this.priceValues.length; i++){
            priceSum += Number.parseFloat(this.priceValues[i]);
        }
        return priceSum;
    }

    minPrice(){
        let min = Number.parseFloat(this.priceValues[0]);
        for(let i = 0; i < this.priceValues.length; i++){
            let temp = Number.parseFloat(this.priceValues[i]);
            if (min > temp){
                min = temp;
            }
        }
        return min;
    }

    maxPrice(){
        let max = Number.parseFloat(this.priceValues[0]);
        for(let i = 0; i < this.priceValues.length; i++){
            let temp = Number.parseFloat(this.priceValues[i]);
            if (max < temp){
                max = temp;
            }
        }
        return max;
    }
}

var services = {
    "haircut": "60 uah",
    "shaving": "80 uah",
    "hair wash": "100 uah"
    };

services["brake window"] = "200 uah";

let newServices = new Services(services);

console.log(`Total price: ${newServices.price()}`);
console.log(`Min service price: ${newServices.minPrice()}`);
console.log(`Max service price: ${newServices.maxPrice()}`)