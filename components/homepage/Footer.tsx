import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaArrowUp,
  FaLinkedin
} from "react-icons/fa";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
const Footer = () => {
  return (
    <section className="pt-5 font-Staatliches tracking-wider bg-[white] dark:bg-[#043730]">
      <footer className="container mx-auto relative py-7 border-t-[1px] border-slate-300">
        <div className="flex items-start justify-between gap-5 sms:flex-col">
          <div className="grid gap-6">
            <div className="text-[black] font-Staatliches text-2xl tracking-wider dark:text-white">
              <span className="border-b-[5px] border-black dark:border-white">
                Cambo
              </span>{" "}
              <span className="border-t-[5px] border-black dark:border-white">
                Store
              </span>
            </div>
            <address className="grid gap-3">
              <div className="grid gap-3 text-slate-900 dark:text-white">
                <span className="flex gap-2 place-items-center">
                  <LuMapPin />
                  Street 335, Phnome Penh
                </span>
                <span className="flex gap-2 place-items-center">
                  <LuMail />
                  <a href="mailto:taingey2966@gmail.com">
                    taingey2966@gmail.com
                  </a>
                </span>
                <span className="flex gap-2 place-items-center">
                  <LuPhone />
                  <a href="tel:++855 93731414">+855 93731414</a>
                </span>
              </div>
              <span className="flex gap-3">
                <Link
                  href=""
                  className="bg-[white]  p-2 rounded-full shadow-md shadow-slate-200 hover:bg-black hover:text-slate-50 transition duration-300 ease-in-out dark:shadow-slate-800"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href=""
                  className="bg-[white] p-2 rounded-full shadow-md shadow-slate-200 hover:bg-black hover:text-slate-50 transition duration-300 ease-in-out dark:shadow-slate-800"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="https://github.com/Taingey"
                  target="_blank"
                  className="bg-[white] p-2 rounded-full shadow-md shadow-slate-200 hover:bg-black hover:text-slate-50 transition duration-300 ease-in-out dark:shadow-slate-800"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href=""
                  className="bg-[white] p-2 rounded-full shadow-md shadow-slate-200 hover:bg-black hover:text-slate-50 transition duration-300 ease-in-out dark:shadow-slate-800"
                >
                  <FaTelegramPlane />
                </Link>
              </span>
            </address>
          </div>
          <div className="grid gap-3 text-slate-900 dark:text-slate-50">
            <h3 className="font-semibold text-[1.5rem]">Links</h3>
            <span className="flex flex-col gap-3">
              <span>Home</span>
              <span>About</span>
              <span>Our Process</span>
              <span>Services</span>
            </span>
          </div>
          <div className="grid gap-3 text-slate-900 dark:text-slate-50">
            <h3 className="font-semibold text-[1.5rem]">Community</h3>
            <span className="flex flex-col gap-3">
              <span>Go Promium</span>
              <span>Team Plans</span>
              <span>Rafer a Friend</span>
              <span>Gift Cards</span>
            </span>
          </div>
          <div className="grid gap-3 text-slate-900 dark:text-slate-50">
            <h3 className="font-semibold text-[1.5rem]">Resources</h3>
            <span className="flex flex-col gap-3">
              <span>Support</span>
              <span>Lotost Updates</span>
              <span>Updates Nowslatter</span>
              <span>Flow Management</span>
            </span>
          </div>
        </div>
      </footer>
      <div className="container mx-auto border-solid border-y-[1px] border-slate-300 p-3 dark:border-slate-700/40">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-slate-900 dark:text-slate-50">
            Copyright © 2024 CAMBO STORE, Inc.
          </div>
          <Link href="" className="py-3 px-4 bg-black text-white">
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
