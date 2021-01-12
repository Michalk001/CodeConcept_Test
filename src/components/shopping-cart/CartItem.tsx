import React, { ChangeEvent, FC, useContext } from "react";
import styles from "./Cart.module.scss";
import { IProduct } from "./types";
import { ShoppingContext } from "./ShoppingContext";
import config from "../../config.json";

interface IProps {
  cart: IProduct;
  quantity: number;
}

export const CartItem: FC<IProps> = (props) => {
  const { id, name, image, price } = props.cart;
  const quantity = props.quantity;
  const { setQuantity, updatePrice, removeProduct } = useContext(
    ShoppingContext
  );

  const addQuantity = (id: number, value: number) => {
    setQuantity(id, quantity + value);
  };

  const handleInputQuantity = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const quantity = e.target.value;
    if (parseInt(quantity) || quantity === "" || quantity[0] === "0") {
      setQuantity(id, parseInt(quantity));
    }
  };

  return (
    <div className={styles.gridItem}>
      <div className={styles.remove}>
        <img
          onClick={() => removeProduct(id)}
          src={`/images/x-img.png`}
          alt={"remove"}
        />
      </div>
      <div className={styles.imageItem}>
        <img src={`${config.API_URL_IMAGE}/images/${image}`} alt={`${image}`} />
      </div>
      <div className={styles.nameItem}>{name}</div>
      <div className={styles.priceItem}>${price}</div>
      <div className={styles.quantityItem}>
        <div className={styles.quantityBox}>
          <button
            className={styles.quantityButton}
            onClick={() => addQuantity(id, -1)}
          >
            -
          </button>
          <input
            title={`${quantity}`}
            onChange={(e) => handleInputQuantity(e, id)}
            className={styles.quantityInput}
            type={"text"}
            value={quantity}
          />
          <button
            className={styles.quantityButton}
            onClick={() => addQuantity(id, +1)}
          >
            +
          </button>
        </div>
        <div className={styles.quantityUpdate}>
          <img
            onClick={updatePrice}
            src={`/images/edit-img.png`}
            alt={"edit"}
          />
        </div>
      </div>
    </div>
  );
};
