import OrderItem from "./order_item";
import Order from "./order";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            const order = new Order("", "123", []);
        }).toThrowError("ID is required");
    });

    it("should throw error when id is empty", () => {
        expect(() => {
            const order = new Order("1", "", []);
        }).toThrowError("CustumerId is required");
    });

    it("should throw error when id is empty", () => {
        expect(() => {
            const order = new Order("1", "123", []);
        }).toThrowError("Items are required");
    });       

    it("should calculate total", () => {
        const item1 = new OrderItem("1", "item 1", 10);
        const order1 = new Order("1", "123", [item1]);
        let total = order1.total();
        expect(total).toBe(10);
        const item2 = new OrderItem("2", "item 2", 15);
        const order2 = new Order("1", "123", [item1, item2]);
        total = order2.total();
        expect(total).toBe(25);
    });      

});