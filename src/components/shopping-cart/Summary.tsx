import React, {useContext} from "react";
import styles from "./Summary.module.scss";
import {Button} from "../button/Button";
import {ShoppingContext} from "./ShoppingContext";
import {ShoppingCartContextType} from "./types";

export const Summary = () => {
    const context = useContext(ShoppingContext) as ShoppingCartContextType;
    const {totalPrice,shippingPrice,checkout} = context;
    return (
        <section className={styles.summary}>
            <div className={styles.wrap}>
                <div className={styles.titleSection}>
                    <div>Shipping</div>
                    <div>{shippingPrice ? `$${shippingPrice}` : `free`}</div>
                </div>
                <div className={styles.total}>
                    <div className={styles.titleSection}>Cart totals </div>
                    <div className={styles.content}>
                        <div className={styles.subtotal}>
                            <div className={styles.text}>subtotal</div>
                            <div className={styles.price}>${totalPrice}</div>
                        </div>
                        <div className={styles.grandTotal}>
                            <div className={styles.text}>grand total</div>
                            <div className={styles.priceLarge}>${totalPrice + shippingPrice}</div>
                        </div>
                        <div className={styles.button}>
                            <Button onClickHandle={checkout}>Proceed to checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}