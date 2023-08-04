import getProducts from "./mocks/mockFetch";

describe("getting products", () => {
  it("should get all products", () => {
    const expected = [
      { sku: 100, name: "Nike Air Max 2023", price: 210 },
      { sku: 101, name: "Stan Smith", price: 110 },
    ];

    const actual = getProducts();
    expect(actual).toEqual(expected);
  });
});
