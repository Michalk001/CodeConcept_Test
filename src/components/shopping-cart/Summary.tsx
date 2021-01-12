import React, { useContext } from "react";
import styles from "./Summary.module.scss";
import { Button } from "../button/Button";
import { ShoppingContext } from "./ShoppingContext";
import { useTranslation } from "react-i18next";

export const Summary = () => {
  const context = useContext(ShoppingContext);
  const { totalPrice, shippingPrice, checkout } = context;
  const { t } = useTranslation("common");
  return (
    <section className={styles.summary}>
      <div className={styles.wrap}>
        <div className={styles.titleSection}>
          <div>Shipping</div>
          <div>{shippingPrice ? `$${shippingPrice}` : t("summary.free")}</div>
        </div>
        <div className={styles.total}>
          <div className={styles.titleSection}>{t("summary.cartTotals")}</div>
          <div className={styles.content}>
            <div className={styles.subtotal}>
              <div className={styles.text}>{t("summary.subtotal")}</div>
              <div className={styles.price}>${totalPrice}</div>
            </div>
            <div className={styles.grandTotal}>
              <div className={styles.text}>{t("summary.grandTotal")}</div>
              <div className={styles.priceLarge}>
                ${totalPrice + shippingPrice}
              </div>
            </div>
            <div className={styles.button}>
              <Button onClickHandle={checkout}>
                {t("summary.proceedCheckout")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
