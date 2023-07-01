import React from "react";

import { GetDatas } from "../../repository/AxiosRepository";
import { handleErrorMessage } from "../../helpers/helper";
import { Context } from "../../context";
import SingleProduct from "../../components/singleProductPage/index";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { REMOVE_FROM_CART } from "../../redux/Cart/actionTypes";
import { addToCart, removeFromCart } from "../../redux/Cart/actions";
import { toast } from "react-toastify";

const singleProducts = ({ product, error, randomProduct }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.ShoppingCart);

  const [clickCount, setClickCount] = useState(1);

  const addToCartHandler = () => {
    // console.log(clickCount);
    dispatch(removeFromCart(product.id));
    dispatch(addToCart(product, clickCount));
    toast.success("محصول با موفقیت به سبد خرید اضافه شد");
  };
  console.log(selector);

  return (
    <Context.Provider
      value={{
        product: product,
        randomProduct: randomProduct,
        addToCartHandler: addToCartHandler,
        clickCount,
        setClickCount,
      }}
    >
      <div>
        <SingleProduct />
      </div>
    </Context.Provider>
  );
};
export async function getServerSideProps({ query }) {
  try {
    const res = await GetDatas(`products/${encodeURI(query.slug)}`);
    const response = await GetDatas(`random-products?count=4`);
    return {
      props: { product: res.data.data, randomProduct: response.data.data },
    };
  } catch (err) {
    return {
      props: { error: handleErrorMessage(err) },
    };
  }
}
export default singleProducts;
