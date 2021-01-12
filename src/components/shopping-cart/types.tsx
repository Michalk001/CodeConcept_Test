export interface IProduct {
  id: number;
  name: String;
  image: String;
  price: number;
}

export interface IProductCart {
  productId: number;
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
  isLoading: boolean;
  productList: { [id: number]: IProduct };
};
