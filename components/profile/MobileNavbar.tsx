'use client'
import { usePathname } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import { logoutUser } from "@/actions/profile";
import toast from "react-hot-toast";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";

const MobileNavbar = () => {
    const logout = () => {
        logoutUser()
        window.location.href = '/';
        toast.success('با موفقیت خارج شدید')
    }
    const path = usePathname()
    return (
        <div className="fixed bottom-0 w-full z-[5000] " dir="ltr">
            <div className="block lg:hidden w-full h-[10px] bg-white"></div>
            <div className="navigation  bg-gray-800 flex lg:hidden w-full">
                <ul>
                    <li className="list">
                        <button onClick={logout}>
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
    )
}
export default MobileNavbar;