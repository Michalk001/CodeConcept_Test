import React from "react";
import styles from "./CartList.module.scss";
import {Button} from "../button/Button";
import {Cart} from "./Cart";

export const CartList = () =>{

    return(
        <div className={styles.cartList}>
            <div className={styles.gridTitle}>

                <div className={styles.nameTitle}>Product Name</div>
                <div className={styles.priceTitle}>Unit Price</div>
                <div className={styles.quantityTitle}>Quantity</div>
            </div>
            <div className={styles.items}>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>

            <div className={styles.bottom}>
                <Button>Update Shopping Cart</Button>
            </div>
        </div>
    )
}