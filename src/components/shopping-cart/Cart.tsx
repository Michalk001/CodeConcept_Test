import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import { Button } from "../button/Button";
import { CartItem } from "./CartItem";
import { ShoppingContext } from "./ShoppingContext";
import { useTranslation } from "react-i18next";

export const Cart = () => {
  const { productCarts, updatePrice, productList } = useContext(
    ShoppingContext
  );
  const { t } = useTranslation("common");
  return (
    <div className={styles.cartList}>
      <div className={styles.gridTitle}>
        <div className={styles.nameTitle}>{t("product.productName")}</div>
        <div className={styles.priceTitle}>{t("product.unitPrice")}</div>
        <div className={styles.quantityTitle}>{t("product.quantity")}</div>
      </div>
      <div className={styles.items}>
        {productCarts.map(({ productId, quantity }) => {
          const product = productList[productId];
          if (!product) {
            return null;
          }
          return (
            <CartItem cart={product} quantity={quantity} key={productId} />
          );
        })}
      </div>

      <div className={styles.bottom}>
        <Button onClickHandle={updatePrice}>
          {t("shoppingCart.updateCart")}
        </Button>
      </div>
    </div>
  );
};
