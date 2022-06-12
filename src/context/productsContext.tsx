import Product from '@/types/Product';
import { createContext, useContext, useEffect, useState } from 'react';

const API_URL = 'https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e';
const CURRENT_YEAR = '2013';
const initialState: {
  products: Product[];
  getProductByISBN: (isbn: string) => Product | undefined;
} = {
  products: [],
  getProductByISBN: () => undefined,
};
const ProductsStateContext = createContext(initialState);

export const fetchProducts = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  // map for new products
  const tappedProducts =
    data?.map((product: Product) => ({
      ...product,
      isNew: product?.published?.$date.includes(CURRENT_YEAR) ?? false,
    })) ?? [];
  return tappedProducts;
};

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const state = {
    products,
    getProductByISBN: (isbn: string) =>
      products.find((product) => product.isbn === isbn),
  };

  return (
    <ProductsStateContext.Provider value={state}>
      {children}
    </ProductsStateContext.Provider>
  );
}

export function useProductsState() {
  const state = useContext(ProductsStateContext);

  if (state === undefined) {
    throw new Error('useProductsState must be used within a ProductsProvider');
  }

  return state;
}
