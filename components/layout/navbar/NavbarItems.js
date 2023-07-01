import AuthContext from "context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavbarItems = () => {
  const state = useSelector((state) => state.ShoppingCart.cart);
  
  const routes = useRouter();
  const { userData } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(state);
  }, [state]);

  console.log(cart.length);
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <Link href="/">
          <li
            className={routes.pathname === "/" ? "nav-item active" : "nav-item"}
          >
            <a className="nav-link">صفحه اصلی</a>
          </li>
        </Link>

        <Link href="menu">
          <li
            className={
              routes.pathname === "menu" ? "nav-item active" : "nav-item"
            }
          >
            {" "}
            <a className="nav-link">منو</a>
          </li>
        </Link>

        <Link href="/about">
          <li
            className={
              routes.pathname === "/about" ? "nav-item active" : "nav-item"
            }
          >
            <a className="nav-link">درباره ما</a>
          </li>
        </Link>

        <Link href="/contact">
          <li
            className={
              routes.pathname === "/contact" ? "nav-item active" : "nav-item"
            }
          >
            <a className="nav-link">تماس با ما</a>
          </li>
        </Link>
      </ul>
      <div className="user_option">
        <div>
          <Link href="/cart">
            <BsFillBagFill style={{ fontSize: "30px" }} className="pointer" />
          </Link>
          <span className="badget_cart">{cart.length}</span>
        </div>

        {userData ? (
          <a href="/user/profile" className="btn-auth btn-autu-profile">
            پروفایل
          </a>
        ) : (
          <a href="/auth/login" className="btn-auth">
            ورود کاربر
          </a>
        )}
      </div>
    </div>
  );
};

export default NavbarItems;
