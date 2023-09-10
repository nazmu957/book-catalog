import { Textarea } from '@/components/ui/textarea';
import { usePostProductMutation } from '@/redux/api/apiSlice';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { IProduct } from '@/types/globalTypes';
import ProductCard from '@/components/ProductCard';


interface IProps {
  id: string;
  
  
}

export default function AddBook({id }: IProps) {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [inputValue3, setInputValue3] = useState<string>('');
  const [inputValue4, setInputValue4] = useState<string>('');
  const [inputValue5, setInputValue5] = useState<string>('');

  const {data} = useGetProductsQuery(id);
  
  const books  = data?.data 
  console.log(books);
  const [postProduct, { isLoading, isError, isSuccess }] =
    usePostProductMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct = {
      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,
    };
    const option = {
      data: {
        title: inputValue1,
        author: inputValue2,
        genre: inputValue3,
        image: inputValue4,
        publicationdate: inputValue5,
      },
    };
    postProduct(option);
  };

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange1}
          value={inputValue1}
          placeholder="title"
        />
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange2}
          value={inputValue2}
          placeholder="author"
        />
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange3}
          value={inputValue3}
          placeholder="genre"
        />
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange4}
          value={inputValue4}
          placeholder="image link"
        />
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange5}
          value={inputValue5}
          placeholder="publication date"
        />
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </button>
      </form>

      <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
        <div className="col-span-12 grid grid-cols-3 gap-10 pb-20">
          {books?.map((product: IProduct) => (
            <ProductCard product={product} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
