/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
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
    <div>
      <div className="flex container mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex justify-center items-center lg:flex-row gap-8">
          <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <p className="flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600  dark:text-white">
              <Link href="/">Home</Link>
              <p>/</p>
            </p>
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">
              {productDetail.name}
            </h2>

            <div className="flex flex-row justify-between mt-5">
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg"
                alt="stars"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1dark.svg"
                alt="stars"
              />
              <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 dark:text-white duration-100 cursor-pointer">
                22 reviews
              </p>
            </div>

            <p className="w-full font-normal text-base leading-6 text-gray-600  mt-7">
              {productDetail.desc}
            </p>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">
              $ {productDetail.price}
            </p>

            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className="font-medium text-base leading-4 text-gray-600 ">
                  Select quantity
                </p>
                <div className="flex items-center justify-center">
                  <span
                   
                    className="p-[5px] cursor-pointer border border-r-0 w-7 h-full flex items-center justify-center"
                  >
                    -
                  </span>

                  <span className="border p-[5px] border-gray-300 h-full text-center w-12 ">
                    1
                  </span>
                  <span
                   
                    className="p-[5px] cursor-pointer border border-gray-300 border-l-0 w-7 h-full flex items-center justify-center"
                  >
                    +
                  </span>
                </div>
              </div>
              <hr className="bg-gray-200 w-full my-2" />
              <div className="flex flex-row justify-between items-center mt-4">
                <p className="font-medium text-base leading-4 text-gray-600 ">
                  Dimensions
                </p>
                <img
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform duration-100  dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg4.svg"
                  alt="dropdown"
                />
                <img
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform duration-100 hidden dark:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg4dark.svg"
                  alt="dropdown"
                />
              </div>
              <hr className="bg-gray-200 w-full mt-4" />
            </div>

            <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
              Add to shopping bag
            </button>
          </div>
          <div className="w-[100%] lg:w-8/12 flex justify-center items-center">
            <img
              src={productDetail.image}
              alt="Wooden Chair Preview"
              className="w-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetail;
