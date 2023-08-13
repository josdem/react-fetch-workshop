import React, { useState, useEffect } from 'react';

import { getProducts, currency } from '../products';

export default function ProductList() {
  const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        getProducts().then((products) => {
            setProductsList(products);
        });
    }, []);

    return (
        <div data-testid='product-list' className='grid grid-cols-4 gap-5'>
            {productsList.map((product) => (
                <div key={product.sku}>
                    <div className='flex'>{product.name}</div>
                    <div className='flex-end'>{currency.format(product.price)}</div>
                </div>
            ))}
        </div>
    );
}
