import Link from "next/link";
import React from "react";

const ShowEmptyCart = () => {
  return (
    <div className="cart-empty">
      <div className="text-center">
        <div>
          <i className="bi bi-basket-fill" style={{ fontSize: "80px" }}></i>
        </div>
        <h4 className="text-bold">سبد خرید شما خالی است</h4>
        <Link href="/menu">
          <a className="btn btn-dark mt-3">مشاهده محصولات</a>
        </Link>
      </div>
    </div>
  );
};

export default ShowEmptyCart;
