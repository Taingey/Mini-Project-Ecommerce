/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Suspense } from "react";
import LoadingComponent from "../loading";
import Link from "next/link";
import { ProductType } from "@/lib/definitions";
import CardComponent from "@/components/card/CardComponent";
import { AiFillControl } from "react-icons/ai";
import { Pagination } from "@mui/material";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
async function fetchProduct(): Promise<ProductType[]> {
  const productsResponse = await fetch(
    "https://store.istad.co/api/products/?page=1&page_size=10",
    {
      cache: "no-store"
    }
  );
  const productsData: { results: ProductType[] } =
    await productsResponse.json();
  return productsData.results;
}

export default function ProductCard(): JSX.Element {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page: number) => {
    const data = await fetchProduct(page);
    setProducts(data);
  };

  const fetchProduct = async (page: number): Promise<ProductType[]> => {
    const productsResponse = await fetch(
      `https://store.istad.co/api/products/?page=${page}&page_size=12`,
      {
        cache: "no-store"
      }
    );
    const productsData: { results: ProductType[] } =
      await productsResponse.json();
    return productsData.results;
  };

  const addToCarts = (product: ProductType): void => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
        price: product.price
      })
    );
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (): void => {
    setIsDropdownOpen(false);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="container mx-auto">
        <Suspense fallback={<LoadingComponent />}>
          <h1 className="text-4xl tracking-wider font-Staatliches font-bold my-6 dark:text-white">
            Product
          </h1>

          <div className="flex items-center justify-between font-Staatliches sms:justify-center gap-2 sms:flex-col">
            <div className="flex gap-3">
              <div className="relative inline-block text-left">
                <button
                  id="dropdown-button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black shadow-sm"
                  onClick={toggleDropdown}
                >
                  Theme
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-menu"
                  className={`origin-top-right absolute left-0 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 ${
                    isDropdownOpen ? "" : "hidden"
                  }`}
                  onClick={closeDropdown}
                >
                  <p
                    className="py-2 p-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-button"
                  >
                    <Link href="/about">
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        About
                      </div>
                    </Link>
                    <Link href="/services">
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Services
                      </div>
                    </Link>
                    <Link href="/contact">
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Contact
                      </div>
                    </Link>
                  </p>
                </div>
              </div>
              <button className="bg-black text-white px-5">All</button>
              <button className="bg-black text-white px-5">Sneakers</button>
              <button className="bg-black  text-white px-5">Sports</button>
              <button className="bg-black text-white px-5">Formal</button>
            </div>
            <button className="flex items-center justify-center gap-2 bg-black text-white px-5 py-[6px] sms:mt-2">
              filters
              <AiFillControl className="text-[16px]" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3 lg:grid-cols-3 mds:grid-cols-2 sms:grid-cols-1 mt-5">
            {products?.map((product) => (
              <div key={product.id}>
                <CardComponent
                  id={product.id}
                  image={product.image}
                  desc={product.desc}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  addToCarts={() => addToCarts(product)}
                  cartItems={cartItems}
                />
              </div>
            ))}
          </div>
          <Pagination
            count={50}
            page={currentPage}
            color="secondary"
            onChange={handlePageChange}
            className="text-white  dark:text-white flex items-center justify-center my-5"
          />
        </Suspense>
      </div>
      
    </div>
  );
}
