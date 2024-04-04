'use client'
import { useFormStatus } from "react-dom"
import { VscLoading } from "react-icons/vsc";
export default function SubmitButton({ style, title }: { style: string, title: string }) {
   const { pending } = useFormStatus();

    return (
        <>
            {pending ?  <button className={style}><VscLoading className="animate-spin text-lg mx-auto" /></button>:
                <button className={style}>{title}</button>
            }
        </>
    )

}