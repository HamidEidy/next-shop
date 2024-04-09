'use client'
import { useFormState } from "react-dom"
import SubmitButton from "../FormsSubmitButton"
import { checkOtp } from "../../actions/login"
import { useContext, useEffect } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import ResendOtp from "./ResendOtp"
import AuthContext from "@/context/AuthContext"

const CheckOtp = () => {
    const [otpState, otpFormAction] = useFormState<any, any>(checkOtp, {});
    const { loginContext } = useContext<any>(AuthContext)
    const router = useRouter()
    useEffect(() => {
        if (otpState?.status === 'checked-otp') {
            loginContext(otpState.data)
            toast.success(otpState.message)
            router.push('/')
        }
    })

    return (
        <div dir="rtl" className="backdrop-blur-lg absolute mt-48 border rounded-lg shadow-lg p-12">
            <div>
                {/* <p className="text-4xl tst text-white mb-1">سلام !</p>
            <p className="text-gray-200 tst text-lg mb-1">خوش اومدی...</p> */}
                <p className="text-gray-100 text-md mb-1">کد ورود را وارد کنید</p>
                <div className="border rounded-lg p-5 mb-5 text-gray-300">
                    <p>API این پروژه</p>
                    <p>کد ورود ثابت 123456 رو ایجاد میکنه</p>
                    <p>با وارد کردن این عدد عضویت شما تکمیل خواهد شد</p>
                </div>

            </div>
            <form action={otpFormAction} className="flex flex-col gap-5">
                <input name="otp" autoFocus type="text" className="input border rounded-lg py-2 ps-3 text-lg outline-none text-gray-600 placeholder:text-gray-600" placeholder="کد ورود" />
                {otpState.status === 'error' && <p className="text-red-500">{otpState.message.otp}</p>}

                <SubmitButton style="btn" title="تایید" />
            </form>
            <ResendOtp />
        </div>
    )
}
export default CheckOtp