import { useRouter } from 'next/router';
import Page from '@/components/Page';
import { useProductsState } from '@/context/productsContext';
import Link from 'next/link';

const ProductDetail = () => {
  const router = useRouter();
  const { isbn } = router.query;
  const { getProductByISBN } = useProductsState();
  const product = getProductByISBN(isbn as string);

  return (
    <Page>
      <div className='m-5 flex justify-between'>
        <div className='breadcrumbs text-sm'>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <Link href={`/products/`}>
                <a>Products</a>
              </Link>
            </li>
            <li>
              <a>{isbn}</a>
            </li>
          </ul>
        </div>
        <span className='title'>{`${product?.title}`}</span>
      </div>
      <div className='flex w-full items-center justify-center'>
        {product ? (
          <div className='card m-20 bg-base-100 shadow-xl lg:card-side'>
            <figure>
              <img src={product.thumbnailUrl} alt={product.title} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                {product.title}
                {product.isNew && (
                  <div className='badge badge-secondary'>NEW</div>
                )}
              </h2>
              <div className='collapse'>
                <input type='checkbox' className='peer' />
                <div className='bg-primary collapse-title text-primary-content  peer-checked:text-secondary-content'>
                  {product.shortDescription}
                </div>
                <div className='bg-primary collapse-content text-primary-content  peer-checked:text-secondary-content'>
                  <p>{product.longDescription}</p>
                </div>
              </div>
              <div className='card-actions justify-between'>
                <div className='stats shadow'>
                  <div className='stat'>
                    <div className='stat-value'>{product.authors}</div>
                    <div className='stat-title'>{`ISBN: ${product.isbn}`}</div>
                    <div className='stat-desc'>{`Status: ${product.status} ${
                      product.status === 'PUBLISH'
                        ? new Date(product.published.$date).toLocaleString()
                        : ''
                    }`}</div>
                    <div className='stat-desc'>{`Categories: ${product.categories.join(
                      ', '
                    )}`}</div>
                    <div className='stat-desc'>{`Price: ${product.published.price}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Product not found</div>
        )}
      </div>
    </Page>
  );
};

export default ProductDetail;
