import { AppProvider } from '@/context/AppContext';
import { ProductsProvider } from '@/context/productsContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </AppProvider>
  );
}

export default MyApp;
