import React from "react";
import {Button} from "./Button";


import styles from "./Box.module.scss"
import styles2 from "./CartList.module.scss"
export const Box = () =>{

    return(
        <>
            <div className={styles.header} >
                <div className={styles.title}>Shopping Cart</div>
                <div><Button>Proceed to checkout</Button></div>
            </div>
            <div className={styles.grid}>
                <div className={styles.cart}>
                    <div className={styles2.grid}>

                        <div className={styles2.nameTitle}>Product Name</div>
                        <div className={styles2.priceTitle}>Unit Price</div>
                        <div className={styles2.quantityTitle}>Quantity</div>
                    </div>

                    <div className={styles2.gridItem}>
                        <div className={styles2.remove}><img src={`${window.location.origin }/images/x-img.png`} alt={"remove"}/></div>
                        <div className={styles2.imageItem}><img src={`${window.location.origin }/images/headphones.png`} alt={"headphones"}/></div>
                        <div className={styles2.nameItem}>Headphones</div>
                        <div className={styles2.priceItem}>$11.90</div>
                        <div className={styles2.quantityItem}>
                            <button className={styles2.quantityButton} onClick={() => console.log("click -")}>-</button>
                            <input onChange={() => console.log("click -")} className={styles2.quantityInput} type={"text"} value={22} />
                            <button className={styles2.quantityButton} onClick={() => console.log("click -")}>+</button>
                            <div className={styles2.quantityUpdate}>
                                <img src={`${window.location.origin }/images/edit-img.png`} alt={"edit"}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles2.bottom}>
                        <Button>Update Shopping Cart</Button>
                    </div>
                </div>
                <div className={styles.totalPrice}>

                    <div>Total</div>
                </div>
            </div>
        </>
    )

}