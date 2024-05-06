"use client";
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
        accessToken: "your_access_token" 
      });

      console.log("Product created:", response.data);

      window.location.href = "/shop";
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md font-Staatliches">
      <form className="mb-4" onSubmit={handleSubmit}>
        <h2 className="font-semibold mb-4 text-3xl tracking-wider">
          Create New Item
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block tracking-wider text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block tracking-wider text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full resize-none h-28 mt-1 block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block tracking-wider  text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block tracking-wider text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="product_image"
            className="block tracking-wider text-sm font-medium text-gray-700"
          >
            Product Image
          </label>
          <input
            type="file"
            id="product_image"
            name="product_image"
            onChange={handleImageChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
          className="bg-blue-500 hover:bg-blue-600 w-full tracking-wider text-white font-semibold py-2 px-4 rounded"
        >
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>

      <div>
        <Link href="/shop" className="text-center">
          <div className="bg-black text-white py-2 px-2">Back to Shop</div>
        </Link>
      </div>
    </div>
  );
};

export default CreateProduct;
