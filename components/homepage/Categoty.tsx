"use client";
import { useEffect, useState } from "react";
import { Badge, IconButton, Menu, Table, Tooltip } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { ProductType } from "@/lib/definitions";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addToCart,
  setProductsItem,
  removeFromCart,
  selectProducts
} from "@/redux/features/cart/cartSlice";

interface Props {
  categoryService: string;
}

const Category: React.FC<Props> = ({ categoryService }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const cartItemsFromStore = useSelector(selectProducts);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const totalPrice = cartItemsFromStore.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deleteItem = (id: number) => {
    console.log("Item deleted:", id);
    const remainingProducts = cartItemsFromStore.filter(item => item.id !== id);
    dispatch(setProductsItem(remainingProducts));
  };

  const handleAddToCart = (product: ProductType) => {
    const existingItemIndex = cartItemsFromStore.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItemsFromStore];
      const updatedItem = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity - 1
      };
      updatedCartItems[existingItemIndex] = updatedItem;
      dispatch(addToCart(updatedItem));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div className="flex cursor-pointer position-relative right-4">
        <Badge
          badgeContent={cartItemsFromStore.length}
          color="primary"
          className="position-relative text-xl"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <FaShoppingCart color="action" className="text-black dark:text-white"/>
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button"
          }}
        >
          {cartItemsFromStore.length ? (
            <div className="w-[26rem]">
              <div
                className="absolute w-max left-0 top-0 cursor-pointer p-[5px] text-white bg-black"
                onClick={handleClose}
              >
                <AiOutlineClose />
              </div>
              <Table className="font-Staatliches mt-3">
                <thead className="flex p-3 align-items-center justify-between mt-2 border-slate-300 border-b-2">
                  <th className="tracking-wider">Photo</th>
                  <th className="tracking-wider">Product Name</th>
                  <th className="tracking-wider">Quantity</th>
                  <th className="tracking-wider">Remove</th>
                </thead>
                <tbody className="">
                  {cartItemsFromStore.map((item) => (
                    <tr
                      key={item.id}
                      className="flex gap-1 w-full items-center justify-between mt-2 px-2"
                    >
                      <td className="w-full">
                        <Link href={`/product/${item.id}`} key={item.id}>
                          <img src={item.image} alt="" className="w-[5rem]" />
                        </Link>
                      </td>
                      <td className="flex flex-col gap-2 w-full">
                        <p>{item.name}</p>
                        <p>Price: ${item.price}</p>
                      </td>
                      <td className="w-full">
                        <div className="flex items-center justify-center">
                          <span onClick={() => handleRemoveFromCart(item.id)} className="p-[5px] cursor-pointer border border-r-0 w-7 h-full flex items-center justify-center">
                            -
                          </span>
                          
                          <span className="border p-[5px] border-gray-300 h-full text-center w-12 ">{item.quantity}</span>
                          <span  onClick={() => handleAddToCart(item)} className="p-[5px] cursor-pointer border border-gray-300 border-l-0 w-7 h-full flex items-center justify-center">
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => deleteItem(item.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                  <div className="mt-2 border-slate-300 border-t-2 px-2">
                    Total: ${totalPrice}
                  </div>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="w-[26rem]">
              <div
                className="absolute w-max left-0 top-0 cursor-pointer p-[5px] text-white bg-black"
                onClick={handleClose}
              >
                <AiOutlineClose />
              </div>
              <Link href="/ShoppingCart" className="w-full ">
                <div className="flex gap-3 px-2 align-items-center justify-center place-items-center">
                  <h1 className="font-Staatliches text-2xl tracking-wider">Your Carts is empty</h1>
                  <img src="/delivery-bike.png" alt="" width={100} />
                </div>
              </Link>
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Category;
