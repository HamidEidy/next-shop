'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import Searchbox from "../homePage/header/Searchbox";
import ChangeTheme from "../homePage/header/ChangeTheme";
import CartButton from "../homePage/header/CartButton";
import Navbar from "../homePage/navbar/Navbar";
import Logo from "../homePage/header/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { getFetch } from "@/utils/fetch";
import AuthContext from "@/context/AuthContext";
import { numberFormat } from "@/utils/helper";
const Header = () => {
    const [active, setActive] = useState<any>();
    const [term, setTerm] = useState('');
    const [conseq, setconseq] = useState<any>(null);
    const [dark, setDark] = useState(localStorage.getItem('theme') ? true : false);
    // const [dark, setDark] = useState(false)
    const { user } = useContext<any>(AuthContext)

    useEffect(() => {
        if (active) {
            document.getElementsByTagName("html")[0].classList.add('overflow-hidden');
        } else {
            document.getElementsByTagName("html")[0].classList.remove('overflow-hidden');
        }
    }, [active])
    const closeMenu = () => {
        setActive(false)

    }
    const openMenu = () => {
        setActive(true)

    }
    const handler = async () => {
        console.log('tool :', term.length);

        if (term.length > 2) {
            const datas = await getFetch(`/menu?search=${term}`)
            setconseq(datas.data.products)
        }
        else {
            setconseq(null)
        }
    }

    const myElementRef = useRef();




    const route = usePathname();
    return (
        <div className="container mx-auto bg-darkHeader w-5/6 lg:w-2/3 mt-5" dir="rtl">
            {/* desktop header */}
            <header className="hidden lg:flex flex justify-between items-center bg-whiteHeader dark:bg-slate-800 p-8  rounded-lg shadow-lg">
                <Logo />
                <Searchbox term={term} setTerm={setTerm} handler={handler} />

                <div className="flex items-center">
                    <ChangeTheme dark={dark} setDark={setDark} />
                    <CartButton />
                </div>
            </header>
            <div className="absolute -mt-[20px] text-center hidden ps-12 z-[10000] lg:flex justify-center  w-2/3  mx-auto text-center justify-center">
                <div className="w-2/3 bg-searchBox  dark:bg-slate-400 shadow-lg rounded-lg ">
                    {conseq === null ? (<></>) : (
                        <div className="flex px-8 flex-col">
                            {conseq.map((obj: any) => (
                                <div className="py-5 border-b border-white flex flex-row items-center">
                                    <Image src={obj.primary_image} alt="img" height={40} width={100} className="rounded-lg" />
                                    <div className="flex flex-col text-start ps-8">
                                        <p>
                                            <Link href={`${obj.slug}`}>
                                                {obj.name}
                                            </Link>
                                        </p>
                                        <p className="text-sm text-gray-600">{obj.description}</p>
                                    </div>

                                    <small className="text-gray-700 ms-5">
                                        {numberFormat(obj.price)} تومان
                                    </small>
                                </div>


                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Navbar />




            {/* mobile header */}
            <header className=" flex lg:hidden flex justify-between items-center bg-whiteHeader dark:bg-slate-800 dark:text-white p-4  rounded-lg shadow-lg">
                <RxHamburgerMenu className="cursor-pointer text-xl" onClick={openMenu} />
                <h1>فست فود</h1>
            </header>
            <div ref={myElementRef} className={active ? "elem bg-white dark:bg-slate-800 dark:text-white shadow absolute fixed right-0 top-0 h-full w-3/4 z-[2000] bg-fixed !translate-x-[0] transition duration-[1s]" : "elem bg-white dark:bg-slate-800 dark:text-white shadow absolute fixed right-0 top-0 h-full w-3/4 z-[2000] bg-fixed !translate-x-[100%] transition duration-[1s]"}>
                <span className="absolute top-0 left-0 p-5" onClick={closeMenu}>
                    <IoCloseOutline className="cursor-pointer text-2xl" />
                </span>
                <div className="flex flex-col justify-center my-12 items-center space-y-8">
                    <div className="flex items-center mt-8">
                        <a href="/">
                            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/external-pizza-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png" alt="external-pizza" />
                        </a>
                        <h1 className="text-4xl text-gray-700 dark:text-gray-100 ms-2 tst">فست فود</h1>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-5 m-8">
                    <div className="flex items-center">
                        <ChangeTheme dark={dark} setDark={setDark} />

                        <span className="text-gray-700 dark:text-white font-bold">

                            {dark ? 'تغییر تم به روشن' : 'تغییر تم به تاریک'}
                        </span>

                    </div>
                    <div className="flex items-center">
                        <CartButton />
                        سبد خرید

                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-5 m-10 space-y-5">
                    <Link href={'/'} className={route === '/' ? ' cursor-pointer text-black dark:text-white border-r ps-2' : ' cursor-pointer'}>صفحه اصلی</Link>
                    <Link href={'/menu'} className={route === '/menu' ? ' cursor-pointer text-black dark:text-white border-r ps-2' : ' cursor-pointer'}>منوی محصولات</Link>
                    <Link href={'/contact-us'} className={route === '/contact-us' ? ' cursor-pointer text-black dark:text-white border-r ps-2' : ' cursor-pointer'}>تماس با ما</Link>
                    <Link href={'/branches'} className={route === '/branches' ? ' cursor-pointer text-black dark:text-white border-r ps-2' : ' cursor-pointer'}>شعب و نمایندگی</Link>
                    {user ? (
                        <Link href={'/profile'} className={route === '/auth' ? ' cursor-pointer text-black dark:text-white border-r ps-2' : ' cursor-pointer'}>
                            پروفایل
                        </Link>
                    ) : (
                        <Link href={'/auth'} className={route === '/auth' ? 'cursor-pointer text-black dark:text-white border-r ps-2' : ' cursor-pointer'}>
                            عضویت
                        </Link>
                    )}


                </div>
            </div>


        </div>
    )
}
export default Header;