
import { useAppSelector } from "@/redux/hook";


export default function WishList () {

     const { products } = useAppSelector((state) => state.wish);
        console.log(products)
 

  return (
    
        <div className="space-y-5">
          {products.map((product) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product.name}
            >
              <div className="border-r pr-5 shrink-0">
                <img src={product?.image} alt="" className="h-full" />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{product?.name}</h1>
                <p>Quantity: {product.quantity}</p>
                
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
               
              </div>
            </div>
          ))}
        </div>
      
   
  );
}

