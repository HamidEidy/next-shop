'use client'
import { paymentVerify } from "@/actions/cart";
import Loading from "@/components/Loading";
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import { clearCart } from "@/redux/cart/action";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";

const verify = () => {
    const searchParams = useSearchParams();
    const trackId = searchParams.get('trackId');
    const status = searchParams.get('status');
    const [paymen, setPaymen] = useState<any>({});
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        const verifyPay = async () => {
            const data = await paymentVerify(trackId, status);
            setPaymen(data.payment)
            setLoading(false)
        }
        verifyPay()
        if (status === '2') {
            dispatch(clearCart())
        }

    }, [status])
    return (
        <div>
            <Header />
            <div className=" container mx-auto w-5/6 lg:w-2/3 py-12 mb-12" dir="rtl">
                <section className="my-12 flex justify-center flex-col lg:flex-row lg:gap-x-5">
                    {loading ? (<Loading />) : (
                        <div className="w-full bg-whiteHeader dark:bg-slate-400 lg:w-2/4 flex flex-col justify-center text-center border rounded-lg p-8">
                            <div className="flex justify-center mb-5">
                                {status === '2' ? (<IoCheckmarkDoneCircle className=" text-green-500 text-6xl" />) : (<MdCancel className=" text-red-500 text-6xl" />)}


                            </div>
                            {status === '2' ? (<p className="text-green-700">عملیات پرداخت با موفقیت انجام شد</p>) : (<p className="text-red-600">{paymen.error}</p>)}
                            {status === '2' ? (
                                <div className="flex flex-col lg:flex-row justify-between mt-5 space-y-5 lg:space-y-0">
                                    <Link className="btn" href={'/'}>بازگشت به صفحه اصلی</Link>
                                    <Link className="btn" href={'/profile/transactions'}>مشاهده ی تراکنش</Link>
                                </div>
                            ) : (
                                <div className="flex justify-between mt-5 flex-col lg:flex-row space-y-5 lg:space-y-0">
                                    <Link className="btn" href={'/'}>بازگشت به صفحه اصلی</Link>
                                    <Link className="btn" href={'/cart'}>مشاهده ی سبد خرید</Link>
                                </div>
                            )}

                        </div>
                    )}

                </section>
            </div >
            <Footer />
        </div >

    )
}
export default verify