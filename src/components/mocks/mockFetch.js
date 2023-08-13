const response = [
    {
        sku: 100,
        name: 'Nike Air Max 2023',
        price: 210,
    },
    {
        sku: 101,
        name: 'Stan Smith',
        price: 110,
    },
];

export default async function mockFetch(url) {
    return {
        ok: true,
        status: 200,
        json: async () => response,
    };
}
