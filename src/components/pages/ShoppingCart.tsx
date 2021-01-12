import React, { useContext } from "react";
import { Button } from "../button/Button";
import styles from "./ShoppingCart.module.scss";
import { CartList, Summary } from "../shopping-cart";
import { ShoppingContext } from "../shopping-cart/ShoppingContext";
import { useTranslation } from "react-i18next";

export const ShoppingCart = () => {
  const context = useContext(ShoppingContext);
  const { isCheckout, checkout, productCarts, isLoading } = context;
  const { t } = useTranslation("common");

  if (isLoading) return null;

  if (productCarts.length === 0 && !isCheckout)
    return <div className={styles.message}>{t("shoppingCart.empty")}</div>;

  if (isCheckout)
    return <div className={styles.message}>{t("shoppingCart.checkout")}</div>;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>{t("shoppingCart.title")}</div>
        <div className={styles.button}>
          <Button onClickHandle={checkout}>
            {t("summary.proceedCheckout")}
          </Button>
        </div>
      </div>
      <div className={styles.flexboxContainer}>
        <CartList />
        <Summary />
      </div>
    </>
  );
};
