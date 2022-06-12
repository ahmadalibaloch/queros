import { render, screen, waitFor } from '@testing-library/react';

import Products from './Products';
import '@testing-library/jest-dom';
import { AppProvider, useAppState } from '@/context/AppContext';
import { ProductsProvider, useProductsState } from '@/context/productsContext';
const nock = require('nock');

const TEST_BOOK_TITLE = 'test book';
const testProducts = [
  {
    title: TEST_BOOK_TITLE,
  },
];
// @ts-expect-error
global.fetch = jest.fn(() => Promise.resolve({ json: () => testProducts }));

const renderComponent = () =>
  render(
    <ProductsProvider>
      <Products />
    </ProductsProvider>
  );
describe('Products', () => {
  it('renders products', async () => {
    renderComponent();

    await waitFor(async () => {
      expect(screen.getByText(TEST_BOOK_TITLE)).toBeInTheDocument();
    });
    const productDivs = screen.getAllByTestId('product-item');
    expect(productDivs).toHaveLength(1);
  });
});
