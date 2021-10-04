import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      desc: "Oculus VR",
      detail: "Reference 1204",
      price: 149,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-1.jpg",
      stock: 5,
    },
    {
      id: 2,
      desc: "Wall Clock",
      detail: "Reference 1004",
      price: 399,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-2.jpg",
      stock: 0,
    },
    {
      id: 3,
      desc: "Note Diaries",
      detail: "Reference 1224",
      price: 49,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-3.jpg",
      stock: 8,
    },
    {
      id: 4,
      desc: "Flower Port",
      detail: "Reference 1414",
      price: 25,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-4.jpg",
      stock: 15,
    },
    {
      id: 5,
      desc: "School Bag",
      detail: "Reference 1000",
      price: 99,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-5.jpg",
      stock: 25,
    },
    {
      id: 6,
      desc: "Rado Watch",
      detail: "Reference 9204",
      price: 75,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-6.jpg",
      stock: 2,
    },
    {
      id: 7,
      desc: "Traveling Bag",
      detail: "Reference 1155",
      price: 119,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-7.jpg",
      stock: 52,
    },
  ];
  return (
    <div className="flex py-10 justify-between flex-wrap m-auto w-full m-0 p-0 sm:container p-0  ">
      {products.map((product, i) => (
        <div className="flex flex-col w-full m-0 p-0 sm:w-1/2  p-5 md:w-1/3 lg:w-1/4">
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
          <button
            className={
              product.stock > 0
                ? "bg-main rounded font-bold text-white"
                : "bg-main rounded font-bold text-white opacity-50 cursor-not-allowed"
            }
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
