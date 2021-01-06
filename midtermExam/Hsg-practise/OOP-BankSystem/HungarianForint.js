import  Currency  from './Currency.js';
export default class HungarianForint extends Currency{
    constructor(value, code, centralBankName, ){
        super(value, code, centralBankName, );
        this.value = Math.abs(value);
        this.code = "HUF";
        this.centralBankName = "Hungarian National Bank";
    }
}