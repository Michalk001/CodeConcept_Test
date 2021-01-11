import React, {FC, ReactNode} from "react";

import styles from './Button.module.scss'

interface ButtonProps {
    children:ReactNode
    onClickHandle?: () => void
}

export const Button:FC<ButtonProps> = (props) =>{
    const {children,onClickHandle} = props
    return(
        <button onClick={onClickHandle} className={styles.button} >{children}</button>
    )
}

