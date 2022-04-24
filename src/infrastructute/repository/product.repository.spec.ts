import { Sequelize } from "sequelize-typescript";
import Product from "../../domain/entity/product";
import ProductModel from "../db/sequelize/model/product.model";
import ProductRepository from "./product.reposytory";

describe("Product repository test", () => {
    
    let sequelize: Sequelize;

    beforeEach(async() => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async() => {
        await sequelize.close();
    });

    it("should create a product", async() => {
        const producrRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await producrRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });
        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100
        });

    });

    it("should update a product", async() => {
        const producrRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await producrRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });
        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100
        });

        product.changeName("Product 2");
        product.changePrice(200);

        await producrRepository.update(product);

        const productModel2 = await ProductModel.findOne({ where: { id: "1" } });
        expect(productModel2.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 2",
            price: 200
        });
    });

    it("should find a product", async() => {
        const producrRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await producrRepository.create(product);
        
        const productModel = await ProductModel.findOne({ where: { id: "1" } });
        const foundProduct = await producrRepository.find("1");

        expect(productModel.toJSON()).toStrictEqual({
            id:foundProduct.id,
            name: foundProduct.name,
            price: foundProduct.price
        });
    });

    it("should find all products", async() => {
        const producrRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await producrRepository.create(product);

        const product2 = new Product("2", "Product 2", 200);
        await producrRepository.create(product2);
        
        const foundProducts = await producrRepository.findAll();
        const products = [product, product2];

        expect(foundProducts).toEqual(products);

    });

});