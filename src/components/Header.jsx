import React from "react";
import { BiCart } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Header() {
  return (
    <div className="flex fixed w-full justify-between bg-main px-5 py-2 text-white">
      <div className="cursor-pointer">
        <HiOutlineShoppingBag />
      </div>
      <div>$ 100</div>
      <div className="cursor-pointer">
        <BiCart />
      </div>
    </div>
  );
}

export default Header;
