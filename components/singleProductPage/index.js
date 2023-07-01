import React from "react";
import ProductInfo from "./singlePageInfo";
import ProductsRandomCart from "./ProductsRandomCart";

const SingleProduct = () => {
  return (
    <>
      {/* the page for showing single page header */}
      <ProductInfo />

      {/* the page for showing single page Cart */}
      <ProductsRandomCart />
    </>
  );
};

export default SingleProduct;
