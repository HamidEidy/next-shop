'use client'

import { addToCart, removeFromCart } from "@/redux/cart/action"
import { useDispatch } from "react-redux"


const AddToCart = ({product, qty}:{product:any, qty:number}) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(removeFromCart(product.id))
        dispatch(addToCart(product, qty))
    }
    return(
        <button className="btn" onClick={handleAddToCart}>افزودن به سبد خرید</button>
    )
}
export default AddToCart;