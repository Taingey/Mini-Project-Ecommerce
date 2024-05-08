/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";

export type ParamProps = {
  params: {
    id: number;
  };
};

async function getDetail(id: number) {
  const productDetail = await fetch(
    `https://store.istad.co/api/products/${id}`
  );
  return productDetail.json();
}

async function productDetail({ params }: ParamProps): Promise<JSX.Element> {
  const id = params.id;
  const productDetail = await getDetail(id);

  return (
    <div className="min-w-screen min-h-screen bg-[white] flex items-center p-5 lg:p-10 overflow-hidden relative dark:bg-[#043730] ">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto relative md:text-left dark:bg-[#05342d] ">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={productDetail.image}
                className="w-full relative z-10"
                alt=""
              />
              <div className="border-4 border-[#043730] w-full absolute top-10 bottom-10 left-10 right-10 z-0 dark:border-white"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10 font-Staatliches ">
            <div className="mb-10 text-black dark:text-[white]">
              <h1 className="font-bold uppercase text-2xl mb-5 tracking-widest">
                {productDetail.name}
                <br />
                {productDetail.category}
              </h1>
              <p className="text-sm line-clamp-3 tracking-wider">
                {productDetail.desc}
              </p>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline dark:text-white">$</span>
                {" "}
                <span className="font-bold text-5xl leading-none align-baseline dark:text-white tracking-wider">
                  {productDetail.price}
                </span>
              </div>
              <div className="inline-block align-bottom">
                <button className="bg-black text-white tracking-wider px-10 py-2 ">
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetail;
