import React from "react";
export default function NewCollection() {
  return (
    <div className="container mx-auto my-[5rem]">
      <div className="flex items-center justify-between font-Staatliches gap-4 lg:grid">
        <h1 className="text-3xl tracking-wider w-1/2 lg:w-full">
          New style for latest collections
        </h1>
        <p className="w-1/2  lg:w-full">
          discover out latest collection of clothing, shoes, and accessories
          that are perfect for any occasion. From casual wear to formal attire,
          we have everything you need to revamp your wardrobe and stay on trend.
        </p>
      </div>
      <div className="relative w-[100%] grid grid-rows-2 grid-flow-col gap-4 mt-5 lg:flex lg:flex-col">
        <div className="row-span-3 bg-[#2F304A] p-2 font-Staatliches w-[100%] h-auto overflow-hidden">
          <div>
            <div className="absolute rotate-90 top-0 p-3 text-xl text-center bg-white w-[5rem] rounded-e-full">
              <p>New</p>
            </div>
            <div className="text-center text-white">
              <h3 className="">Model: Nike432-402</h3>
            </div>
          </div>
          <div className="grid gap-4 relative top-6 right-10 float-end z-40 text-white">
            <div className=" grid text-5xl font-Staatliches">
              <h1>New</h1>
              <h1>Running</h1>
              <h1>Style</h1>
            </div>
            <p>now available</p>
            <button className="bg-black px-4 py-2 cursor-pointer z-50 w-max">
              Check now
            </button>
          </div>
          <div className="overflow-hidden relative top-[5rem] xll:w-[100%] ">
            <img
              src="/sneaker_1.png"
              alt=""
              className="drop-shadow w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-between col-span-2 bg-[#2F304A] font-Staatliches w-[100%] h-auto -z-30">
          <div className="absolute top-6 p-3 text-xl text-center bg-white w-[10rem] rounded-e-full z-50">
            <p>LIMITED OFFER</p>
          </div>
          <div className="font-Staatliches float-right text-white p-2">
            <div className="text-5xl">
              <h1>Sport</h1>
              <h1>Essentials</h1>
            </div>
            <p>Move and explore</p>
          </div>
          <div className="float-end top-[45%] -left-6 w-1/2 p-2 overflow-hidden">
            <img src="/sneaker_3.png" alt="" className=" w-[13rem]" />
          </div>
        </div>
        <div className="row-span-2 col-span-2 bg-[#FC5E3B] p-2 font-Staatliches w-[100%] h-full -z-30">
          <div className="grid gap-3 font-Staatliches float-right text-white">
            <div className="text-5xl">
              <h1>Get</h1>
              <h1>$15 off</h1>
            </div>
            <p className="w-[80%]">for all item in our store or website</p>
            <button className="bg-black px-4 py-2 cursor-pointer z-50 w-max">
              Check now
            </button>
          </div>
          <div className="top-[45%] -left-6 w-1/2 overflow-hidden sms:w-full">
            <img
              src="/sneaker_2.png"
              alt=""
              className="drop-shadow w-[20rem] sms:w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
