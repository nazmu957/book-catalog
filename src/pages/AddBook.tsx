import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';

interface IProps {
  id: string;
}

export default function AddBook() {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [inputValue3, setInputValue3] = useState<string>('');

  const handleChange1 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue2(event.target.value);
  };

  const handleChange3 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue3(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Textarea 1:', inputValue1);
    console.log('Textarea 2:', inputValue2);
    console.log('Textarea 3:', inputValue3);
  };

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange1}
          value={inputValue1}
        />
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange2}
          value={inputValue2}
        />
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange3}
          value={inputValue3}
        />
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </button>
      </form>
    </div>
  );
}
