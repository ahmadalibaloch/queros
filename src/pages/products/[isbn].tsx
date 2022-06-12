import { useRouter } from 'next/router';
import Page from '@/components/Page';
import { useProductsState } from '@/context/productsContext';

const ProductDetail = () => {
  const router = useRouter();
  const { isbn } = router.query;
  const { getProductByISBN } = useProductsState();
  const product = getProductByISBN(isbn as string);

  return (
    <Page>
      {product ? (
        <div className='card w-96 cursor-pointer bg-base-100 shadow-xl'>
          {product.thumbnailUrl && (
            <figure>
              <img src={product.thumbnailUrl} alt={product.title} />
            </figure>
          )}
          <div className='card-body h-1/2 flex-col justify-between'>
            <h2 className='card-title'>
              {product.title}
              {product.isNew && (
                <div className='badge badge-secondary'>NEW</div>
              )}
            </h2>
            <p className='... truncate'>{product.shortDescription}</p>
            <div className='card-actions justify-end'>
              {product.categories.map((category, index) => (
                <div key={index} className='badge badge-outline'>
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </Page>
  );
};

export default ProductDetail;
