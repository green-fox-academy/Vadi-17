export default class BankAccount {
    constructor(name, pinCode, currency) {
        this.name = name;
        this.pinCode = pinCode;
        this.currency = currency;
    }
    // checks if the given parameter is positive
    // then adds the parameter to the Currency's value field
    deposit(value) {
        if(value>0) this.currency.value +=value;
    }
    // It checks if the given pin is correct (equals with the original pin)
    // and the Currency's value is more than the amount parameter
    // If so, subtracts the amount from the Currency's value and returns with the amount.
    // Otherwise don't modify the Currency's value and return with 0.
    withdraw(pinCode, amount) {
        if(pinCode===this.pinCode && amount <= this.currency.value){
            this.currency.value -= amount;
            return amount;
        }else{
            return 0;
        }

    }
}