import React, { useContext, useReducer } from "react";

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  products: [
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
  ],
  cart: [
    {
      id: 1,
      desc: "Oculus VR",
      detail: "Reference 1204",
      price: 149,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-1.jpg",
      qty: 1,
    },
    {
      id: 2,
      desc: "Wall Clock",
      detail: "Reference 1004",
      price: 399,
      img: "http://pixelwibes.com/template/ebazar/html/dist/assets/images/product/product-2.jpg",
      qty: 1,
    },
  ],
  wish: [],
  total: 520,
};

const reducer = (state, action) => {
  const handleAlterCart = () => {
    const { desc, detail, id, img, price, qty } = state.cart.filter(
      (product) => product.id === action.payload
    )[0];

    console.log(desc, detail, id, img, price, qty);

    const index = state.cart.findIndex(
      (product) => product.id === action.payload
    );
    const products = [...state.cart];

    products.splice(index, 1, {
      desc,
      detail,
      id,
      img,
      price,
      qty: qty + 1,
    });
    console.log(products);
    return products;
  };

  const handleAddCart = () => {
    const { desc, detail, id, img, price } = state.products.filter(
      (product) => product.id === action.payload
    )[0];
    return { desc, detail, id, img, price, qty: 1 };
  };

  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      if (state.cart.some((product) => product.id === action.payload)) {
        return {
          ...state,
          cart: handleAlterCart(),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, handleAddCart()],
        };
      }

    default:
      break;
  }
  return state;
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        wish: state.wish,
        total: state.total,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
