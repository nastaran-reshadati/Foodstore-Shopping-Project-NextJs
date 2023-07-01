import React from "react";
import { SlBasket } from "react-icons/sl";
import StartRating from "./datails/StartRating";
import ProductsPrice from "./ProductsPrice";
import ProductImageTitle from "./ProductImageTitle";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/Cart/actions";
import { toast } from "react-toastify";

const ProductsCart = ({ product }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.ShoppingCart);

  const addToCartHandler = () => {
    dispatch(removeFromCart(product.id));
    dispatch(addToCart(product, 1));
    toast.success("محصول به سبد خرید اضافه شد");
    // dispatch(removeFromCart(product.id));
  };
  console.log(selector);

  return (
    <div className="Product__card my-3">
      <div className="Product__card-body">
        <ProductImageTitle product={product} />

        <div className="Product__card-title text-center my-2">
          {product.name}
        </div>
        <div className="text-center my-2">{product.description}</div>
        <div className="Product__card-info d-flex justify-content-between align-items-center">
          <ProductsPrice product={product} />

          <div className="product__card-icon">
            <button>
              <SlBasket onClick={addToCartHandler} />
            </button>
          </div>
        </div>
        <StartRating />
      </div>
    </div>
  );
};

export default ProductsCart;
