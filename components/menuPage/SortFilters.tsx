'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SortFilters = () =>{
    const searchParams = useSearchParams()
    const router = useRouter();
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams)
    const SortBy = (type: string) => {
        params.set('sortBy', type)
        router.replace(`${pathname}?${params.toString()}`)
    }
    return(
        <ul className="space-y-5">
        <li onClick={() => SortBy('bestseller')}
          className={searchParams.has('sortBy') && searchParams.get('sortBy') == 'bestseller' ? "cursor-pointer border-r px-2 dark:text-slate-100" : "cursor-pointer text-gray-700 dark:text-slate-100"}
        >پرفروش ها</li>
        <li  onClick={() => SortBy('max')}
          className={searchParams.has('sortBy') && searchParams.get('sortBy') == 'max' ? "cursor-pointer border-r px-2 dark:text-slate-100" : "cursor-pointer text-gray-700 dark:text-slate-100"}>گران ترین</li>
        <li  onClick={() => SortBy('min')}
          className={searchParams.has('sortBy') && searchParams.get('sortBy') == 'min' ? "cursor-pointer border-r px-2 dark:text-slate-100" : "cursor-pointer text-gray-700 dark:text-slate-100"}>ارزان ترین</li>
        <li  onClick={() => SortBy('sale')}
          className={searchParams.has('sortBy') && searchParams.get('sortBy') == 'sale' ? "cursor-pointer border-r px-2 dark:text-slate-100" : "cursor-pointer text-gray-700 dark:text-slate-100"}>با تخفیف</li>
    </ul>
    )
}
export default SortFilters;