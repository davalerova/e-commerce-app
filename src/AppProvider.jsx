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
      img: "https://lh3.googleusercontent.com/JqjoajgASxHgunTETWVRwhxrbTQzD5pmxoAuraXo1T6jPgylO1Qr0tUPwqi4xqF56c0mwZ4mz2gD_wEBuIf-V0daMG3i24zxALPE9BCO5azf6QHNTFCd0DYzwWYfldGwqJH9YhzDlbZS6nrUrnSgWqQ9xJioB0I8VTch_VsWChCbI5w7lAYrEfVBumfLNY2FTdaZN3tj0opSZC8OO9qRUUPTUDd-DQ8AtMzwfiw22LpMoxb-dWMgB48IdOE65flUQSV2kREaFIucufslaLNmWUWF4RtXs3MNvbYsa-fSVSJsYRaaFGjDPcMLoFwEMVLJRFL4ZaUpAzlyvC98d_t_pKMhz7qj_mYycuOYfbhlJAcKkH4-Z3-10U_O_3SdAa-UASB047S3xNGPwn_PxPYzx-WSedakJeB4DC3nDlh7_y0dPGAWRXN-_mTApAD_lrmOgoCmVmykjFyggjWI_BKXrDF4rol6iRbw1-CpX4AmS_VoBBPcR18LVTYIHTH6_znne6mdRUF6EnbD2K1N8KQatuVREJ6e1FMVkgfEBrx3VW8i-UBTM-HJbsrSTwBbdQZkR2qKa9dUS9MfLyCwQeiC0D6KpyLU7VPe1nqdCY59gC9CsvAGmBwiiL084MpFHo7AywgCMivKcsoFZBzA2rn_MfqgZkx9zUgL5sh1gGcVnmHti8WnyQ5xMOmXuH2UZGJ-sP_5Toc-kOPgKlqY1hCgyLi3_w=s450-no?authuser=0",
      stock: 5,
    },
    {
      id: 2,
      desc: "Wall Clock",
      detail: "Reference 1004",
      price: 399,
      img: "https://lh3.googleusercontent.com/TnLArABDMYYaXiKJquH_oIq63KOI0sJHw1bv0b71Xtk6eUwn-P8ZXde8gpD1c1KhfuRXge96fXNeslfYp_Vlxe5xbEhS7ybfiIUYiTvywEqTNkaWMaH4VDZNbEgnr84CMqEyQihUhV-CZQ0myg3S1BxQkt6ijUBx4L70HfzxBLtYtDX46RC_9z_LjRPVe5GenqbvCasnmrAjncVHCTDqsWURyXwpEjQ6Wov_9QmeDbF36nd7zdIw4XGvBVz27jy5gMmJoFhEvgZwG5XZfIArSyZkOYph3KQVOpLXJ5aqrFXfpGJ5tydLgFANwmXgVyzfghUmQATRau5uQKItEe2ek1XS8Ifa5YATS74A9WjAfChbxL7f7YnSwdylVFQ1Ox3-2PcxJ71r46IRE5mIpLfKydnQSEotzgP705GHHOUD_C3DbmDhH5YTkx59mZdIyF5-qowRV2IvaJMbFAJaIXF41aM6mh2nKezxPOy39xpt9-wm6Xli0JenukdptvBBG383HZtJIjj1YYe5gpsYVIsNRQTBVu5WbwA1fiXdVNsetV49S8YQQyBtkf15romr8Phhe1ouy8EChoLtIPSUqdCUQlIcg3L1ax6_SMfoq2DHB-FKi3UW-N7c9qQEGrPZ2Yb-lbxvWPWrZFhc-m8mJcgFSz5fORuHbfayGIOY6N5O3KoKS1BMHGseS1gM57He3-czqEIuivM0p1hWAGWJ5Q54aoCwOA=s450-no?authuser=0",
      stock: 1,
    },
    {
      id: 3,
      desc: "Note Diaries",
      detail: "Reference 1224",
      price: 49,
      img: "https://lh3.googleusercontent.com/BVGX2AWe7bnPxgcEWQ7bLsHd76cAsIvM_aCmOOmNyaZKH0yiLg7QoNvklPnlIT6SvrWhvdTEAEb339wDbxNJKtfN3szGy5gQHmKycmO_cOfKSWgdq3GT58OuzAsia6B-8sXLyGRjLE0sbm4BpLF7rwXDx50i7vpRpUz76YsEq9L2-bjvD04kk2nxRM3omnH9vhjxVyFa7eBxzYN82xlsEoNSixOL_J9qgw_pXqCq_IF024xOhdM11LtkMrPA8ZwDmIenRUHj1eZzcw0EIdl6CeeOENpUVn1z35j-Y-qKE3OMvrsMHZu1j-OvOAAkfc9rl8NWhMld0xEZSr0CGFe5_5U2pBvLeYrXNa0eF4B8oYTKXr3S8WeT7M4vly5YmlDnt3IRzK-qPW3CjcyyazrQosROvWGGxD6Zk2XrOgowxKVGkLrx7bm-SFdrXsuHcDGxQtOsoY6vXeQMTRs0dIa8NT2fk71-d_k6qrmqPE3OEr177DVrLVPQpFEeE7_QW3LI0czpiyNt6Lhij4nnaQ_o0rW0Kc9boY19edpC7T-o5_1Y08Cdu2wuoe4hggpgLTtswZvQ4MR96Qn5z0J82KnAYDfyrIDREB1fDebBcOdkP2DEuEJeLYYBz-ecqXN8RbzDPhzKWoFD5cD_EMYw0ZTrq0UM1FkgCLZyzJM-LtkpyCGm-QDiECFuVLH1SLPyfg-Lm9kYjs1Ym-OlsbIxMS75XfQleg=s450-no?authuser=0",
      stock: 8,
    },
    {
      id: 4,
      desc: "Flower Port",
      detail: "Reference 1414",
      price: 25,
      img: "https://lh3.googleusercontent.com/ILZQ-EFb8mbaFM6Nu4OPqByKirm_7BycJ2-GO0HjF2BO1_c8KxoMTIGCZSAHYBR5DuE4AuLAHiUkio1Tg9k5n_cNMSSNeATvHeZ4g-1H4Oyez6GLkruvpnAUoTQziPDi9zQxEXi2Xvp5ZMo067QHoNPZtbhytw7Y3wcwsra4OYix-91XHDWN1KFwWcNQhvl8WURqVRXVf3Ly28vwhxsIESwQ2KuB_TivRRtbL4caOJqju9Nzx4BgdkuAnwMn8_QoEX9Zb36OWYdd3zrU_-Js0b_4e64sfg66hder0fUUUIMQ8KyvwHhAfQyPwZv2ZOapTlOlyTf2N1aNoD334_wCUL6FTjJRZfiOqi1bSoBYr-l8k9nUcVnMxccEn3TB2bmsbrW9YCS6MMZ1t2s-S6XNwbVmp8VUK3uNTIzMGzRB1GZPEbWR7n3ulsv1U5iEYaWSGTd0zfXgItNwz4ZHDf0v0ZqUG3g5M1F7BLXyjoYeeLJ4R5x-ohoYZwvErAQ9qNSFOohf4tumq7CVPhxODjhxVWIzhslabw_5bHrgTGle2BIhkYX6Y9WQwaT9VP3lM1RDmKVGRGHkBtrb6YbXVKNIHLNcGD1AVAcbv4NFHmCekw0Yk7xVjgxD0DSASnDzL53_wOBvcPBOrXxFA0OoInEdyzHtz0X5n3BfVaQcUSGnJirrBy5k2BhH5pRDUAX3Be_kyhJwiFe5f4Hw3Rk-3nj0kGgCFQ=s450-no?authuser=0",
      stock: 15,
    },
    {
      id: 5,
      desc: "School Bag",
      detail: "Reference 1000",
      price: 99,
      img: "https://lh3.googleusercontent.com/YIOdFc7ZzA3hfIXdJdFpiCF-qfp5CsIl_oPXxGsAefeoJ_XMhpkn2rBKGA0lCT_Mr5yVrnCgFhj5D2Fl-t5ERh5fd3zYSG3R9s-k6wASBIgez8ohIotO3cLs1T1syhaCkqMP4Z1YULhF0sWVgsnUDvADy7eI0CZGLnG9FGQ8IM5Jm7W8Nu-WiTHGG1Q8w644Gqlynze8WKIzZlzL5_axqo6qjfvymUX1r8J7z8DFRvmggnI6oMRMsIEToV1L8U0NgVqtqhcmwt7GWM8c_l0y0M1tYUuRYDUbVERLMaSYMrTldRjv61TCD2mqOEcGpdZ99UZu-8RHqAJt0QY6hGxi-Gyyn3qWJNc3AnVbu5eCFLaeM73rA0UJW0Trk9BDdmsSCe-PHLWgbHQRIXInOkYmoBJ72h7hpESGCrtvvdiUsn3h3bpb-UZtwtEKpFIzsQVq92Lf5aKh7nhl-aML55S5f65BTXHLRIg5GfDUP3IpbZrG2NI5QE8wvmJ-U-TIRZ0MZPYnvLr3MoGZkIHbBDg5PQ-e6ykbjnj3ozi6NEMzZGyvZiNAHwlPHuA1tVBJ4YEILzWBPfadDtOApUQ6Ok5CeoqqpY801v5mmkxYdS346AmLka4K5CfO08nuGwzpm4XAR2G1D42njUzIPqiOEx9M3FiowDncM1KL9OREgc230VNV86T9wER4kADzigPsalLCXIEecejBHqMQWxiyQvurHWIjUw=s450-no?authuser=0",
      stock: 25,
    },
    {
      id: 6,
      desc: "Rado Watch",
      detail: "Reference 9204",
      price: 75,
      img: "https://lh3.googleusercontent.com/OaMsOypZuFxk7DNBlxIhRqH5Jm84-iNdTSEAZ9sVoFIXz5g-6u1NOfD9AikNLyThofjLKAtgPoTKNDMFt3458xfxsf03kVc5NstOrCJH-OL-37QK13mUkFuleJ6MXHjJgnPXqob-AstoTfpOdtG5bUC84pdS7431tKjdqxPbmdcw9e1fLr3bvNBXBcVlJ1yCW6QsO6IL4eslsmwEhm37J8TROgQLaG2I-cgCwk42BSdgHyPCFqY8qowXGs1JCFvgYgAkFOORraRaXnvHDBkx_L2qhOVn7IZVQpP8bUTDexZoy3RB03xGVnAs_HHoJ_t4bEQCOzoQ7NsOSeXCq5oCXZibRKMknZy9AzXP1isl5JwgxJRqbxQpHdnBlcHe8jFejL928vFNFCxYDN-Ge-QyC89CxmThpdztBU8Emmv9gPEqQ84jpFOXTHrH29QxxA979s7eHcO9p1pxw4Ro9xkao9V_hY23SwpeIakAvMvA0dmyvScNWGFkD5AdUoOLO-Ky3TTtEWcgiiLFGZcXPTbA2bCCqR3qExEebZACF8xdpyLu7e6F8CKuxQNRLohhBpHlzMjxYg7tVSle44PbITp7RgolxtTj22-I3ChG_GmZGLlyZjdw4vnpAhSQYYoiiCBMtrbfKJfIa76hNYstkJNAcLkwtdyAUSMZHmEnNWH3q6mpKrNju_dtNMdHR627KAspxxnzVXzfP_LFOO4OId3c1VdW8g=s450-no?authuser=0",
      stock: 2,
    },
    {
      id: 7,
      desc: "Traveling Bag",
      detail: "Reference 1155",
      price: 119,
      img: "https://lh3.googleusercontent.com/hj_NRoBYgUIZ434whb2NryLP62koYJp_59CeNIfQ0-_rSawryfJRqKNrjp5GeS-Fv1tmiHkdjsA__s-v66WFRBLjSnMlhZDoQS-pJgibN3pIKzwkQgc2e7uQ01b1djoM7Cqe-e81PajG-vzPfzWGFAxKkW1LS81CI8IYFfqkWWMiNE0bFAPPc8o8Pqo-k9FH612TH5_3emNob9j1r4ukOwFFoP6PHicoFJ2sgra_SmL00dE2FpW8ZiKK-oEjqa9ZXDn6G2mfoKjawjQKPujRgMyH1gaHlqNdUz1p0gOvOMJ63aQOng0dlV2Tr2LdMWrrxDZt1ayTAAjDtV3k3qAVc_d4J1wCq_W356ue_IkOtDbLwMFLr3NmqYuA6qq7iwDg-kvx_w_usv3Zom3XfkIRMw-p4GXAhynzH56pmKze8PF-ZGZanMUMI_vi_vkwBos7BToUEQ5R-R8m--8ZK8ro2RkfNZPtzxDYU969DjX5qSD4m3nT0wQM7tz7UcWsALEaSRHJ4_N4kUqussVHLJdZnalZ5TPSSob4gBImudEj_Bnyg-_lrFHUu0lR6zgx88LkHop__llqDr1ncumV0pNaoASFDYSV7lKANHnMLhq0ZtAQi0lOU6pCrI9SX_QGC6v9gqwMQGr9cMF1Avpq_HifN7ND0ZqUVI1aDpM389WPyR83evycXW-0fX5T4rhnTPLMmVchpsku246wCfSFodbNUWilHA=s450-no?authuser=0",
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
