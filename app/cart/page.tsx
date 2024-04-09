'use client'
import Coupon from "@/components/cart/Coupon";
import { useEffect, useState } from "react";
import Addresses from "@/components/cart/Addresses";
import Payment from "@/components/cart/Payment";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import EmptyCartAlert from "@/components/cart/EmptyCartAlert";
import ProductList from "@/components/cart/ProductList";
import { useSelector } from "react-redux";
import TotalAmount from "@/components/cart/TotalAmount";
const cart = () => {
    const state = useSelector(((state: any) => state.shoppingCart))
    const [cartlength, setCartlength] = useState(null)
    const [datas, setData] = useState([])
    useEffect(() => {
        setCartlength(state?.cart.length)
        setData(state.cart)
    })
    const [coupon, setCoupon] = useState({ code: '', percent: 0 })
    const [addressId, setAddressId] = useState()
    return (
        <div>
            <Header />
            {cartlength == 0 ? (
                <EmptyCartAlert />
            ) : (
                <div className="container mx-auto w-5/6 lg:w-2/3 py-12 mb-12" dir="rtl">
                    <section className="flex justify-center flex-col lg:flex-row lg:gap-x-5 ">
                        <table className="text-sm lg:text-lg table-fixed w-full border dark:border-slate-400 bg-whiteHeader dark:bg-slate-400">
                            <thead className="bg-slate-600 dark:bg-slate-800 text-white">
                                <tr>
                                    <th>محصول</th>
                                    <th>نام</th>
                                    <th>قیمت</th>
                                    <th>تعداد</th>
                                    <th>قیمت کل</th>
                                    <th>حذف محصول</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map((item: any) => (
                                    <ProductList item={item} />
                                ))}
                            </tbody>
                        </table>
                    </section>
                    <div className="mt-8 flex flex-col lg:flex-row w-full justify-center text-center lg:justify-between">
                        <Coupon setCoupon={setCoupon} />
                        <Addresses setAddressId={setAddressId} />
                    </div>
                    <div className="mt-7 bg-whiteHeader dark:bg-slate-400 flex flex-col justify-center border rounded-lg flex p-8 w-full text-center">
                        <p>مجموع سبد خرید</p>
                        <TotalAmount datas={datas} coupon={coupon} />
                        <Payment cart={state.cart} coupon={coupon} addressId={addressId} />
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}
export default cart;