import FeaturedProducts from "@/components/Featured-Products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* Hero section desktop*/}
      <section className="px-40 py-20 hidden md:block">
      <div className="grid grid-cols-3 gap-6">
        <div className="w-full min-h-80 bg-[url('/images/hero/desktop/media-img1.png')] bg-no-repeat bg-cover font-bold p-6">
          <p className="text-[#2DC071] text-sm">
            5 items
          </p>
          <h2 className="text-[#252B42] text-[40px]">
            Furniture
          </h2>
          <Link href="#" className="hover:underline text-[#252B42] text-sm">
            Read More
          </Link>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 col-start-2 col-end-4 gap-6">
          <div className="col-start-1 col-end-3 min-h-80 bg-[url('/images/hero/desktop/media-img2.png')] bg-no-repeat bg-cover font-bold p-6">
          <p className="text-[#2DC071] text-sm">
            5 items
          </p>
          <h2 className="text-[#252B42] text-[40px]">
            Furniture
          </h2>
          <Link href="#" className="hover:underline text-[#252B42] text-sm">
            Read More
          </Link>
          </div>
          <div className="w-full min-h-80 bg-[url('/images/hero/desktop/media-img3.png')] bg-no-repeat bg-cover font-bold p-6">
          <p className="text-[#2DC071] text-sm">
            5 items
          </p>
          <h2 className="text-[#252B42] text-[40px]">
            Furniture
          </h2>
          <Link href="#" className="hover:underline text-[#252B42] text-sm">
            Read More
          </Link>
          </div>
          <div className=" min-h-80 bg-[url('/images/hero/desktop/media-img4.png')] bg-no-repeat bg-cover font-bold p-6">
          <p className="text-[#2DC071] text-sm">
            5 items
          </p>
          <h2 className="text-[#252B42] text-[40px]">
            Furniture
          </h2>
          <Link href="#" className="hover:underline text-[#252B42] text-sm">
            Read More
          </Link>
          </div>
        </div>
      </div>
      </section>

      {/* Hero section mobile*/}
      <section className="px-8 py-16 md:hidden">
      <div className="grid grid-cols-1 gap-6">
        <div className="w-full min-h-80 bg-[url('/images/hero/mobile/bg-cover1.png')] bg-no-repeat bg-cover font-bold p-6">
          <p className="text-[#2DC071] text-sm">
            5 items
          </p>
          <h2 className="text-[#252B42] text-[40px]">
            Furniture
          </h2>
          <Link href="#" className="hover:underline text-[#252B42] text-sm">
            Read More
          </Link>
        </div>
        <div className="w-full min-h-80 bg-[url('/images/hero/mobile/bg-cover2.png')] bg-no-repeat bg-cover font-bold p-6">
          <p className="text-[#2DC071] text-sm">
            5 items
          </p>
          <h2 className="text-[#252B42] text-[40px]">
            Furniture
          </h2>
          <Link href="#" className="hover:underline text-[#252B42] text-sm">
            Read More
          </Link>
        </div>
        <div className="w-full min-h-80 bg-[url('/images/hero/mobile/bg-cover3.png')] bg-no-repeat bg-cover font-bold p-6">
          <p className="text-[#2DC071] text-sm">
            5 items
          </p>
          <h2 className="text-[#252B42] text-[40px]">
            Furniture
          </h2>
          <Link href="#" className="hover:underline text-[#252B42] text-sm">
            Read More
          </Link>
        </div>
        <div className="w-full min-h-80 bg-[url('/images/hero/mobile/bg-cover4.png')] bg-no-repeat bg-cover font-bold p-6">
          <p className="text-[#2DC071] text-sm">
            5 items
          </p>
          <h2 className="text-[#252B42] text-[40px]">
            Furniture
          </h2>
          <Link href="#" className="hover:underline text-[#252B42] text-sm">
            Read More
          </Link>
        </div>
      </div>
      </section>

      {/* Featured products section */}
      <section className="p-8 md:px-24">
      <div className="font-bold">
          <h5 className="text-[#737373] text-[20px] text-center">
            Featured Products
          </h5>
          <h2 className="text-center text-[#252B42] text-2xl mt-3">
           THE BEST SERVICES
          </h2>
          <p className="text-center text-[#737373] text-sm mt-3">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div>
          <FeaturedProducts />
        </div>
        <div className="flex justify-center items-center">
           <Link href="/products" className="bg-white rounded-[5px] border-2 border-[#23A6F0] text-[#23A6F0] text-sm font-bold uppercase py-3.5 px-4 mt-10">
              Load More products
            </Link>
        </div>
      </section>

      <section className="py-16 px-8 md:px-40"> 
        <div className="font-bold">
          <h5 className="text-[#737373] text-[20px] text-center">
            Featured Products
          </h5>
          <h2 className="text-center text-[#252B42] text-2xl mt-3">
           THE BEST SERVICES
          </h2>
          <p className="text-center text-[#737373] text-sm mt-3">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between font-bold py-16">
          <div className="w-60 md:w-72 flex flex-col items-center">
            <img src="/icons/cool-icon-1153.svg" alt="cool-icon" />
            <h2 className="text-center text-[#252B42] text-2xl mt-4">
              Easy Wins
            </h2>
            <p className="text-center text-[#737373] text-sm mt-3">
               Get your best looking smile now!
            </p>
          </div>
          <div className="w-60 md:w-72 flex flex-col items-center">
            <img src="/icons/cool-icon-153.svg" alt="cool-icon" />
            <h2 className="text-center text-[#252B42] text-2xl mt-4">
              Concrete
            </h2>
            <p className="text-center text-[#737373] text-sm mt-3">
               Defalcate is most focused in helping you discover your most beautiful smile
            </p>
          </div>
          <div className="w-60 md:w-72 flex flex-col items-center">
            <img src="/icons/cool-icon-125.svg" alt="cool-icon" />
            <h2 className="text-center text-[#252B42] text-2xl mt-4">
              Hack Growth
            </h2>
            <p className="text-center text-[#737373] text-sm mt-3">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="pt-10 md:pt-16 pb-16 px-8 md:px-40">
        <div className="md:px-24 flex flex-col md:flex-row justify-between items-center gap-14">
         <div className="font-bold w-full md:w-2/5 flex flex-col gap-4 items-center">
           <h2 className="text-center text-[#252B42] text-2xl mb-8">
              What they say about us
            </h2>
            <div>
              <img src="/images/user.jpg" alt="user" />
            </div>
            <div>
              <img src="/images/stars.png" alt="stars" />
            </div>
            <p className="text-center text-[#737373] text-sm mt-3">
              Slate helps you see how many more days you need to work to 
              reach your financial goal.
            </p>
            <p className="text-center text-[#23A6F0] text-sm mt-5">
              Regina Miles
            </p>
            <p className="text-center text-[#252B42] text-sm">
              Designer
            </p>
         </div>
         <div>
          <img src="/images/grid-img.png" alt="grid-img" />
         </div>
        </div>
      </section>

      <section className="bg-[url('/images/bg-img.png')] bg-no-repeat bg-cover py-32 px-8 md:px-0">
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center  text-center w-full md:w-2/5">
            <p className="font-bold text-[#23A6F0]  text-sm">
              Designing Better Experience
            </p>
            <h1 className="text-[40px] font-bold text-[#252B42] mt-10">
              Problems trying to resolve the conflict between 
            </h1>
            <p className="text-base text-[#737373] mt-8">
               Problems trying to resolve the conflict between the two major realms of Classical physics: 
            </p>
            <h2 className="text-2xl text-[#23856D] font-bold mt-8">
              $16.48
            </h2>
            <button className="bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold uppercase py-3.5 px-4 mt-8">
              Add your call to action
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
