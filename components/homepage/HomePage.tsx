import React from "react";
import CountUp from "react-countup";
import NewCollection from "./NewCollection";
import Footer from "./Footer";
import ProductCard from "@/app/(user)/product/page";
import VisaCard from "./VisaCard";

export default function HomePage() {
  return (
    <div className="bg-[white] dark:bg-[#043730]">
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between gap-5 pt-[4rem] lg:flex-col">
          <div className="font-Staatliches grid gap-4 dark:text-white">
            <h1 className=" text-6xl tracking-widest w-[80%] sms:w-full">
              Trendy shose to luxury{" "}
            </h1>
            <p className="w-[65%] tracking-wider sms:w-full ">
              finding your shoes has never been easier. Browse the best
              selection of famous fashion brands that suit your style and
              preferences
            </p>
            <div>
              <button className="bg-black px-6 py-2 text-center text-white">
                Shop Now
              </button>
            </div>
            <div className="flex gap-7 items-center mt-5">
              <div className="flex flex-col">
                <span className="text-3xl flex gap-2 font-Bebas_Neue">
                  <CountUp
                    start={0}
                    end={80}
                    duration={10}
                    className="color font-extrabold sms:text-[100%]"
                  />
                  <span className="relative right-2 font-bold">K</span>
                  <span className="relative right-2 text-orange-600 font-bold ">
                    +
                  </span>
                </span>
                <span className="uppercase font-semibold text-[12px] text-gray-400 tracking-widest">
                  Unique style
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl flex gap-2 font-Bebas_Neue">
                  <CountUp
                    start={0}
                    end={25}
                    duration={10}
                    className="color font-extrabold sms:text-[100%]"
                  />
                  <span className="relative right-2 font-bold">K</span>
                  <span className="relative right-2 text-orange-600 font-bold ">
                    +
                  </span>
                </span>
                <span className="uppercase font-semibold text-[12px] text-gray-400 tracking-widest">
                  Brand Trusted
                </span>
              </div>
            </div>
            <div className="grid gap-1 mt-5">
              <div className="relative">
                <div className="bg-blue-500 w-10 h-10 rounded-full"></div>
                <div className="bg-red-500 w-10 h-10 top-0 absolute left-5 rounded-full"></div>
              </div>
              <h2>Best shoes discount 30% off all shoes!</h2>
            </div>
          </div>
          <div className="relative w-[100%] flex items-center justify-center text-">
            <div className="bg-[#2F304A] font-Staatliches w-[100%] h-[35rem] rounded-ee-full dark:bg-[#05342d]">
              <div className="absolute top-6 p-3 text-xl text-center bg-[white] w-[10rem] rounded-e-full dark:bg-[#043730] dark:text-white">
                <p>LIMITED OFFER</p>
              </div>
              <div className="-rotate-90 absolute top-[50%] -left-9 text-white">
                <h3 className="">Model: Nike432-402</h3>
              </div>
            </div>
            <img
              src="/air.png"
              alt=""
              className="absolute w-[30rem] drop-shadow mt-5"
            />
          </div>
        </div>
        <NewCollection />
        <ProductCard />
        <VisaCard/>
        <Footer />
      </div>
    </div>
  );
}
