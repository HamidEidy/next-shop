'use client'
import { IoMdLogOut } from "react-icons/io";

import { logoutUser } from "@/actions/profile"
import toast from "react-hot-toast"

const LogoutButton = () => {
    const logout = () => {
        logoutUser()
        window.location.href = '/';
        toast.success('با موفقیت خارج شدید')
    }
    return (
        <li className="border-x p-2 ps-5 cursor-pointer flex items-center" onClick={logout}>
            <IoMdLogOut className="text-xl" />
            <span className="ms-2">
                خروج از حساب کاربری
            </span>

        </li>

    )
}
export default LogoutButton;