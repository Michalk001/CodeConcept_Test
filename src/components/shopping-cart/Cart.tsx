import React from "react";
import styles from "./CartList.module.scss";


export const Cart = () =>{

    return(
        <div className={styles.gridItem}>
            <div className={styles.remove}><img src={`${window.location.origin }/images/x-img.png`} alt={"remove"}/></div>
            <div className={styles.imageItem}><img src={`${window.location.origin }/images/headphones.png`} alt={"headphones"}/></div>
            <div className={styles.nameItem}>Headphones</div>
            <div className={styles.priceItem}>$11.90</div>
            <div className={styles.quantityItem}>
                <div className={styles.quantityBox}>
                    <button className={styles.quantityButton} onClick={() => console.log("click -")}>-</button>
                    <input onChange={() => console.log("click -")} className={styles.quantityInput} type={"text"} value={22} />
                    <button className={styles.quantityButton} onClick={() => console.log("click -")}>+</button>
                </div>
                <div className={styles.quantityUpdate}>
                    <img src={`${window.location.origin }/images/edit-img.png`} alt={"edit"}/>
                </div>
            </div>
        </div>
    )

}