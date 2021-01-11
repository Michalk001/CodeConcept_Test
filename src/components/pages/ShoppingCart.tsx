import React from "react";
import {Button} from "../button/Button";


import styles from "./ShoppingCart.module.scss"
import {CartList,Summary }from "../shopping-cart"
export const ShoppingCart = () =>{

    return(
        <> 
            <div className={styles.header} >
                <div className={styles.title}>Shopping Cart</div>
                <div className={styles.button}>
                    <Button>Proceed to checkout</Button>
                </div>
            </div>
            <div className={styles.flexboxContainer}>
                <CartList />
                <Summary />

            </div>
        </>
    )

}

