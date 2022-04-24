import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            const customer = new Customer("", "Tiago");
        })
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const customer = new Customer("1", "");
        })        
    });

    it("should change name", () => {
        // Arrange
        const customer = new Customer("123", "Tiago");
        //Act
        customer.changeName("João");
        // Assert
        expect(customer.name).toBe("João");
    });

    it("should activate customer", () => {
        const customer = new Customer("123", "Tiago");
        const address = new Address("Street 1", 123, "São Paulo", "12345-000");
        customer.address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });

    it("should throw Error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("123", "Tiago");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });    

    it("should deactivate customer", () => {
        const customer = new Customer("123", "Tiago");
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    });

    it("should add reward points", () => {
        const customer = new Customer("123", "Tiago");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);
        
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    });        

});