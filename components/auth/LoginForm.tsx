'use client'
import { useFormState } from "react-dom";
import SubmitButton from "../FormsSubmitButton";
import {login} from "../../actions/login";
import { useEffect } from "react";
import toast from 'react-hot-toast';


const LoginForm = ({ setAuth }: any) => {
    const [loginState, loginFormAction] = useFormState<any, any>(login, {})
    useEffect(() => {
        if (loginState.status === 'send-otp') {
            toast.success(loginState.message)
            setAuth(false)
        }
    }, [loginState])
    return (
        <div dir="rtl" className="backdrop-blur-lg absolute mt-48 space-y-8 border rounded-lg shadow-lg p-12">
            <div>
                <p className="text-4xl tst text-white mb-1">سلام !</p>
                <p className="text-gray-200 tst text-lg mb-1">خوش اومدی...</p>
                <p className="text-gray-300 text-md mb-1">برای ورود شماره موبایلت رو وارد کن</p>

            </div>
            <form action={loginFormAction} className="flex flex-col gap-5">
                <input name="cellphone" autoFocus type="text" className="input border rounded-lg py-2 ps-3 text-lg outline-none text-gray-600 placeholder:text-gray-600" placeholder="شماره موبایل" />
                {loginState.status === 'error' && <p className="text-red-500">{loginState?.message}</p>}

                <SubmitButton style="btn" title="دریافت کد ورود" />

            </form>
        </div>
    )
}
export default LoginForm;