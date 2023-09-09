import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import Products from './Products';


export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(70vh-10px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-5xl font-black text-primary mb-2">
          "Unlock the World of Words <br /> Your Literary Journey Begins Here!"
          </h1>
          <p className="text-secondary font-semibold text-xl">
          "Unlock the World of Words Your Literary Journey Begins Here!"
          </p>
          
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative -right-14">
          <img className='w-[50rem]' src='https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=1380&t=st=1689684111~exp=1689684711~hmac=597e6025b535088f05877bcb9d25a13d7c255f5ae4c715f02ace6ef7696549f3' alt="" />
        </div>
      </div>
     
    <Products />
      <Footer />
    </>
  );
}
