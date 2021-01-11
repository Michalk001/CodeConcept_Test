import React, { useContext } from "react";
import { Button } from "../button/Button";
import styles from "./ShoppingCart.module.scss";
import { CartList, Summary } from "../shopping-cart";
import { ShoppingContext } from "../shopping-cart/ShoppingContext";
import { ShoppingCartContextType } from "../shopping-cart/types";

export const ShoppingCart = () => {
  const context = useContext(ShoppingContext) as ShoppingCartContextType;
  const { isCheckout, checkout, productCarts } = context;

  if (productCarts.length === 0 && !isCheckout)
    return (
      <div className={styles.message}>
        {" "}
        There are no more items in your cart
      </div>
    );

  if (isCheckout)
    return (
      <div className={styles.message}>
        {" "}
        Your order has been submitted successfully
      </div>
    );
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Shopping Cart</div>
        <div className={styles.button}>
          <Button onClickHandle={checkout}>Proceed to checkout</Button>
        </div>
      </div>
      <div className={styles.flexboxContainer}>
        <CartList />
        <Summary />
      </div>
    </>
  );
};
