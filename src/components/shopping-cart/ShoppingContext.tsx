import React, {ChangeEvent, createContext, FC, ReactNode, useEffect, useState} from "react";
import {IProductCart,ShoppingCartContextType} from "./types";
export const ShoppingContext = createContext<ShoppingCartContextType|null>(null);

export const ShoppingCartProvider:FC<{children:ReactNode}> = (props) =>{

    const defaultShippingPrice = 23.80;
    const freeShippingMinPrice = 100;

    const [productCarts, setProductCarts]= useState<IProductCart[]>([
        {
            id:1,
            name:"Headphones",
            image:"headphones.png",
            price:11.90,
            quantity: 2
        },
        {
            id:2,
            name:"Test 222",
            image:"headphones.png",
            price:1.90,
            quantity: 5
        }
    ])

    const [totalPrice, setTotalPrice] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(defaultShippingPrice);
    const [isCheckout, setIsCheckout] = useState(false)

    const subQuantity = (id:number) => {
        productCarts.filter((product) => {
            if (product.id === id) {
                if(product.quantity > 0) {
                    --product.quantity;
                    setProductCarts([...productCarts]);
                }
            }
        });
    }
    const incQuantity = (id:number) => {
        productCarts.filter((product) => {
            if (product.id === id) {
                ++product.quantity;
                setProductCarts([...productCarts]);
            }
        });
    }
    const setQuantity = (e: ChangeEvent<HTMLInputElement>,id:number) =>{
        const quantity = e.target.value;
        if(parseInt(quantity) || quantity === ""){
            productCarts.filter((product) => {
                if (product.id === id) {
                    product.quantity = quantity ? parseInt(quantity) : 0;
                    setProductCarts([...productCarts]);
                }
            });
        }
    }

    const updatePrice = () =>{
        const price = Math.round(productCarts.reduce((prev,cur) =>(
            prev + cur.quantity * cur.price
        ),0) * 100) /100;

        setTotalPrice(price);
        if(price >= freeShippingMinPrice){
            setShippingPrice(0);
        }
        else{
            setShippingPrice(freeShippingMinPrice);
        }

    }

    const removeProduct = (id:number) =>{
        const newCartList = productCarts.filter(product => product.id != id);
        setProductCarts(newCartList);
    }

    const checkout = () =>{
        setProductCarts([]);
        setIsCheckout(true);
    }

    useEffect(() =>{
        updatePrice();
    },[productCarts.length])

    return(
        <ShoppingContext.Provider value={{
            productCarts,
            shippingPrice,
            totalPrice,
            subQuantity,
            incQuantity,
            setQuantity,
            updatePrice,
            removeProduct,
            checkout,
            isCheckout
        }} >
            {props.children}
        </ShoppingContext.Provider>
    )
}