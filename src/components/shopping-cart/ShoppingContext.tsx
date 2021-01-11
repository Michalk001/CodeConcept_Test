import React, {
  ChangeEvent,
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  IProduct,
  IProduct_Cart,
  IProductCart,
  ShoppingCartContextType,
} from "./types";
import config from "../../config.json";

export const ShoppingContext = createContext<ShoppingCartContextType>({
  productCarts: [],
  addProductToCart: () => {},
  totalPrice: 0,
  updatePrice: () => {},
  shippingPrice: 0,
  checkout: () => {},
  removeProduct: () => {},
  isCheckout: false,
  setQuantity: () => {},
});

export const ShoppingCartProvider: FC<{ children: ReactNode }> = (props) => {
  const defaultShippingPrice = 23.8;
  const freeShippingMinPrice = 100;

  const [productCarts, setProductCarts] = useState<IProductCart[]>([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(defaultShippingPrice);
  const [isCheckout, setIsCheckout] = useState(false);

  const [productList, setProductList] = useState<IProduct[]>([]);

  const addProductToCart = (id: number, quantity?: number) => {
    const isInShoppingCart = productCarts.find((product) => product.id === id);
    if (isInShoppingCart) {
      setQuantity(id, quantity ? isInShoppingCart.quantity + quantity : 1);
      return;
    }
    const productCart = productList.find((product) => product.id === id);
    if (!productCart) return;
    setProductCarts((prevState) => [
      ...prevState,
      {
        id: productCart.id,
        quantity: quantity && quantity > 0 ? quantity : 1,
        price: productCart.price,
        image: productCart.image,
        name: productCart.name,
      },
    ]);
  };

  const getProductList = async () => {
    const res = await fetch(`${config.API_URL}/data/products.json`);
    const products = await res.json();
    setProductList(products);
  };

  const getProductCarts = async () => {
    const res = await fetch(`${config.API_URL}/data/cart_products.json`);
    const carts = (await res.json()) as IProduct_Cart[];
    if (productList.length !== 0) {
      carts.forEach((cart) => {
        addProductToCart(cart.productId, cart.quantity);
      });
    }
  };

  const setQuantity = (id: number, quantity: number) => {
    setProductCarts(
      productCarts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity,
            }
          : product
      )
    );
  };

  const updatePrice = () => {
    const price =
      Math.round(
        productCarts.reduce((prev, cur) => prev + cur.quantity * cur.price, 0) *
          100
      ) / 100;

    setTotalPrice(price);
    if (price >= freeShippingMinPrice) {
      setShippingPrice(0);
    } else {
      setShippingPrice(freeShippingMinPrice);
    }
  };

  const removeProduct = (id: number) => {
    const newCartList = productCarts.filter((product) => product.id !== id);
    setProductCarts(newCartList);
  };

  const checkout = () => {
    setProductCarts([]);
    setIsCheckout(true);
  };

  useEffect(() => {
    (async () => {
      await getProductList();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await getProductCarts();
    })();
  }, [productList]);

  useEffect(() => {
    updatePrice();
  }, [productCarts.length]);

  return (
    <ShoppingContext.Provider
      value={{
        productCarts,
        shippingPrice,
        totalPrice,
        updatePrice,
        removeProduct,
        checkout,
        isCheckout,
        addProductToCart,
        setQuantity,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
