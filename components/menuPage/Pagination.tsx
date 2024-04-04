'use client'
import { GrNext, GrPrevious } from "react-icons/gr";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Pagination = ({ links }: any) => {
    const pathName = usePathname()
    const router = useRouter();
    const searchParams = useSearchParams()
    const changePage = (page: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page)
        router.replace(`${pathName}?${params.toString()}`)

    }
    return (
        <div className="lg:w-3/4 lg:float-left text-center mt-8">
            <ul className="flex justify-center gap-8 items-center text-gray-700 ">
                <GrNext  className="dark:text-slate-200"/>
                {links.slice(1, -1).map((item: any, index: number) => (
                    <li key={index}>
                        <button onClick={() => changePage(item.label)} className={item.active ? "tst border-b border-gray-900 dark:text-slate-100 dark:border-slate-100" : "dark:text-slate-50"}>{item.label}</button>
                    </li>

                ))}
                <GrPrevious className="dark:text-slate-200" />

            </ul>
        </div>
    )
}
export default Pagination;