import  Currency  from './Currency.js';
export default class USADollar extends Currency{
    constructor(value, code, centralBankName, ){
        super(value, code, centralBankName, );
        this.value = Math.abs(value);
        this.code = "USD";
        this.centralBankName = "Federal Reserve System";
    }
}