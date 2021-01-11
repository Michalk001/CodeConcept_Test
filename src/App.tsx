import React from "react";

import {ShoppingCart} from "./components/pages/ShoppingCart"
import {ShoppingCartProvider} from "./components/shopping-cart/ShoppingContext"
import styles from "./App.module.scss"

function App() {

    return (
        <ShoppingCartProvider >
        <div className={styles.layout}>
            <ShoppingCart />
        </div>
        </ShoppingCartProvider>

    );
}

export default App;
