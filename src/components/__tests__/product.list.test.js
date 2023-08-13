import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';
import mockFetch from '../mocks/mockFetch';

beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
});

test('reders product list', async () => {
    render(<ProductList />);
    const productList = screen.getByTestId('product-list');
    expect(productList).toBeInTheDocument();
    expect(await screen.findByText('Nike Air Max 2023')).toBeInTheDocument();
    expect(await screen.findByText('Stan Smith')).toBeInTheDocument();
});

afterEach(() => {
    jest.restoreAllMocks();
});
