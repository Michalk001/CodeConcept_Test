import React, {FC, ReactNode} from "react";

import styles from './Button.module.scss'

interface ButtonProps {
    children:ReactNode
}

export const Button:FC<ButtonProps> = (props) =>{
    const {children} = props
    return(
        <button className={styles.button} >{children}</button>
    )
}

