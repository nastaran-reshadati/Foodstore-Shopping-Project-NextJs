import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementProduct,
  IncrementProduct,
  removeFromCart,
} from "../../redux/Cart/actions";

const ShoppingCartInfo = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr key={item.id}>
      <th>
        <Image
          src={item.primary_image}
          placeholder="blur"
          blurDataURL={item.primary_image_blurDataURL}
          width={100}
          height={66}
          alt="primary-image"
        />
      </th>
      <td className="fw-bold">{item.name}</td>
      <td>
        <div>
          {item.is_sale ? (
            <>
              <span>{item.sale_price}</span>
              <del className="me-1">{item.price}</del>
            </>
          ) : (
            <span>{item.price}</span>
          )}
          <span className="ms-1">تومان</span>
        </div>
      </td>
      <td>
        <div className="IncreseDecreseBtnCart justify-content-around d-flex p-3 pointer">
          <span
            onClick={() =>
              item.qty < item.quantity && dispatch(IncrementProduct(item.id))
            }
          >
            +
          </span>
          <div className="input-number">{item.qty}</div>
          <span
            onClick={() => item.qty > 1 && dispatch(DecrementProduct(item.id))}
            className="minus-btn mx-1"
          >
            -
          </span>
        </div>
      </td>
      <td>
        {item.is_sale ? (
          <span>{item.sale_price * item.qty}</span>
        ) : (
          <span>{item.price * item.qty}</span>
        )}
        <span className="ms-1">تومان</span>
      </td>
      <td>
        <i
          onClick={() => dispatch(removeFromCart(item.id))}
          className="bi bi-x text-danger fw-bold fs-4 cursor-pointer"
        ></i>
      </td>
    </tr>
  );
};

export default ShoppingCartInfo;
