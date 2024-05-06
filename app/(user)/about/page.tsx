import Footer from "@/components/homepage/Footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CAMBO STORE | About Us",
  description: "We are providing the best service for you!"
};

export default function page() {
  return (
    <div className="">
      <div className="container mx-auto mt-[3rem] px-2 overflow-hidden">
        <div className="flex items-center justify-evenly lg:flex-col ">
          <div className="grid gap-3 font-Staatliches">
            <h1 className="text-6xl tracking-wider w-[80%]">
              The Market of Trends
            </h1>
            <p className="tracking-wider w-[80%] ">
              Our mission is to give access to the most coveted objects in the
              world in the most intelligent way possible. Buy and sell the
              sneakers, Streetwear, High Tech items, collectibles, trading cards
              and trendiest accessories.
            </p>
          </div>
          <div className="rotate-45 w-[100rem] lg:w-full -z-30">
            <img
              src="/sneaker_4.png"
              alt="Sneaker Banner"
              className="drop-shadow image_anime w-[100rem] lg:w-full"
            />
          </div>
        </div>
        <div className="flex items-start justify-center gap-3 mt-[3rem]">
          <div className="flex items-center justify-between font-Staatliches bg-black py-2 px-4 text-white gap-5">
            <h4>Verification</h4>
            <p>+ + + + +</p>
          </div>
          <div className="flex items-center justify-between font-Staatliches bg-black py-2 px-4 text-white gap-5">
            <h4>Buyers</h4>
            <p>+ + + + +</p>
          </div>
          <div className="flex items-center justify-between font-Staatliches bg-black py-2 px-4 text-white gap-5">
            <h4>Salespeople</h4>
            <p>+ + + + +</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[3rem] font-Staatliches my-[8rem] lg:grid-cols-2">
          <div className="flex items-center justify-center flex-col gap-4">
            <img src="/sneaker.svg" alt="sneaker" className="w-[5rem]" />
            <div className="flex flex-col text-center gap-5">
              <h2 className="tracking-wider text-xl">Verified by StockX</h2>
              <p className="tracking-wider line-clamp-2">
                Each item sold is subject to our own multi-step verification
                process, carried out by our team of&#39; verification experts.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <img src="/graph-down.svg" alt="graph-down" className="w-[5rem]" />
            <div className="flex flex-col text-center gap-5">
              <h2 className="tracking-wider text-xl">Price transparency</h2>
              <p className="tracking-wider line-clamp-2">
                Our real-time platform works like the - Stock Exchange allowing
                you to&#39; buy and sell the most coveted items at their fair
                price.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <img src="/globe.svg" alt="globe" className="w-[5rem]" />
            <div className="flex flex-col text-center gap-5">
              <h2 className="tracking-wider text-xl">Global access</h2>
              <p className="tracking-wider line-clamp-2">
                Whether&#39; it is pre-order, &#39;limited editions or&#39; out
                of stock items - our millions of customers from 200 countries
                allow you to easily secure these coveted and hard-to-find items.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <img src="/no-bs.svg" alt="no-bs" className="w-[5rem]" />
            <div className="flex flex-col text-center gap-5">
              <h2 className="tracking-wider text-xl">
                No unnecessary blah-bla
              </h2>
              <p className="tracking-wider line-clamp-2">
                No chargebacks, no photos, no far-fetched descriptions, and no
                connections to dishonest buyers or sellers. We take care of
                everything so that you can buy and sell with confidence.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <img src="/lock-1.svg" alt="secure" className="w-[5rem]" />
            <div className="flex flex-col text-center gap-5">
              <h2 className="tracking-wider text-xl">Secure</h2>
              <p className="tracking-wider line-clamp-2">
                Preserving the&#39; integrity of our platform means staying
                ahead of&#39;. Our security and anti-fraud systems, set up by
                our world-renowned partners, ensure the protection of your
                personal information 24 hours on 24, 7 Days out of 7.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <img
              src="/customer-service.svg"
              alt="customer service"
              className="w-[5rem]"
            />
            <div className="flex flex-col text-center gap-5">
              <h2 className="tracking-wider text-xl">At your serviceX</h2>
              <p className="tracking-wider line-clamp-2">
                Thanks to our The&#39; aide centre, and our global&#39; support
                team, you can be sure that we are always available to answer any
                questions regarding our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full text-white">
        <div className="container mx-auto px-6">
          <div className="font-Staatliches  py-[3rem]">
            <h1 className="font-Staatliches text-center text-5xl">FAQs</h1>
            <div className="grid gap-5 grid-cols-3 lg:grid-cols-2 mds:grid-cols-1 mt-10">
              <div className="grid gap-5 border-[1px] border-white p-5 transition-all duration-300 ease-in-out hover:bg-[white] hover:text-black">
                <h1 className="text-xl tracking-wider">
                  How CAMBO STORE works?
                </h1>
                <p className="tracking-wide text-[15px]">
                  CAMBO STORE operates as a marketplace where users can buy or
                  sell sneakers, collectibles, original clothing, accessories,
                  and more. Users can create an account, add a payment method,
                  and then proceed to browse and make purchases within the
                  marketplace. CAMBO STORE allows users to bid and buy items at
                  real-time prices reflecting current demand. Sellers can list
                  their items for sale and receive payments through the
                  Hyperwallet portal.
                </p>
                <button className="w-full bg-[black] text-[white] py-2">
                  Read more
                </button>
              </div>
              <div className="grid gap-5 border-[1px] border-white p-5 transition-all duration-300 ease-in-out hover:bg-[white] hover:text-black">
                <h1 className="text-xl tracking-wider">
                  How do offers work on CAMBO STORE?
                </h1>
                <p className="tracking-wide text-[15px]">
                  When you make an offer, you choose the price you want to pay
                  for your item. If you make the best offer for an item on the
                  site, it is up to the seller to decide if your offer interests
                  him. Buying now triggers the immediate purchase of the item
                  from the seller at the lowest price (if the current price of
                  an item and its size suits you, then, this is the easiest way
                  to hold the item and trigger the sale so that the item does
                  not escape you).
                </p>
                <button className="w-full bg-[black] text-[white] py-2">
                  Read more
                </button>
              </div>
              <div className="grid gap-5 border-[1px] border-white p-5 transition-all duration-300 ease-in-out hover:bg-[white] hover:text-black">
                <h1 className="text-xl tracking-wider">
                  What do GS and PS mean on CAMBO STORE?
                </h1>
                <p className="tracking-wide text-[15px]">
                  Some sneakers on the site have the abbreviated size type in
                  parentheses next to the name. If there is an abbreviation next
                  to the name, it means that the model does not match the
                  traditional height of men. For example, a 7Y in GS is not the
                  same as a 7 in men. In this system, &#34;PS&#34; means
                  &#34;Preschool&#34; (3-7 years) and &#34;GS&#34; for Grade
                  School (7-15 years). Other common abbreviations are « W » for
                  « Women » and « TD » for « Toddler ».
                </p>
                <button className="w-full bg-[black] text-[white] py-2">
                  Read more
                </button>
              </div>
              <div className="grid gap-5 border-[1px] border-white p-5 transition-all duration-300 ease-in-out hover:bg-[white] hover:text-black">
                <h1 className="text-xl tracking-wider">
                  What payment methods are accepted on CAMBO STORE?
                </h1>
                <p className="tracking-wide text-[15px]">
                  Buyers can pay with major credit cards, PayPal, Apple Pay,
                  Google Pay, Venmo, Alipay, Sofort or iDEAL.The credit cards we
                  accept are Visa, MasterCard, etc, American Express, JCB,
                  UnionPay and Discover. We accept debit cards and gift cards
                  bearing the logo of the major card brands.
                </p>
                <button className="w-full bg-[black] text-[white] py-2">
                  Read more
                </button>
              </div>
              <div className="grid gap-5 border-[1px] border-white p-5 transition-all duration-300 ease-in-out hover:bg-[white] hover:text-black">
                <h1 className="text-xl tracking-wider">
                  Can I cancel a purchase or sale on CAMBO STORE?
                </h1>
                <p className="tracking-wide text-[15px]">
                  Once a sale has taken place, your request or offer cannot be
                  cancelled or cancelled. This policy is in place to maintain
                  market integrity, as we must ensure that every supply and
                  demand is real, active and reliable.
                </p>
                <button className="w-full bg-[black] text-[white] py-2">
                  Read more
                </button>
              </div>
              <div className="grid gap-5 border-[1px] border-white p-5 transition-all duration-300 ease-in-out hover:bg-[white] hover:text-black">
                <h1 className="text-xl tracking-wider">
                  How do I contact CAMBO STORE customer service?
                </h1>
                <p className="tracking-wide text-[15px]">
                  While most of your questions can be answered on our
                  &#34;Help&#34; page, we have a team dedicated to helping you
                  with your recent purchase or sale. You can contact us on our
                  &#34;Contact Support&#34; page&#34;.
                </p>
                <button className="w-full bg-[black] text-[white] py-2">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
