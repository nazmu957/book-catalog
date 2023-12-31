import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { addToWishList } from '@/redux/features/wishList/wishSlice';


interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
    const dispatch = useAppDispatch();
    
    const handleAddWishList = (product: IProduct) => {
      dispatch(addToWishList(product));
      console.log(product)
      toast({
        description: 'Added On WishList',
      });
    };

  return (
    <div>
      <Link to={`/product-details/${product._id}`} className="w-full">
        <div className="rounded-2xl h-[480px] flex flex-col items-center justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
          
            <img
              className="h-[15rem] w-[70rem]"
              src={product?.image}
              alt="product"
            />
            <h1 className="text-xl font-semibold">{product?.name}</h1>
         
          <p className="text-lg">Title: {product?.title}</p>
          <p>Author {product?.author}</p>
          <p>Genre: {product?.genre}</p>
          <p>Publication Date: {product?.publicationdate}</p>
          <Button
            variant="default"
            className="bg-[#7e22ce]"
            onClick={() => handleAddWishList(product)}
          >
            Add Wish List
          </Button>
        </div>
      </Link>
      <div className="rounded-2xl h-[480px] flex flex-col items-center justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${product._id}`} className="w-full">
          <img
            className="h-[15rem] w-[70rem]"
            src={product?.image}
            alt="product"
          />
          <h1 className="text-xl font-semibold">{product?.name}</h1>
        </Link>
        <p className="text-lg">Title: {product?.title}</p>
        <p>Author {product?.author}</p>
        <p>Genre: {product?.genre}</p>
        <p>Publication Date: {product?.publicationdate}</p>
        <Button
          variant="default"
          className="bg-[#7e22ce]"
          onClick={() => handleAddWishList(product)}
        >
          Add Wish List
        </Button>
      </div>
    </div>
  );
}
