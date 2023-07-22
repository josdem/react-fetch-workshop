import { getProducts } from "./products";

describe("getting products", () => {
    it("should get all products", () => {
        const expected = [
            { sku: 100, name: "Product 1" },
            { sku: 101, name: "Product 2" }
        ];
    
        const actual = getProducts();
        expect(actual).toEqual(expected);
    });
});