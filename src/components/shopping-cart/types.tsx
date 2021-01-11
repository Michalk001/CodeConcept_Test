import { ChangeEvent } from "react";

export interface IProduct {
  id: number;
  name: String;
  image: String;
  price: number;
}

export interface IProduct_Cart {
  productId: number;
  quantity: number;
}

export interface IProductCart extends IProduct {
  quantity: number;
}

export type ShoppingCartContextType = {
  productCarts: IProductCart[];
  setQuantity: (id: number, quantity: number) => void;
  totalPrice: number;
  shippingPrice: number;
  updatePrice: () => void;
  removeProduct: (id: number) => void;
  checkout: () => void;
  isCheckout: boolean;
  addProductToCart: (id: number, quantity?: number) => void;
};
