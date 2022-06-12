import { useState } from 'react';
import Image from 'next/image';

import Page from '@/components/Page';
import Search from '@/components/Search';

import Product from '@/types/Product';
import Link from 'next/link';

interface Props {
  products: Product[];
}

export default function Products({ products }: Props) {
  const [searchText, setSearchText] = useState('');
  const productsList = products.filter(
    (product) =>
      product?.title?.toLowerCase().includes(searchText.toLowerCase()) ||
      product?.shortDescription
        ?.toLowerCase()
        .includes(searchText.toLowerCase()) ||
      product?.isbn?.toLowerCase().includes(searchText.toLowerCase()) ||
      product?.categories?.some((cat) =>
        cat?.toLowerCase()?.includes(searchText.toLowerCase())
      )
  );

  const goToProductPage = (index: number) => {
    const product: Product = productsList[index];
  };
  return (
    <Page>
      <div className='m-5 flex justify-between'>
        <div className='breadcrumbs text-sm'>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
          </ul>
        </div>
        <Search value={searchText} onChange={setSearchText} />
      </div>
      <div className='grid grid-cols-3 gap-5 bg-transparent p-5'>
        {productsList.map((product, pIndex) => (
          <Link
            href={{
              pathname: `/products/${product.isbn}`,
              query: JSON.stringify(product),
            }}
            key={pIndex}
          >
            <div
              onClick={() => goToProductPage(pIndex)}
              className='card w-96 cursor-pointer bg-base-100 shadow-xl'
            >
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
          </Link>
        ))}
      </div>
    </Page>
  );
}
