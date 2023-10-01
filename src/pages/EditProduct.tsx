import { Textarea } from "@/components/ui/textarea";
import { useUpdateProductMutation } from "@/redux/api/apiSlice";
import {  useSingleProductQuery } from "@/redux/features/products/productApi";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";



export default function EditProduct() {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [inputValue3, setInputValue3] = useState<string>('');
  const [inputValue4, setInputValue4] = useState<string>('');
  const [inputValue5, setInputValue5] = useState<string>('');

     
     const { id } = useParams();

  const {
    data: product,
  } = useSingleProductQuery(id);
  console.log(product);

  const [updateProduct, { isLoading, isError, isSuccess }] =
    useUpdateProductMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  console.log(updateProduct)

  const handleChange1 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue2(event.target.value);
  };

  const handleChange3 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue3(event.target.value);
  };
  const handleChange4 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue4(event.target.value);
  };
  const handleChange5 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue5(event.target.value);
  };

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const option = {
  //     data: {
  //       title: inputValue1,
  //       author: inputValue2,
  //       genre: inputValue3,
  //       image: inputValue4,
  //       publicationdate: inputValue5,
  //     },
  //   };
  //   try {
  //     await updateProduct(option);
  //     toast({
  //       description: 'New book Added',
  //     });
  //   } catch (error) {
  //     toast({
  //       description: 'An error occurred',
  //     });
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div>
      <form className="flex flex-col gap-5" >
        <Textarea
          required
          className="min-h-[30px]"
          onChange={handleChange1}
          value={inputValue1}
          placeholder={product?.title}
        />
        <Textarea
          required
          className="min-h-[30px]"
          onChange={handleChange2}
          value={inputValue2}
          placeholder={product?.author}
        />
        <Textarea
          required
          className="min-h-[30px]"
          onChange={handleChange3}
          value={inputValue3}
          placeholder={product?.genre}
        />
        <Textarea
          required
          className="min-h-[30px]"
          onChange={handleChange4}
          value={inputValue4}
          placeholder={product?.image}
        />
        <Textarea
          required
          className="min-h-[30px]"
          onChange={handleChange5}
          value={inputValue5}
          placeholder={product?.publicationdate}
        />
        <button
          type="submit"
         className="btn bg-primary py-4 text-white font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

