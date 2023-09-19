import ProductCard from '@/components/ProductCard';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { searchProduct } from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { IProduct } from '@/types/globalTypes';
import { SetStateAction, useState } from 'react';

export default function Products() {
  const [inputValue, setInputValue] = useState('');
  const { data, isLoading} = useGetProductsQuery(undefined);
  console.log(isLoading)
  

  const { title } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
    
    
  };

  
  const handleSubmit = () => {
    alert(`You submitted: ${inputValue}`);
    const man = `${inputValue}`
    console.log(man)
    dispatch(searchProduct(man));
  };

  let productsData;

  if (title) {
    productsData = data?.data?.filter(
      (item: { title: string }) => item.title === item.title
      
    );
  } else {
     productsData = data?.data;
  }

  // console.log(productsData);
  return (
    <>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
        <div className="flex
        ">
          <input
            type="text"
            placeholder="Search Book "
            value={inputValue}
            onChange={handleInputChange}
            className="mb-4 p-3 bg-red-100"
          />
          <button className='bg-red-300 p-3 mb-4' onClick={handleSubmit}>Search</button>
        </div>
        <div className="col-span-12 grid grid-cols-3 gap-10 pb-20">
          {productsData?.map((product: IProduct) => (
            <ProductCard product={product} />
          ))}
        </div>
        
      </div>
    </>
  );
}
