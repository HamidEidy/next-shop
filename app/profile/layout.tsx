'use client'
import Footer from "@/components/layouts/Footer";
import LogoutButton from "@/components/profile/LogoutButton";
import { cookies } from "next/headers";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import { logoutUser } from "@/actions/profile";
import toast from "react-hot-toast";

const layout = ({ children }: any) => {
    const path = usePathname()
    const logout = () => {
        logoutUser()
        window.location.href = '/';
        toast.success('با موفقیت خارج شدید')
    }
    return (
        <>
            <div className="min-h-[100vh] bg-white flex flex-row" dir="rtl">
                {/* desktop navbar */}
                <header className="!bg-gray-300 basis-1/6 hidden justify-center lg:flex flex-row bg-whiteHeader dark:bg-slate-800 pt-8 shadow-lg">
                    <div className="w-full">
                        <ul className="flex flex-col text-md">
                            <Link href={'/profile'} className={path === '/profile' ? "bg-gray-400 p-2 ps-5 flex items-center" : "p-2 ps-5 flex items-center"}><CgProfile className="text-xl" /><span className="ms-2">اطلاعات کاربری</span>
                            </Link>
                            <Link href={'/profile/addresses'} className={path === '/profile/addresses' ? "bg-gray-400 p-2 ps-5 flex items-center" : "p-2 ps-5 flex items-center"}><FaLocationCrosshairs className="text-xl" /><span className="ms-2">آدرس ها</span></Link>
                            <Link href={'/profile/transactions'} className={path === '/profile/transactions' ? "bg-gray-400 p-2 ps-5 flex items-center" : "p-2 ps-5 flex items-center"}><AiOutlineTransaction className="text-xl" /><span className="ms-2">تراکنش ها</span></Link>
                            <Link href={'/'} className=" p-2 ps-5 flex items-center"><RiArrowGoBackLine className="text-xl" /><span className="ms-2">بازگشت به صفحه اصلی </span></Link>
                            <LogoutButton />
                        </ul>
                    </div>
                </header>

                {/* mobile navbar */}
                <div className="fixed bottom-0 w-full z-[5000] " dir="ltr">
                    <div className="block lg:hidden w-full h-[10px] bg-white"></div>
                    <div className="navigation  bg-gray-800 flex lg:hidden w-full">
                        <ul>
                            <li className="list">
                                <button  onClick={logout}>
                                    <span className="icon">
                                    <IoMdLogOut />
                                    </span>
                                </button>
                            </li>
                            <li className="list">
                                <Link href={'/'}>
                                    <span className="icon">
                                        <RiArrowGoBackLine />
                                    </span>
                                </Link>
                            </li>

                            <li className={path === '/profile/transactions' ? 'active list' : 'list'}>
                                <Link href={'/profile/transactions'}>
                                    <span className="icon">
                                        <AiOutlineTransaction />
                                    </span>
                                </Link>
                            </li>
                            <li className={path === '/profile/addresses' ? 'active list' : 'list'}>
                                <Link href={'/profile/addresses'}>
                                    <span className="icon">
                                        <FaLocationCrosshairs />
                                    </span>
                                </Link>
                            </li>
                            <li className={path === '/profile' ? 'active list' : 'list'}>
                                <Link href={'/profile'}>
                                    <span className="icon">
                                        <CgProfile />
                                    </span>
                                </Link>
                            </li>
                            <div className="indicator"><span></span></div>
                        </ul>
                    </div>

                </div>



                <div className="w-full lg:basis-5/6">
                    {children}
                </div>
            </div>

        </>
    )
}
export default layout;