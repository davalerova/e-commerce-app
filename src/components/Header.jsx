import React from "react";
import { BiCart } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppProvider";

function Header() {
  const { total } = useAppContext();

  return (
    <div className="flex fixed w-full justify-between bg-main px-5 py-2 text-white">
      <div className="cursor-pointer">
        <Link to="/">
          <HiOutlineShoppingBag />
        </Link>
      </div>
      <div>$ {total}</div>
      <div className="cursor-pointer">
        <Link to="/shop-cart">
          <BiCart />
        </Link>
      </div>
    </div>
  );
}

export default Header;
