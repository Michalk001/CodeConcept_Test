import React from "react";

import { ShoppingCart } from "./pages/ShoppingCart";
import { ShoppingCartProvider } from "./components/shopping-cart/ShoppingContext";
import styles from "./App.module.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "./localization/i18nInit";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ShoppingCartProvider>
        <div className={styles.layout}>
          <ShoppingCart />
        </div>
      </ShoppingCartProvider>
    </I18nextProvider>
  );
}

export default App;
