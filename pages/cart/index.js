import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShowEmptyCart from "../../components/shoppingCart/ShowEmptyShoppingCart";
import Loading from "../../components/profile/Loading";
import ShoppingCartContainer from "../../components/shoppingCart/ShoppingCartContainer";
import { Context } from "../../context";

const CartPage = () => {
  const state = useSelector((state) => state.ShoppingCart.cart);

  const [discount, setDiscount] = useState({
    discountCode: "",
    discountPrecent: 0,
  });
  const [cart, setCart] = useState(null);

  useEffect(() => {
    setCart(state);
  }, [state]);

  console.log(state.length);
  if (cart == null) {
    return <Loading />;
  }
  return (
    <Context.Provider value={{ discount, setDiscount }}>
      <div>
        {cart.length > 0 ? (
          <ShoppingCartContainer cart={cart} />
        ) : (
          <ShowEmptyCart />
        )}
      </div>
    </Context.Provider>
  );
};

export default CartPage;
