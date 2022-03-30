export default class Address {
    
    _city: string = "";
    _zip: string = "";


    constructor(city: string, zip:string) {
        this._city = city;
        this._zip = zip;
    }
}