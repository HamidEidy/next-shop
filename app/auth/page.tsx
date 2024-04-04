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
        <div className="relative flex justify-center bg-indigo-300">
            <div className="max-h-screen overflow-hidden top-0 left-0 bg-gray-200 flex justify-center items-center" dir="rtl">
                <video controls preload="auto" loop autoPlay>
                    <source src="/4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

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