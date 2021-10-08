import React from "react";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
import { useAppContext } from "../AppProvider";

const Cart = () => {
  const { cart } = useAppContext();
  const { qty } = useAppContext();
  const { dispatch } = useAppContext();
  const handleAddUnitToCart = (id) => {
    dispatch({
      type: "ADD_AN_UNIT_TO_CART",
      payload: id,
    });
    <Redirect to="/shoping_cart" />;
  };

  const handleSubstractUnitToCart = (id) => {
    dispatch({
      type: "SUBTRACT_AN_UNIT_TO_CART",
      payload: id,
    });
    <Redirect to="/shoping_cart" />;
  };

  return (
    <div>
      <Header />
      <div className="pt-10">
        <div className="container p-0 md:p-8 mx-auto mt-12">
          <div className="w-full overflow-x-auto">
            <div className="my-2">
              <h3 className="text-xl font-bold tracking-wider">
                Shopping Cart {cart.length} item
              </h3>
            </div>
            <table className="w-full shadow-inner">
              <thead>
                <tr className="bg-gray border-b border-second mb-1">
                  <th className="px-2 sm:px-2 py-3 font-bold whitespace-nowrap">
                    Image
                  </th>
                  <th className="px-2 sm:px-2 py-3 font-bold whitespace-nowrap">
                    Product
                  </th>
                  <th className="px-2 sm:px-2 py-3 font-bold whitespace-nowrap">
                    Qty
                  </th>
                  <th className="px-2 sm:px-2 py-3 font-bold whitespace-nowrap">
                    Price
                  </th>
                  <th className="px-2 sm:px-2 py-3 font-bold whitespace-nowrap">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map(
                  (product, i) =>
                    product?.img && (
                      <tr className="hover:bg-gray" key={product.id}>
                        <td>
                          <div className="flex justify-center">
                            <img
                              src={product.img}
                              className="object-cover h-28 w-28 rounded-2xl"
                              alt={product.id}
                            />
                          </div>
                        </td>
                        <td className="p-2 sm:p-4 px-2 text-center whitespace-nowrap">
                          <div className="flex flex-col items-center justify-center">
                            <h3>{product.desc}</h3>
                          </div>
                        </td>
                        <td className="p-4 px-2 text-center whitespace-nowrap">
                          <div>
                            <button
                              className="text-red"
                              onClick={() =>
                                handleSubstractUnitToCart(product.id)
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-flex w-6 h-6 text-red-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                            <label className="w-4 text-center mx-2">
                              {product.qty}
                            </label>
                            <button
                              className="text-green"
                              onClick={() => handleAddUnitToCart(product.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-flex w-6 h-6 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="p-4 px-2 text-center whitespace-nowrap">
                          ${product.price}
                        </td>
                        <td className="p-4 px-2 text-center whitespace-nowrap">
                          <button className="text-red">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>

            <div className="mt-4">
              <div className="py-4 rounded-md ">
                <h3 className="text-xl font-bold text-purple">Order Summary</h3>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Subotal Price:</span>
                  <span className="font-bold">$35.25</span>
                </div>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Shipping Cost (+):</span>
                  <span className="font-bold">$12</span>
                </div>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Discount (-):</span>
                  <span className="font-bold text-red-600">- $5.00</span>
                </div>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Sales Tax (18%):</span>
                  <span className="font-bold">$2.25</span>
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
                bg-gray
              "
                >
                  <span className="text-xl font-bold">Total Payable:</span>
                  <span className="text-2xl font-bold ">$37.50</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 justify-between sm:flex-row">
              <Link
                className="
                    w-full
                    sm:w-5/12
                    md:w-1/3
                    py-2
                    text-center text-white text-2xl
                    bg-dark_gray
                    rounded
                    hover:bg-second
                    mb-2
                  "
                to="/"
              >
                <button>Continue Shopping</button>
              </Link>
              <Link
                className="
                    w-full
                    sm:w-5/12
                    md:w-1/3
                    py-2
                    text-center text-white text-2xl
                    bg-purple
                    rounded
                    hover:bg-main
                    mb-2
                  "
                to="/checkout"
              >
                <button>Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
