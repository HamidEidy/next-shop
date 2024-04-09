'use client'
import CheckOtp from "@/components/auth/CheckOtp";
import LoginForm from "@/components/auth/LoginForm";
import { useEffect, useState } from "react";

const Auth = () => {
    const [auth, setAuth]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true)
    useEffect(() => {
        setAuth(true)
    }, [])
    return (
        <div className="relative flex justify-center bg-violet-500">
            <div className="h-screen w-[100vw] top-0 left-0" dir="rtl">
            </div >
            {auth ? (
                <LoginForm setAuth={setAuth} />
            ) : (
                <CheckOtp />
            )}
        </div>

    )
}
export default Auth;