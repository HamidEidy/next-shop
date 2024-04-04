'use client'
import { useFormState } from "react-dom";
import SubmitButton from "../FormsSubmitButton";
import { payment } from "@/actions/cart";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Payment = ({ cart, coupon, addressId }: any) => {
    const [state, formAction] = useFormState<any, any>(payment, {})
    const router = useRouter()
    useEffect(() => {     
        if (state.status === 'success') {
            toast.success(state.message)
            router.push(state.url)
        }
        if (state.status === 'error') {
            toast.error(state.message.error)
        }
        if (state.status === 'address') {
            toast.error(state.message)
        }
    }, [state])
    return (
        <form action={formAction}>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <input type="hidden" name="coupon" value={coupon.code} />
            <input type="hidden" name="address_id" value={addressId} />
            <SubmitButton style="btn mt-2" title="تکمیل پرداخت" />
        </form>
    )
}
export default Payment;