import React, {useContext} from "react";
import styles from "./CartList.module.scss";
import {Button} from "../button/Button";
import {Cart} from "./Cart";
import {ShoppingContext} from "./ShoppingContext";
import {ShoppingCartContextType} from "./types";

export const CartList = () =>{

    const {productCarts,updatePrice} = useContext(ShoppingContext) as ShoppingCartContextType;

    return(
        <div className={styles.cartList}>
            <div className={styles.gridTitle}>

                <div className={styles.nameTitle}>Product Name</div>
                <div className={styles.priceTitle}>Unit Price</div>
                <div className={styles.quantityTitle}>Quantity</div>
            </div>
            <div className={styles.items}>
                {productCarts.map(value =>
                    <Cart
                        cart={value}
                        key={value.id}
                    />
                )}
            </div>

            <div className={styles.bottom}>
                <Button onClickHandle={updatePrice} >Update Shopping Cart</Button>
            </div>
        </div>
    )
}