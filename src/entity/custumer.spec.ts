import Address from "./address";
import Custumer from "./custumer";

describe("Custumer unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            const custumer = new Custumer("", "Tiago");
        })
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const custumer = new Custumer("1", "");
        })        
    });

    it("should change name", () => {
        // Arrange
        const custumer = new Custumer("123", "Tiago");
        //Act
        custumer.changeName("João");
        // Assert
        expect(custumer.name).toBe("João");
    });

    it("should activate custumer", () => {
        const custumer = new Custumer("123", "Tiago");
        const address = new Address("Street 1", 123, "São Paulo", "12345-000");
        custumer.Address = address;
        custumer.activate();
        expect(custumer.isActive()).toBe(true);
    });

    it("should throw Error when address is undefined when you activate a custumer", () => {
        expect(() => {
            const custumer = new Custumer("123", "Tiago");
            custumer.activate();
        }).toThrowError("Address is mandatory to activate a custumer");
    });    

    it("should deactivate custumer", () => {
        const custumer = new Custumer("123", "Tiago");
        custumer.deactivate();
        expect(custumer.isActive()).toBe(false);
    });     

});