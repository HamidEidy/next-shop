'use client'
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const CartButton = () => {
    const state = useSelector(((state:any) => state.shoppingCart))
    return (
        <Link href={'/cart'} className="relative me-2 bg-searchBox dark:bg-slate-400  rounded-full p-1 hover:bg-yellow-400 cursor-pointer transition">

            <MdOutlineShoppingCart className="text-3xl text-gray-800 p-1" />
            <span className="absolute -top-2 z-[100]  -left-2 bg-yellow-500 p-3 w-2 h-2 rounded-full items-center flex justify-center">
                <span className="z-[500] text-sm text-white">
                    {state.cart.length > 0 ? state.cart.length : 0}
                </span>
                <span className="absolute bg-yellow-500 animate-ping w-5 h-5 rounded-full"></span>
            </span>
        </Link>



    )
}
export default CartButton;