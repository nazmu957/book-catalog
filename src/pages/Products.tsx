import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { IProduct } from '@/types/globalTypes';
import { Link } from 'react-router-dom';



export default function Products() {
  const {data, isLoading,error} = useGetProductsQuery(undefined);
  console.log(data);
  const { toast } = useToast();
  const dispatch = useAppDispatch();
 

 

  let productsData;

  if (status) {
    productsData = data?.data?.filter(
      (item: { status: boolean; price: number; }) => item.status === true && item.price 
    );
  } else {
    productsData = data?.data;
  }

  return (
    <>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
        <div className="col-span-12 grid grid-cols-3 gap-10 pb-20">
          {productsData?.map((product: IProduct) => (
            <ProductCard product={product} />
          ))}
        </div>
        <Link to="/addbook">
          
          <button className="btn bg-red-400 rounded">Add New Product</button>
        </Link>
      </div>
    </>
  );
}
