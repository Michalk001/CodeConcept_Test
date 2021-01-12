import React, { useContext } from "react";
import styles from "./CartList.module.scss";
import { Button } from "../button/Button";
import { Cart } from "./Cart";
import { ShoppingContext } from "./ShoppingContext";
import { useTranslation } from "react-i18next";

export const CartList = () => {
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
          return <Cart cart={product} quantity={quantity} key={productId} />;
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
