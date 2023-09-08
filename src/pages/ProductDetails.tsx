import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useSingleProductQuery } from '@/redux/features/products/productApi';
import { IProduct } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  const { data: product, isLoading, error} = useSingleProductQuery(id);

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[100%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[100%] space-y-3 p-[10rem]">
          <h1 className="text-3xl font-semibold">Title:{product?.title}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <p className="text-xl">Author: {product?.author}</p>
          <p className="text-xl">Genre: {product?.genre}</p>
          <p className="text-xl">publicationdate: {product?.publicationdate}</p>
         
          <ul className="space-y-1 text-lg">
            {product?.features?.map((feature : string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button className='me-2'>Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>
      
    </>
  );
}
