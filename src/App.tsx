import React from "react";
import { BrowserRouter } from 'react-router-dom';
import {Box} from "./components/shopping-cart";

import styles from "./App.module.scss"

function App() {

    return (
        <BrowserRouter>
            <div className={styles.layout}>
              <Box />
            </div>
        </BrowserRouter>

    );
}

export default App;
