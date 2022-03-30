import OrderItem from "./ordem_item";

export default class Order {
    _id: string;
    // Agregado diferente usa o ID
    _custumerId: string;
    // Mesmo agregado, usa o objeto
    _items: OrderItem[];

    constructor(id: string, custumerId:string, items: OrderItem[]) {
        this._id = id;
        this._custumerId = custumerId;
        this._items = items;
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("ID is required");
        }

        if (this._custumerId.length === 0) {
            throw new Error("CustumerId is required");
        }

        if (this._items.length === 0) {
            throw new Error("Items is required");
        }

    }

}