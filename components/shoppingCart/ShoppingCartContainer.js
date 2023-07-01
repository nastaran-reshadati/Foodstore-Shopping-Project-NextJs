import React from "react";
import ShoppingCartInfo from "./ShoppingCartInfo";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/Cart/actions";
import ShoppingCartFooter from "./shoppingCartFooter/ShoppingCartFooter";

const ShoppingCartContainer = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <section
        className="single_page_section layout_padding"
        // style={{ background: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row gy-5">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table align-middle text-light">
                      <thead>
                        <tr>
                          <th>محصول</th>
                          <th>نام</th>
                          <th>قیمت</th>
                          <th>تعداد</th>
                          <th>قیمت کل</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <ShoppingCartInfo item={item} />
                        ))}
                      </tbody>
                    </table>
                    <button
                      onClick={() => dispatch(clearCart())}
                      className="btn btn-warning"
                    >
                      پاک کردن کل سبد خرید
                    </button>
                  </div>
                </div>
                <ShoppingCartFooter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCartContainer;
