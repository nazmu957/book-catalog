import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useGetCommentQuery, usePostCommentMutation } from '@/redux/api/apiSlice';
import { useAppSelector } from '@/redux/hook';


interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const { user } = useAppSelector((state) => state.user);

  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);

    const options = {
      id: id,
      data: { comment: inputValue },
    };

    postComment(options);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      {user.email && (
        <div className="max-w-7xl mx-auto mt-5">
          <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
            <Textarea
              className="min-h-[30px]"
              onChange={handleChange}
              value={inputValue}
            />
            <Button
              type="submit"
              className=" "
            >
             Submit
            </Button>
          </form>
          <div className="mt-10">
            {data?.comments?.map((comment: string, index: number) => (
              <div key={index} className="flex gap-3 items-center mb-5">
                <Avatar>
                  <AvatarImage src="https://i.ibb.co/h7Jk73W/user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>{comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {!user.email && <p>want to comment? Please login first</p>}
    </>
  );
}
