import React from "react";
import { useAppContext } from "../AppProvider";
import Header from "../components/Header";

const Checkout = () => {
  const {
    subTotal,
    SHIPPING_COST,
    DISCOUNT,
    SALES_TAXES_PERCENT,
    salesTaxesValue,
    total,
  } = useAppContext();
  return (
    <div>
      <Header />
      <div className="pt-10 mx-10 pb-2 text-2xl font-bold border-b-2 border-gray">
        Checkout Details
      </div>
      <div className="flex justify-between m-10 flex-wrap lg:flex-nowrap">
        <div className="flex w-full lg:w-8/12  pb-2 p-2 border-2 border-gray flex-wrap">
          <h2 className="border-b-2 m-2 border-gray w-full font-bold">
            Your Personal Detaills
          </h2>
          <form className="flex w-full justify-between flex-wrap" action="">
            <div className="w-full flex flex-col sm:flex-row mr-4 sm:mr-0">
              <div className="flex w-full sm:w-6/12 m-2 flex-wrap">
                <label className="w-full ">First name</label>
                <input
                  className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex w-full sm:w-6/12 m-2 flex-wrap">
                <label className="w-full ">Last name</label>
                <input
                  className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row mr-4 sm:mr-0">
              <div className="flex w-full sm:w-6/12 m-2 flex-wrap">
                <label className="w-full ">Phone Number</label>
                <input
                  className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex w-full sm:w-6/12 m-2 flex-wrap">
                <label className="w-full ">Email Address</label>
                <input
                  className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row mr-4 sm:mr-0">
              <div className="flex w-full m-2 flex-wrap">
                <label className="w-full ">Shipping Address</label>
                <input
                  className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row mr-4 sm:mr-0">
              <div className="flex w-full sm:w-6/12 m-2 flex-wrap">
                <label className="w-full ">City</label>
                <input
                  className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex w-full sm:w-6/12 m-2 flex-wrap">
                <label className="w-full ">Post Code</label>
                <input
                  className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="w-full flex flex-row">
              <div className="flex w-full m-2 flex-wrap">
                <button
                  type="submit"
                  className="
                    w-full
                    py-2
                    text-center text-white text-2xl
                    bg-dark_gray
                    rounded
                    hover:bg-second
                    mb-2
                  "
                >
                  SAVE
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex w-full lg:w-4/12 lg:ml-5 border-2 border-gray flex-wrap">
          <h2 className="mx-4 font-bold">Pricing</h2>
          <div className="mt-4 w-full">
            <div className="py-4 rounded-lg ">
              <div className="flex justify-between px-4 my-8">
                <span className="font-bold">Subotal Price:</span>
                <span className="font-bold">${subTotal}</span>
              </div>
              <div className="flex justify-between px-4 my-8">
                <span className="font-bold text-orange">
                  Shipping Cost (+):
                </span>
                <span
                  className={
                    subTotal > 0
                      ? "font-bold text-orange"
                      : "font-bold text-orange line-through"
                  }
                >
                  ${SHIPPING_COST}
                </span>
              </div>
              <div className="flex justify-between px-4 my-8">
                <span className="font-bold text-olive">Discount (-):</span>
                <span
                  className={
                    subTotal > 0
                      ? "font-bold text-olive"
                      : "font-bold text-olive line-through"
                  }
                >
                  - ${DISCOUNT}
                </span>
              </div>
              <div className="flex justify-between px-4 my-8">
                <span className="font-bold">
                  Sales Tax ({SALES_TAXES_PERCENT}%):
                </span>
                <span className="font-bold">${salesTaxesValue}</span>
              </div>
              <div
                className="
                flex
                items-center
                justify-between
                px-4
                py-2
                mt-3
                border-t-2
                border-main
                bg-white
              "
              >
                <span className="text-xl font-bold">Total Payable:</span>
                <span className="text-2xl font-bold ">
                  ${subTotal > 0 ? total : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-4/12 lg:ml-5 border-2 border-gray flex-wrap">
          <h2 className="mx-4 font-bold">Debit/Credit Card</h2>
          <div className="mt-4 w-full">
            <form>
              <div className="w-full flex flex-col sm:flex-row mr-4 sm:mr-0">
                <div className="flex w-full m-2 flex-wrap">
                  <label className="w-full ">Enter Card Number</label>
                  <input
                    className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none mr-4 sm:mr-0"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="w-full flex flex-col  sm:flex-row mr-4 sm:mr-0">
                <div className="flex w-full m-2 flex-wrap ">
                  <label className="w-full ">Enter Card Name</label>
                  <input
                    className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none mr-4 sm:mr-0"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="w-full flex flex-col sm:flex-row mr-4 sm:mr-0">
                <div className="flex w-full sm:w-9/12 m-2 flex-wrap">
                  <label className="w-full ">Valid Date</label>
                  <input
                    className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none mr-4 sm:mr-0"
                    type="date"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex w-full sm:w-3/12 m-2 flex-wrap">
                  <label className="w-full ">CVV</label>
                  <input
                    className="w-full rounded border-gray border-2 hover:border-main focus:ring focus:ring-purple focus:outline-none mr-4 sm:mr-0"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="w-full flex flex-row">
                <div className="flex w-full  m-2 flex-wrap justify-end">
                  <button
                    type="submit"
                    className="
                    w-full
                    py-2
                    text-center text-white text-2xl
                    bg-purple
                    rounded
                    hover:bg-main
                    mb-2
                  "
                  >
                    PAY NOW
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
