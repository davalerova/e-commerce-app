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
  cart: [],
  wish: [],
  SHIPPING_COST: 12,
  subTotal: 0,
  DISCOUNT: 5,
  SALES_TAXES_PERCENT: 18,
  salesTaxesValue: 0,
  total: 0,
};

const reducer = (state, action) => {
  const handleAlterCart = ({ add }) => {
    const { desc, detail, id, img, price, qty } = state.cart.filter(
      (product) => product.id === action.payload
    )[0];

    console.log(desc, detail, id, img, price, qty);

    const index = state.cart.findIndex(
      (product) => product.id === action.payload
    );
    const products = [...state.cart];

    add
      ? products.splice(index, 1, {
          desc,
          detail,
          id,
          img,
          price,
          qty: qty + 1,
        })
      : products.splice(index, 1, {
          desc,
          detail,
          id,
          img,
          price,
          qty: qty - 1,
        });

    console.log(products);
    return products;
  };
  const handleAlterProducts = ({ add }) => {
    const { desc, detail, id, img, price, stock } = state.products.filter(
      (product) => product.id === action.payload
    )[0];

    console.log(desc, detail, id, img, price, stock);

    const index = state.products.findIndex(
      (product) => product.id === action.payload
    );
    const products = [...state.products];

    add
      ? products.splice(index, 1, {
          desc,
          detail,
          id,
          img,
          price,
          stock: stock + 1,
        })
      : products.splice(index, 1, {
          desc,
          detail,
          id,
          img,
          price,
          stock: stock - 1,
        });

    console.log(products);
    return products;
  };

  const handleCalculateSubTotal = () => {
    let subTotal = 0;
    if (state.cart.length > 0) {
      subTotal = state.cart.reduce((amount, product) => {
        return amount + product.price * product.qty;
      }, 0);
    }
    return subTotal;
  };

  const handleCalculateSalesTaxValue = () => {
    const salesTaxesValue = (state.subTotal * state.SALES_TAXES_PERCENT) / 100;
    return salesTaxesValue;
  };

  const handleAddCart = () => {
    const { desc, detail, id, img, price } = state.products.filter(
      (product) => product.id === action.payload
    )[0];
    return { desc, detail, id, img, price, qty: 1 };
  };

  const handleDeleteFromCart = () => {
    return state.cart.length > 1
      ? state.cart.filter((product) => product.id !== action.payload)
      : [];
  };

  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      if (state.cart.some((product) => product.id === action.payload)) {
        state = {
          ...state,
          cart: handleAlterCart({ add: true }),
        };
        state = { ...state, products: handleAlterProducts({ add: false }) };
      } else {
        state = {
          ...state,
          cart: [...state.cart, handleAddCart()],
        };
        state = { ...state, products: handleAlterProducts({ add: false }) };
      }
      state = {
        ...state,
        subTotal: handleCalculateSubTotal(),
      };
      state = {
        ...state,
        salesTaxesValue: handleCalculateSalesTaxValue(),
      };
      return state;

    case "ADD_AN_UNIT_TO_CART":
      state = {
        ...state,
        cart: handleAlterCart({ add: true }),
      };
      state = {
        ...state,
        subTotal: handleCalculateSubTotal(),
      };
      state = { ...state, products: handleAlterProducts({ add: false }) };
      state = {
        ...state,
        salesTaxesValue: handleCalculateSalesTaxValue(),
      };
      return state;

    case "SUBTRACT_AN_UNIT_TO_CART":
      state = {
        ...state,
        cart: handleAlterCart({ add: false }),
      };
      state = { ...state, products: handleAlterProducts({ add: true }) };

      state = {
        ...state,
        subTotal: handleCalculateSubTotal(),
      };
      state = {
        ...state,
        salesTaxesValue: handleCalculateSalesTaxValue(),
      };

      return state;

    case "ADD_AN_UNIT_TO_STOCK":
      return state;

    case "SUBTRACT_AN_UNIT_TO_STOCK":
      return state;

    case "REMOVE_FROM_CART":
      console.log("Deleting", action.payload);
      state = {
        ...state,
        cart: handleDeleteFromCart(),
      };
      state = {
        ...state,
        subTotal: handleCalculateSubTotal(),
      };
      state = {
        ...state,
        salesTaxesValue: handleCalculateSalesTaxValue(),
      };

      return state;

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
        SHIPPING_COST: state.SHIPPING_COST,
        subTotal: state.subTotal,
        DISCOUNT: state.DISCOUNT,
        SALES_TAXES_PERCENT: state.SALES_TAXES_PERCENT,
        salesTaxesValue: state.salesTaxesValue,
        total:
          state.subTotal +
          state.SHIPPING_COST -
          state.DISCOUNT +
          state.salesTaxesValue,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
