'use client'

import { useEffect, useState } from "react";
import SubmitButton from "../FormsSubmitButton";
import toast from "react-hot-toast";
import { resendOtp } from "@/actions/login";
import { useFormState } from "react-dom";
const ResendOtp = () => {
    const [stateResendOtp, formActionresendOtp] = useFormState<any, any>(resendOtp, {});
    const [second, setSecond] = useState<number>(15)
    useEffect(() => {
        const interval = setInterval(() => {
            if (second > 0) {
                setSecond(second - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [second])
    useEffect(() =>{
        if (stateResendOtp.status === 'reSend-otp') {
            toast.success(stateResendOtp.message)
            setSecond(15)
        }
        if (stateResendOtp.status === 'error') {
            toast.error(stateResendOtp.message)
        }
    }, [stateResendOtp])
    return (
        <form action={formActionresendOtp}>
            {second > 0 ? (
            
                <p  className="btn mt-5 !w-full !bg-gray-700 !text-white text-center">{second}</p>
                
            ) : (

                <SubmitButton title="ارسال مجدد کد" style="btn mt-5 !w-full !bg-gray-700 !text-white" />
            )}
        </form>
    )
}
export default ResendOtp;