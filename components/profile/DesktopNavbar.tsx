import LogoutButton from "@/components/profile/LogoutButton";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const DesktopNavbar = () =>{
    const path = usePathname()
    return(
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
    )
}
export default DesktopNavbar;