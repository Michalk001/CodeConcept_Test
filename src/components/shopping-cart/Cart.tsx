import React, { FC, useContext } from "react";
import styles from "./CartList.module.scss";
import { IProductCart, ShoppingCartContextType } from "./types";
import { ShoppingContext } from "./ShoppingContext";
import config from "../../config.json";

interface IProps {
  cart: IProductCart;
}

export const Cart: FC<IProps> = (props) => {
  const { id, name, image, price, quantity } = props.cart;
  const {
    incQuantity,
    subQuantity,
    setQuantity,
    updatePrice,
    removeProduct,
  } = useContext(ShoppingContext) as ShoppingCartContextType;

  return (
    <div className={styles.gridItem}>
      <div className={styles.remove}>
        <img
          onClick={() => removeProduct(id)}
          src={`${config.API_URL_IMAGE}/images/x-img.png`}
          alt={"remove"}
        />
      </div>
      <div className={styles.imageItem}>
        <img
          src={`${config.API_URL_IMAGE}/images/${image}`}
          alt={"headphones"}
        />
      </div>
      <div className={styles.nameItem}>{name}</div>
      <div className={styles.priceItem}>${price}</div>
      <div className={styles.quantityItem}>
        <div className={styles.quantityBox}>
          <button
            className={styles.quantityButton}
            onClick={() => subQuantity(id)}
          >
            -
          </button>
          <input
            title={`${quantity}`}
            onChange={(e) => setQuantity(e, id)}
            className={styles.quantityInput}
            type={"text"}
            value={quantity}
          />
          <button
            className={styles.quantityButton}
            onClick={() => incQuantity(id)}
          >
            +
          </button>
        </div>
        <div className={styles.quantityUpdate}>
          <img
            onClick={updatePrice}
            src={`${config.API_URL_IMAGE}/images/edit-img.png`}
            alt={"edit"}
          />
        </div>
      </div>
    </div>
  );
};
