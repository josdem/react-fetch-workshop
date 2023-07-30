import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';

test('reders product list', () => {
    render(<ProductList />);
    const productList = screen.getByTestId('product-list');
    expect(productList).toBeInTheDocument();
});
