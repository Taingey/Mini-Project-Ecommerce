"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { MenuList } from "./menu";
import { FaUser } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { selectProducts } from "@/redux/features/cart/cartSlice";
import { ProductType } from "@/lib/definitions";
import { useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem as MuiMenuItem,
  Tooltip
} from "@mui/material";

import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Category from "../homepage/Categoty";
import { useAppDispatch } from "@/redux/hooks";
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
import DarkModeSwitch from "../homepage/DarkMode";

type MenuItem = {
  name: ReactNode;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector(selectProducts);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Initialize state with null
  const open = Boolean(anchorEl);
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://store.istad.co/api/products/");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const getMenuStyle = () => {
    if (
      typeof window !== "undefined" &&
      document.documentElement.clientWidth <= 2600
    ) {
      return { left: menuOpen ? "0" : "-200%" };
    } else {
      setMenuOpen(false);
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    const body = document.body;
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true");
      if (storedDarkMode === "true") {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const body = document.body;
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  };
  return (
    <div className=" w-full pt-2 pb-2 z-[1] bg-[white] dark:bg-[#05342d] ">
      <div className="container mx-auto w-full top-0 flex items-center justify-between">
        <div className="flex place-items-center gap-3">
          <IoMdMenu
            className="text-3xl text-slate-950 ml-3 cursor-pointer menu dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          <Link href="/" className="w-[150px] text-[black] font-Staatliches text-2xl tracking-wider dark:text-white">
            <span className="border-b-[5px] border-black dark:border-white">Cambo</span> {" "} <span className="border-t-[5px] border-black dark:border-white">Store</span>
          </Link>
        </div>
        <p
          className="navigation flex text-black lg:border-t-[1px] lg:border-cyan-950 z-50 bg-[white] dark:bg-[#05342d]"
          style={getMenuStyle()}
        >
          <div className="flex place-items-center justify-between">
            <IoMdClose
              className="text-2xl cursor-pointer text-slate-900 hidden lg:block dark:text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </div>
          <ul className="navbar w-full flex font-Staatliches tracking-wider items-center justify-center gap-6 dark:text-white">
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <div className={item.path === pathname ? "active" : ""}>
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </p>
        <label htmlFor="" className="sms:hidden">
          <input type="search" placeholder="Search..." className="bg-[white] dark:bg-[#043730] dark:text-white" />
        </label>
        <div className="flex place-items-center gap-7">
          <DarkModeSwitch
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <div className="relative text-xl">
            <Category cartItems={cartItems} />
          </div>
          <React.Fragment>
            {status === "loading" ? (
              <div
                aria-label="Loading..."
                role="status"
                className="flex items-center space-x-2"
              >
                <svg
                  className="h-10 w-10 animate-spin stroke-gray-500"
                  viewBox="0 0 256 256"
                >
                  <line
                    x1="128"
                    y1="32"
                    x2="128"
                    y2="64"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="60.1"
                    x2="173.3"
                    y2="82.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="224"
                    y1="128"
                    x2="192"
                    y2="128"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="195.9"
                    x2="173.3"
                    y2="173.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="128"
                    y1="224"
                    x2="128"
                    y2="192"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="195.9"
                    x2="82.7"
                    y2="173.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="32"
                    y1="128"
                    x2="64"
                    y2="128"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="60.1"
                    x2="82.7"
                    y2="82.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                </svg>
              </div>
            ) : session && session.user ? (
              <div>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <Tooltip title="">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Tooltip title={session.user.name}>
                        <Avatar
                          src={session.user.image}
                          alt={session.user.name}
                          style={{ width: "40px", borderRadius: "50%" }}
                        />
                      </Tooltip>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0
                      }
                    }
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MuiMenuItem
                    onClick={handleClose}
                    className="flex gap-3 items-center justify-center"
                  >
                    <img
                      src={session.user.image}
                      alt="User Avatar"
                      style={{ width: "40px", borderRadius: "50%" }}
                    />
                    <div>{session.user.name}</div>
                  </MuiMenuItem>
                  <Divider />
                  <MuiMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MuiMenuItem>
                  <MuiMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MuiMenuItem>
                  <MuiMenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MuiMenuItem>
                </Menu>
              </div>
            ) : (
              <Link href="/login" className="text-xl">
                <FaUser className="text-black dark:text-white"/>
              </Link>
            )}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}
