import React from "react";
import ShoppingCartCalculatore from "./ShoppingCartCalculatore";

const ShoppingCartPayment = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-body p-4">
            <h5 className="card-title fw-bold text-dark">مجموع سبد خرید</h5>
            <ShoppingCartCalculatore />
            <div className="text-center">
              <button className="user_option btn-auth mt-4 text-center">
                پرداخت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPayment;
