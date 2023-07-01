import React from "react";
import { useSelector } from "react-redux";
import { numberFormating } from "../../../helpers/helper";
import { useContext } from "react";
import { Context } from "../../../context";

const ShoppingCartCalculatore = () => {
  const { discount } = useContext(Context);

  const state = useSelector((state) => state.ShoppingCart.cart);

  let results = state.reduce((total, product) => {
    return product.is_sale
      ? total + product.sale_price * product.qty
      : total + product.price * product.qty;
  }, 0);

  const priceWithDiscount = results * (discount.discountPrecent / 100);

  const totalPrice = results - priceWithDiscount;
  return (
    <ul className="list-group mt-4">
      <li className="list-group-item d-flex justify-content-between">
        <div>مجموع قیمت :</div>
        <div>{numberFormating(results)} تومان</div>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <div>
          تخفیف :
          <span className="text-danger ms-1">{discount.discountPrecent}%</span>
        </div>
        <div className="text-danger">
          {numberFormating(priceWithDiscount)}تومان
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <div>قیمت پرداختی :</div>
        <div>{numberFormating(totalPrice)}تومان</div>
      </li>
    </ul>
  );
};

export default ShoppingCartCalculatore;
