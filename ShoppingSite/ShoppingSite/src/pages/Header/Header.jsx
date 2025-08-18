import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  ChevronDown,
  Heart,
  List,
  Search,
  ShoppingBag,
  User,
} from "react-feather";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenItems, setIsOpenItems] = useState(false);
  const categories = [
    "MEN",
    "WOMEN",
    "KIDS",
    "HOME",
    "BEAUTY",
    "GENZ",
    "STUDIO",
  ];
  return (
    <header
      style={{ fontFamily: "sans-serif" }}
      className="bg-[lavender] w-full content-center items-center h-[72px] flex align-middle justify-between sticky top-0 left-0 z-10 shadow-2xl"
    >
      <div className="lg:pl-2 pl-1 lg:ml-8 shrink-0 ml-1">
        <Link to={"home"}>
          <img
            src="https://aartisto.com/wp-content/uploads/2020/11/myntra-930x620.png"
            className="h-10 mr-1"
            alt="Myntra-Logo"
          />
        </Link>
      </div>
      <div className="lg:flex shrink flex-nowrap hidden">
        {categories.map((items) => (
          <div key={items}>
            <NavLink className={({isActive})=>{isActive?"text-orange-500":"text-black"}}  to={items.toLowerCase()}>
              <button className="hover:text-red-400 p-3 m-1 text-xs font-[600] flex items-center gap-1">
                {items}
                {items === "STUDIO" && (
                  <sup className=" text-[8px] text-red-400 rounded-full">
                    NEW
                  </sup>
                )}
              </button>
            </NavLink>
          </div>
        ))}
      </div>

      <div className="block shrink lg:hidden relative">
        <div
          className="hover:text-red-400 ml-2 cursor-pointer"
          onClick={() => setIsOpenItems(!isOpenItems)}
        >
          <ChevronDown />
        </div>

        {isOpenItems && (
          <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg border rounded z-50">
            {categories.map((item) => (
              <li
                key={item}
                className="p-2 text-sm font-bold hover:bg-gray-100"
                onClick={() => setIsOpenItems(false)}
              >
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="lg:min-w-[33%] grow min-w-[10%]">
        <div className="">
          <div className="bg-[#f5f5f6] h-[38px] items-center flex shadow-sm ">
            <Search className="text-gray-400 m-2" size={16} />
            <input
              className="bg-[#f5f5f6] lg:ml-4 ml-1 text-sm min-w-[80%] outline-0"
              placeholder="Search for products, brands and more"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex lg:shrink flex-nowrap hidden">
          <div className="hover:text-red-400">
            <Link to={"profile"}>
              <User className=" mx-6" size={18} />
              <button className="mx-4 text-xs font-bold">Profile</button>
            </Link>
          </div>
          <div className="hover:text-red-400">
            <Link to={"wishlist"}>
              <Heart className=" mx-6" size={18} />
              <button className="mx-4 text-xs font-bold">Wishlist</button>
            </Link>
          </div>
          <div className="hover:text-red-400">
            <Link to={"bag"}>
              <ShoppingBag className=" mx-5" size={18} />
              <button className="mx-4 text-xs font-bold">Bag</button>
            </Link>
          </div>
        </div>

        <div className="relative ">
          <div className="block hover:text-red-400 ml-2 lg:hidden">
            <List onClick={() => setIsOpen(!isOpen)} />
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
              <ul className="p-2 space-y-1">
                <Link to={"profile"}>
                  <li className="hover:bg-gray-100 text-xs font-bold px-3 py-1 rounded">
                    Profile
                  </li>
                </Link>
                <Link to={"wishlist"}>
                  <li className="hover:bg-gray-100 text-xs font-bold px-3 py-1 rounded">
                    Wishlist
                  </li>
                </Link>
                <Link to={"bag"}>
                  <li className="hover:bg-gray-100 text-xs font-bold px-3 py-1 rounded">
                    Bag
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
