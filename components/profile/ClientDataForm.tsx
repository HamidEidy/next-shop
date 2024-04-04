'use client'

import { useEffect } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "../FormsSubmitButton";
import { editClientDataForm } from "@/actions/profile";
import toast from "react-hot-toast";

const ClientDataForm = ({ user }: any) => {
    const [state, formAction] = useFormState<any, any>(editClientDataForm, {})
    console.log(state);
    useEffect(() => {
        if (state.status === 'success') {
            toast.success(state.message)
        }
    }, [state])
    return (
   <>
   <p className="bg-gray-800 text-white tst p-5">پروفایل کاربری</p>
        <form action={formAction} className="p-12 flex flex-col space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col basis-1/4">
                    <label htmlFor="name">نام و نام خانوادگی</label>
                    <input defaultValue={user.data.name} type="text" name="name" className="outline-none border rounded-lg ps-2 py-1" placeholder="نام و نام خانوادگی" />
                    {state?.status === 'nameerror' && <p className="text-red-500">{state.message}</p>}
                </div>

                <div className="flex flex-col basis-1/4">

                    <label htmlFor="email">ایمیل</label>
                    <input defaultValue={user.data.email} type="text" name="email" className="outline-none border rounded-lg ps-2 py-1" placeholder="ایمیل" />
                    {state?.status === 'emailerror' && <p className="text-red-500">{state.message}</p>}
                </div>

            </div>
            <div className="flex flex-col  lg:flex-row">
                <div className="flex flex-col basis-1/4" >
                    <label htmlFor="cellphone">شماره تماس</label>
                    <input readOnly defaultValue={user.data.cellphone} type="text" name="cellphone" className="outline-none border rounded-lg ps-2 py-1 bg-gray-100" placeholder="شماره تماس" />
                </div>
                {state?.status === 'error' && <p className="text-red-500">{state.message?.email}</p>}

            </div>
            <SubmitButton style="btn w-20" title="ویرایش" />

        </form>
   </>
    )
}
export default ClientDataForm;