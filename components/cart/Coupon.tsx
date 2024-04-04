import { useFormState } from "react-dom";
import SubmitButton from "../FormsSubmitButton";
import { checkCoupon } from "@/actions/cart";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Coupon = ({setCoupon}:any) => {
    const [state, addCoupon] = useFormState<any, any>(checkCoupon, {})
    useEffect(() => {
        if (state.status === 'success') {
            toast.success(state.message)
            setCoupon({
                code: state.code,
                percent: state.percent
            })
        }
        if (state.status === 'error') {
            toast.error(state.message)
        }
    }, [state])
    return (
        <form action={addCoupon}>
            <input name="code" className="border outline-none p-1 rounded-lg dark:bg-slate-400 dark:placeholder:text-slate-50" type="text" placeholder="کد تخفیف : test" />
            <SubmitButton style="btn ms-2" title="اعمال تخفیف" />
            {state?.status === 'empty' && <p className="text-red-500">{state.message}</p>}
        </form>
    )
}
export default Coupon;