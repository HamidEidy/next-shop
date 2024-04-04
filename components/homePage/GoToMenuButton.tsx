'use client'

import Link from "next/link";

const MenuButton = (): JSX.Element => {
    return (
        <div className="bg-svg">

        <div className="container mx-auto w-5/6 lg:w-2/3 pt-12">
        <section className="flex justify-center gotoMenu text-white py-8 rounded-lg">
            <Link href={'/menu'} className="btn">مشاهده کامل منو و سفارش آنلاین</Link>
            </section>
        </div>
        </div>
    )
}
export default MenuButton;