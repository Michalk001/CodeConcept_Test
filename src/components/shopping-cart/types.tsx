

export interface product {
    id: number,
    name: String,
    image: String,
    price: number
}

export interface product_cart {
    productId: number,
    quantity: number
}