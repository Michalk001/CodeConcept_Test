import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { IProduct, IProductCart, ShoppingCartContextType } from "./types";
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
  isLoading: true,
  setQuantity: () => {},
  productList: {},
});

export const ShoppingCartProvider: FC<{ children: ReactNode }> = (props) => {
  const defaultShippingPrice = 23.8;
  const freeShippingMinPrice = 100;

  const [productCarts, setProductCarts] = useState<IProductCart[]>([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(defaultShippingPrice);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<{ [id: number]: IProduct }>(
    {}
  );

  const addProductToCart = (id: number, quantity?: number) => {
    const isInShoppingCart = productCarts.find(
      (product) => product.productId === id
    );
    if (isInShoppingCart) {
      setQuantity(id, quantity ? isInShoppingCart.quantity + quantity : 1);
      return;
    }
    const productCart = productList[id];
    if (!productCart) return;

    setProductCarts((prevState) => [
      ...prevState,
      {
        productId: productCart.id,
        quantity: quantity && quantity > 0 ? quantity : 1,
      },
    ]);
  };

  const getProductList = async () => {
    const res = await fetch(`${config.API_URL}/data/products.json`);
    const products = (await res.json()) as IProduct[];
    setProductList(
      products.reduce<{ [id: number]: IProduct }>((obj, product) => {
        obj[product.id] = product;
        return obj;
      }, {})
    );
  };

  const getProductCarts = async () => {
    const res = await fetch(`${config.API_URL}/data/cart_products.json`);
    const carts = (await res.json()) as IProductCart[];
    carts.forEach((cart) => {
      addProductToCart(cart.productId, cart.quantity);
    });
    setIsLoading(false);
  };

  const setQuantity = (id: number, quantity: number) => {
    setProductCarts(
      productCarts.map((product) =>
        product.productId === id
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
        productCarts.reduce((sum, { productId, quantity }) => {
          const product = productList[productId];
          sum += quantity * product.price;
          return sum;
        }, 0) * 100
      ) / 100;

    setTotalPrice(price);
    const shippingPrice =
      price >= freeShippingMinPrice ? 0 : freeShippingMinPrice;
    setTotalPrice(price);
    setShippingPrice(shippingPrice);
  };

  const removeProduct = (id: number) => {
    const newCartList = productCarts.filter(
      (product) => product.productId !== id
    );
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
        isLoading,
        productList,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
