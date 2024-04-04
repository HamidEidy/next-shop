'use client'
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import AddToCart from "./AddToCart";

const IncrementProductButton = ({ product }:any) => {
    const [qty, setQty] = useState<number>(1)
    return (
        <>
            <div className="flex row justify-center">
                <CiCirclePlus className="text-2xl cursor-pointer" onClick={() => qty < product.quantity && setQty(qty + 1)} />
                <span className="px-3 text-lg">{qty}</span>
                <IoIosRemoveCircleOutline className="text-2xl cursor-pointer" onClick={() => qty > 1 && setQty(qty - 1)} />
            </div>
            <AddToCart product={product} qty={qty} />
        </>
    )
}
export default IncrementProductButton;