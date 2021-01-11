import React from "react";
import styles from "./Summary.module.scss";
import {Button} from "../button/Button";

export const Summary = () => {

    return (
        <section className={styles.summary}>
            <div className={styles.wrap}>
                <div className={styles.titleSection}>
                    <div>Shipping</div>
                    <div>$11.90</div>
                </div>
                <div className={styles.total}>
                    <div className={styles.titleSection}>Cart totals </div>
                    <div className={styles.content}>
                        <div className={styles.subtotal}>
                            <div className={styles.text}>subtotal</div>
                            <div className={styles.price}>$11.90</div>
                        </div>
                        <div className={styles.grandTotal}>
                            <div className={styles.text}>grand total</div>
                            <div className={styles.priceLarge}>$11.90</div>
                        </div>
                        <div className={styles.button}>
                            <Button>Proceed to checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}