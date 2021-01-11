import React from "react";
import { BrowserRouter } from 'react-router-dom';
import {ShoppingCart} from "./components/pages/ShoppingCart"

import styles from "./App.module.scss"

function App() {

    return (
        <BrowserRouter>
            <div className={styles.layout}>
              <ShoppingCart />
            </div>
        </BrowserRouter>

    );
}

export default App;
