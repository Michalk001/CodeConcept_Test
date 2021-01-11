import React from "react";
import {Button} from "../button/Button";


import styles from "./Box.module.scss"
import {Summary} from "./Summary";
import {CartList} from "./CartList";
export const Box = () =>{

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