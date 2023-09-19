import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useSingleProductQuery } from '@/redux/features/products/productApi';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  const { data: product, isLoading } = useSingleProductQuery(id);
  console.log(isLoading);
  console.log(product);

  const handleDelete = async () => {
    alert('Are you sure?');
  };

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[100%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[100%] space-y-3 p-[10rem]">
          <h1 className="text-3xl font-semibold">Title:{product?.title}</h1>
          <p className="text-xl">Author: {product?.author}</p>
          <p className="text-xl">Genre: {product?.genre}</p>
          <p className="text-xl">publicationdate: {product?.publicationdate}</p>

          <Link to={`/editproduct/${product?._id}`}>
            <Button className="me-2 bg-[#7e22ce]">Edit</Button>
          </Link>
          <Button className="bg-red-600" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
