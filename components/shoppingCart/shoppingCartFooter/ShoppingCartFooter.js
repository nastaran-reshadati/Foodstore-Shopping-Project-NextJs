import React from "react";
import SelectShoppingCartAddress from "./SelectShoppingCartAddress";
import ShoppingCartPayment from "./ShoppingCartPayment";
import ShoppingCartDiscount from "./ShoppingCartDiscount";

const ShoppingCartFooter = () => {
  return (
    <>
      <div className="row mt-4">
        <ShoppingCartDiscount />
        <SelectShoppingCartAddress />
        <ShoppingCartPayment />
      </div>
    </>
  );
};

export default ShoppingCartFooter;
