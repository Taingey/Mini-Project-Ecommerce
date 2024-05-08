import { ProductType } from "@/lib/definitions";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CardComponent({
  id,
  name,
  image,
  price,
  desc,
  category
}: ProductType) {
  const dispatch = useAppDispatch();
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as ProductType[];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        image: image,
        price: price,
        desc: desc,
        category: category,
        quantity: 1
      })
    );
  };

  
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto px-5 font-Staatliches">
        <div className="relative w-full cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:shadow-md dark:bg-[#05342d]">
          <div className="absolute top-6 p-1 text-base text-center bg-white w-[5rem] rounded-e-full">
            <p>$ {price}</p>
          </div>
          <Link href={`/product/${id}`} passHref>
              <img
                src={image}
                alt="product"
                className="w-[50rem] h-[20rem] rounded-lg object-cover object-center"
              />
          </Link>

          <div className="">
            <div className="my-6 flex items-center justify-between px-4">
              <p className="tracking-wider text-black dark:text-white">{name}</p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="text-sm tracking-wider text-black dark:text-white line-clamp-1">
                {desc}
              </p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <button
                className="bg-black text-white px-3 py-2"
                onClick={handleAddToCart}
              >
                AddToCart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
