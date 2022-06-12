import Product from '@/types/Product';

const API_URL = 'https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e';
const CURRENT_YEAR = '2013';

export const getServerSideProps = async (context: any) => {
  const res = await fetch(API_URL);
  const data = await res.json();

  // map for new products
  const tappedProducts =
    data?.map((product: Product) => ({
      ...product,
      isNew: product?.published?.$date.includes(CURRENT_YEAR) ?? false,
    })) ?? [];
  // Pass data to the page via props
  return {
    props: { products: tappedProducts }, // will be passed to the page component as props
  };
};
