import { Button } from '@/components/ui/button';
import Footer from '@/layouts/Footer';
import Products from './Products';
import logo from '../assets/images/Bookshop.gif'

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(70vh-10px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="lg:text-5xl font-black text-primary mb-2 ">
            "Unlock the World of Words <br /> Your Literary Journey Begins
            Here!"
          </h1>
          <p className="text-secondary font-semibold text-xl">
            "Unlock the World of Words Your Literary Journey Begins Here!"
          </p>

          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative -right-14">
          <img className="w-[50rem]" src={logo} alt="" />
        </div>
      </div>

      <Products />
      <Footer />
    </>
  );
}
