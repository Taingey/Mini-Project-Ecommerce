"use client";
import Footer from "@/components/homepage/Footer";
import { ACCESS_TOKEN } from "@/lib/constants";
import { useCreateProductMutation } from "@/redux/features/service/ecommerce";
import Link from "next/link";
import { useState } from "react";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    product_image: null
  });

  const [createProduct, { isLoading, isError }] = useCreateProductMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, product_image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, price, quantity, product_image } = formData;

    try {
      const response = await createProduct({
        newProduct: {
          name,
          description,
          price,
          quantity,
          product_image
        },
        accessToken: ACCESS_TOKEN
      });

      console.log("Product created:", response.data);

      window.location.href = "/shop";
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="bg-white dark:bg-[#043730] py-4">
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md font-Staatliches py-4 dark:bg-[#05342d]">
        <form
          className="mb-4 text-black dark:text-[white]"
          onSubmit={handleSubmit}
        >
          <h2 className="font-semibold mb-4 text-3xl tracking-wider text-black dark:text-[white]">
            Create New Item
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block tracking-wider text-sm font-medium text-black dark:text-[white]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full bg-transparent border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block tracking-wider text-sm font-medium text-black dark:text-[white]"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full resize-none bg-transparent h-28 mt-1 block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block tracking-wider text-sm font-medium text-black dark:text-[white]"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full bg-transparent border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block tracking-wider text-sm font-medium text-black dark:text-[white]"
            >
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 block w-full bg-transparent border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="product_image"
              className="block tracking-wider text-sm font-medium text-black dark:text-[white]"
            >
              Product Image
            </label>
            <input
              type="file"
              id="product_image"
              name="product_image"
              onChange={handleImageChange}
              className="mt-1 block w-full bg-transparent border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formData.product_image && (
              <img
                src={URL.createObjectURL(formData.product_image)}
                alt="Product"
                className="w-[5rem]"
              />
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black w-full text-white py-2 px-2"
          >
            {isLoading ? "Creating..." : "Create"}
          </button>
          <div className="my-1 border-b text-center">
            <div className="font-Staatliches leading-none px-2 inline-block text-sm text-black bg-white tracking-wider font-medium  transform translate-y-1/2 dark:text-white dark:bg-[#043730]">
              Can you back to Dashboard
            </div>
          </div>
        </form>

        <div>
          <Link href="/shop" className="text-center">
            <div className="bg-black text-white py-2 px-2">Back to Shop</div>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CreateProduct;
