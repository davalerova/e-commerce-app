import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useAppContext } from "../AppProvider";

function Products() {
  const { products } = useAppContext();
  console.log(products);

  const { dispatch } = useAppContext();

  const handleAddProductToCart = (id) => {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: id,
    });
    <Redirect to="/shoping_cart" />;
  };
  return (
    <div className="flex py-10 justify-between flex-wrap m-auto w-full m-0 p-0 sm:container p-0  ">
      {products.map((product, i) => (
        <div
          key={product.id}
          className="flex flex-col w-full m-0 p-0 sm:w-1/2  p-5 md:w-1/3 lg:w-1/4"
        >
          <img
            className="text-center rounded-lg"
            src={product.img}
            alt={product.img}
          ></img>
          <h1 className="font-bold	">{product.desc}</h1>
          <h1 className="">{product.detail}</h1>
          <h1>Stock: {product.stock > 0 ? product.stock : "Out of Stock"}</h1>
          <h1 className="font-black text-xl text-second	mt-2">
            $ {product.price}
          </h1>
          <Link to={product.stock > 0 ? "/shop-cart" : "/"}>
            <button
              onClick={() =>
                product.stock > 0 && handleAddProductToCart(product.id)
              }
              className={
                product.stock > 0
                  ? "bg-main rounded font-bold text-white"
                  : "bg-main rounded font-bold text-white opacity-50 cursor-not-allowed"
              }
            >
              Add to cart
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
