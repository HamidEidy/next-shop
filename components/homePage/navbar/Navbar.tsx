'use client'
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navbar = () => {
    const route = usePathname();
    const { user } = useContext<any>(AuthContext)
    
    return (

        <nav className="hidden lg:block bg-whiteNav w-5/6 rounded-b-lg bg-whiteHeader p-4 mx-auto text-gray-700 shadow-lg"
        >
            <ul className="flex justify-around px-5">
                <div className="flex gap-14">
                    <Link href={'/'} className={route === '/' ? 'hover:text-black cursor-pointer text-black' : 'hover:text-black cursor-pointer'}>صفحه اصلی</Link>
                    <Link href={'/menu'} className={route === '/menu' ? 'hover:text-black cursor-pointer text-black' : 'hover:text-black cursor-pointer'}>منوی محصولات</Link>
                    <Link href={'/contact-us'} className={route === '/contact-us' ? 'hover:text-black cursor-pointer text-black' : 'hover:text-black cursor-pointer'}>تماس با ما</Link>
                    <Link href={'/branches'} className={route === '/branches' ? 'hover:text-black cursor-pointer text-black' : 'hover:text-black cursor-pointer'}>شعب و نمایندگی</Link>

                </div>
                {user ? (
                    <Link href={'/profile'} className={route === '/auth' ? 'hover:text-black cursor-pointer text-black' : 'hover:text-black cursor-pointer'}>
                        پروفایل
                    </Link>
                ) : (
                    <Link href={'/auth'} className={route === '/auth' ? 'hover:text-black cursor-pointer text-black' : 'hover:text-black cursor-pointer'}>
                        عضویت
                    </Link>
                )}


            </ul>

        </nav>
    )
}
export default Navbar;