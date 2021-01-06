import HungarianForint from './HungarianForint.js';
import USADollar from './USADollar.js';
import BankAccount from './BankAccount.js';



export default class Bank {
    constructor() {
        this.bankAccounts = [];

    }
    createAccount(input) {
        this.bankAccounts.push(input);
    }
    // returns the sum of
    // the accounts' money (sum of Currency values regardless of the Currency type).
    getAllMoney(){
        let sum = 0
            this.bankAccounts.forEach(obi => sum += obi.currency.value);
            this.bankAccounts.forEach(obi => console.log(obi.currency.value));
            console.log("----");
        return sum
    }
}
