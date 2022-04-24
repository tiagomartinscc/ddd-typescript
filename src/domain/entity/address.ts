export default class Address {
    
    _street: string;
    _number: number;
    _zip: string;
    _city: string;

    constructor(street: string, number: number, city: string, zip:string) {
        this._street = city;
        this._number = number;
        this._zip = zip;
        this._city = city;

        this.validate();
    }

    get street(): string {
        return this._street;
    }

    get number(): number {
        return this._number;
    }

    get zip(): string {
        return this._zip;
    }

    get city(): string {
        return this._city;
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is required");
        }

        if (this._number === 0) {
            throw new Error("Number should be more than zero");
        }

        if (this._zip.length === 0) {
            throw new Error("Zip is required");
        }
        
        if (this._city.length === 0) {
            throw new Error("City is required");
        }        
    }
}