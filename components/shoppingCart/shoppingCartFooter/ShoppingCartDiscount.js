import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { handleErrorMessage } from "../../../helpers/helper";
import { Context } from "../../../context";

const ShoppingCartDiscount = () => {
  const { discount, setDiscount } = useContext(Context);

  const enterDiscountCode = (e) => {
    setDiscount({ ...discount, discountCode: e.target.value });
  };

  const checkDiscountCode = async () => {
    if (discount.discountCode == "") {
      toast.error("کد تخفیف نمی تواند خالی باشد");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:3000/api/orders/checkCoupon",
        {
          code: discount.discountCode,
        }
      );
      toast.success("کد تخفیف شما اعمال شد ");
      setDiscount({ ...discount, discountPrecent: res.data.percentage });

      console.log(res.data.data);
    } catch (err) {
      toast.error(handleErrorMessage(err));

      console.log(err);
    }
  };
  return (
    <div className="col-12 col-md-6">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="کد تخفیف"
          onChange={enterDiscountCode}
        />
        <button
          onClick={checkDiscountCode}
          className="input-group-text"
          id="basic-addon2"
        >
          اعمال کد تخفیف
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartDiscount;
