import React from "react";
import {Button} from "../button/Button";


import styles from "./Box.module.scss"
import styles2 from "./CartList.module.scss"
import styles3 from "./Summary.module.scss"
export const Box = () =>{

    return(
        <>
            <div className={styles.header} >
                <div className={styles.title}>Shopping Cart</div>
                <Button>Proceed to checkout</Button>
            </div>
            <div className={styles.grid}>
                <div className={styles.cart}>
                    <div className={styles2.grid}>

                        <div className={styles2.nameTitle}>Product Name</div>
                        <div className={styles2.priceTitle}>Unit Price</div>
                        <div className={styles2.quantityTitle}>Quantity</div>
                    </div>
                    <div className={styles2.items}>
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

                    </div>

                    <div className={styles2.bottom}>
                        <Button>Update Shopping Cart</Button>
                    </div>
                </div>

                <div className={styles.totalPrice}>
                    <div className={styles3.titleSection}>
                        <div>Shipping</div>
                        <div>$11.90</div>
                    </div>
                    <div className={styles3.summary}>
                        <div className={styles3.titleSection}>Cart totals </div>
                        <div className={styles3.summaryContent}>
                            <div className={styles3.subtotal}>
                                <div className={styles3.text}>subtotal</div>
                                <div className={styles3.price}>$11.90</div>
                            </div>
                            <div className={styles3.grandTotal}>
                                <div className={styles3.text}>grand total</div>
                                <div className={styles3.price}>$11.90</div>
                            </div>
                            <div className={styles3.button}>
                                <Button>Proceed to checkout</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}