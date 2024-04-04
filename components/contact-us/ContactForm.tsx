'use client'

import { useFormState } from "react-dom";
import SubmitButton from "../FormsSubmitButton";
import Title from "../Title";
import { contactUs } from "@/actions/contactUs";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";


const ContactForm = () => {
    const [state, formAction] = useFormState<any, any>(contactUs, {})
    const ref = useRef<HTMLFormElement>(null);
    useEffect(() => {
        if (state.status === 'success') {
            toast.success(state.message)
            ref.current?.reset();
        }
    }, [state])
    return (
        <div className="container mx-auto w-5/6 lg:w-2/3 py-12" dir="rtl">
            <section className="flex justify-center flex-col text-center">
                <Title title={'تماس با ما'} />
                <form ref={ref} action={formAction} className="flex flex-col gap-5">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <input name="name" type="text" className={state.status === 'name' ? "border border-red-500 rounded-lg basis-2/4 py-1 ps-3 outline-none bg-red-100 dark:placeholder:text-white  dark:border-red-500" : "border rounded-lg basis-2/4 py-1 ps-3 outline-none dark:bg-slate-400 dark:placeholder:text-white dark:border-0"} placeholder="نام و نام خانوادگی" />
                        <input name="email" type="text" className={state.status === 'email' ? "border border-red-500 rounded-lg basis-2/4 py-1 ps-3 outline-none bg-red-100 dark:placeholder:text-white  dark:border-red-500" : "border rounded-lg basis-2/4 py-1 ps-3 outline-none dark:bg-slate-400 dark:placeholder:text-white dark:border-0"} placeholder="ایمیل" />
                    </div>
                    <input name="subject" type="text" className={state.status === 'subject' ? "border border-red-500 rounded-lg basis-2/4 py-1 ps-3 outline-none bg-red-100 dark:placeholder:text-white  dark:border-red-500" : "border rounded-lg basis-2/4 py-1 ps-3 outline-none dark:bg-slate-400 dark:placeholder:text-white dark:border-0"} placeholder="موضوع پیام" />
                    <textarea name="text" className={state.status === 'text' ? "border border-red-500 rounded-lg basis-2/4 py-1 ps-3 outline-none bg-red-100 dark:placeholder:text-white  dark:border-red-500" : "border rounded-lg basis-2/4 py-1 ps-3 outline-none dark:bg-slate-400 dark:placeholder:text-white dark:border-0"} placeholder="متن پیام را بنویسید..." rows={5} />
                    <div>

                        <SubmitButton style="btn" title="ارسال پیام" />

                    </div>
                </form>
            </section>
        </div >
    )
}
export default ContactForm;