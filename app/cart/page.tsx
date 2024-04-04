'use client'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { numberFormat, salePercent } from "@/utils/helper";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { decrement, increment, removeFromCart } from "@/redux/cart/action";
import toast from "react-hot-toast";
import Coupon from "@/components/cart/Coupon";
import { useEffect, useState } from "react";
import Addresses from "@/components/cart/Addresses";
import Payment from "@/components/cart/Payment";
import dynamic from "next/dynamic";
const MyHeader = dynamic(() => import('@/components/layouts/Header'), {
    ssr: false
  })
  const MyFooter = dynamic(() => import('@/components/layouts/Footer'), {
    ssr: false
  })
const cart = () => {
    const state = useSelector(((state: any) => state.shoppingCart))
    const dispatch = useDispatch();
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
            <MyHeader />
            {cartlength == 0 ? (
                <div className="container mx-auto w-5/6 lg:w-2/3 py-12 mb-12" dir="rtl">
                    <section className="flex justify-center flex-col text-center">
                        <div className="flex justify-center my-8">
                            <MdOutlineRemoveShoppingCart className="text-6xl dark:text-slate-100" />
                        </div>
                        <p className="dark:text-slate-200 text-2xl">سبد خرید خالی است</p>
                    </section>

                </div>

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
                                    <tr key={item.id} className="border-b">
                                        <td className="flex justify-center"><Image src={item.primary_image} width={100} height={0} alt="product-image"
                                            style={{ maxHeight: '50px' }}
                                        /></td>
                                        <td className="text-center">{item.name}</td>
                                        <td className="text-center">
                                            {item.is_sale ? (
                                                <>
                                                    <span>{numberFormat(item.sale_price)}</span>
                                                    <del className="me-1">{numberFormat(item.price)}</del>
                                                </>
                                            ) : (
                                                <span>{numberFormat(item.price)}</span>
                                            )}
                                            <span>تومان</span>

                                            {item.is_sale &&
                                                <div className="text-danger fs-6">
                                                    {salePercent(item.price, item.sale_price)}% تخفیف
                                                </div>}
                                        </td>
                                        <td className="text-center">
                                            <div className="flex row justify-center">
                                                <CiCirclePlus className="text-2xl cursor-pointer" onClick={() => item.qty < item.quantity && dispatch(increment(item.id))} />
                                                <span className="px-0 lg:px-3">{item.qty}</span>
                                                <IoIosRemoveCircleOutline className="text-2xl cursor-pointer" onClick={() => item.qty > 1 && dispatch(decrement(item.id))} />
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            {item.is_sale ? (
                                                <span>{numberFormat(item.sale_price * item.qty)}</span>
                                            ) : (<span>{numberFormat(item.price * item.qty)}</span>)}

                                            <span className="ms-1">تومان</span>
                                        </td>
                                        <td>
                                            <span className="flex justify-center">
                                                <TiDeleteOutline className="text-xl cursor-pointer text-red-500"
                                                    onClick={() => { dispatch(removeFromCart(item.id)); toast.error(`${item.name} از سبد خرید حذف شد !`) }}
                                                />
                                            </span>

                                        </td>
                                    </tr>

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
                        <div className="border rounded-lg p-2">
                            <div className="border-b flex justify-between py-2">
                                <span>مبلغ کل</span>
                                <span>
                                    {numberFormat(datas.reduce((total: any, product: any) => {
                                        return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                                    }, 0))}
                                    تومان
                                </span>
                            </div>
                            <div className="border-b flex justify-between py-2">
                                <span>{coupon.percent} درصد تخفیف</span>
                                <span>
                                    {numberFormat(((datas.reduce((total: any, product: any) => {
                                        return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                                    }, 0)) * coupon.percent) / 100)}
                                </span>
                            </div>
                            <div className=" flex justify-between py-2">
                                <span>مبلغ قابل پرداخت</span>
                                <span>

                                    {numberFormat((datas.reduce((total: any, product: any) => {
                                        return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                                    }, 0)) - (((datas.reduce((total: any, product: any) => {
                                        return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                                    }, 0)) * coupon.percent) / 100))}
                                </span>
                            </div>
                        </div>
                        <Payment cart={state.cart} coupon={coupon} addressId={addressId} />


                    </div>

                </div>


            )}
            <MyFooter />
        </div>
    )
}
export default cart;