'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const [term, setTerm] = useState('');
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams()
    const searchHandler = () => {
        const params = new URLSearchParams(searchParams);
        params.set('search', term)
        router.replace(`${pathname}?${params.toString()}`)
        setTerm('')
    }
    return (
        <div className="relative">
            <input onChange={(e) => setTerm(e.target.value)} value={term} type="text" placeholder="دنبال چی میگردی؟" className="relative w-full bg-searchBox dark:bg-slate-500 dark:placeholder:text-white placeholdrer:text-whiteNav  focus:outline-none ps-6 py-2 rounded-lg text-sm" />
            <p className="hidden ms-2 text-red-500 mt-2">مقدار مورد نظر جهت جستجو را وارد کنید</p>
            <FiSearch className="absolute left-3 top-3 cursor-pointer" onClick={() => searchHandler()} />
        </div>

    )
}
export default Search;