import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { searchProduct } from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { IProduct } from '@/types/globalTypes';
import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [inputValue, setInputValue] = useState('');
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  const { toast } = useToast();

  const { title } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
    const search = e.target.value;
    // console.log(search);
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
        <div>
          <input
            type="text"
            placeholder="Enter a value"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="col-span-12 grid grid-cols-3 gap-10 pb-20">
          {productsData?.map((product: IProduct) => (
            <ProductCard  product={product} />
          ))}
        </div>
        <Link to="/addbook">
          <button className="btn bg-red-400 rounded">Add New Product</button>
        </Link>
      </div>
    </>
  );
}
