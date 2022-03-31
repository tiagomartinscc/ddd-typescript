import Address from "./address";

export default class Custumer {
    
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name:string) {
        this._id = id;
        this._name = name;
        this.validate();
    }
    
    get name() : string {
        return this._name;
    }

    set Address(address: Address) {
        this._address = address;
    }

    isActive(): boolean {
        return this._active;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("ID is required");
        }

        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address == undefined) {
            throw new Error("Address is mandatory to activate a custumer");
        }
        this._active = true;
    }
    
    deactivate() {
        this._active = false;
    }
}