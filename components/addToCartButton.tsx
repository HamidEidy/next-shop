'use client'

import { CartItem } from "@/intefaces";
import { addToCart } from "@/redux/cart/action";
import { useDispatch } from "react-redux";

const AddToCartButton = ({product}: {product:CartItem}) =>{
    const dispatch = useDispatch();
    const handleAddToCart = (product: CartItem) =>{
        dispatch(addToCart(product, 1))
        console.log('cart :' , product);
        
    } 
    return(
        <button onClick={() => handleAddToCart(product)} className='text-sm bg-gray-500 hover:bg-gray-600 rounded px-2 text-white'>افزودن به سبد خرید</button>

    )
}
export default AddToCartButton;