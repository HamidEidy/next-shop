'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Category = ({ category }:any) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const changeCategory = (id: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('category', id)
        params.delete('page')
        router.replace(`${pathname}?${params.toString()}`)


    }
    return (
        <ul className="space-y-5">
            {category.data.map((item: any) => (
                <li className={searchParams.has('category') && searchParams.get('category') == item.id ? "cursor-pointer border-r px-2 dark:text-slate-100" : "cursor-pointer text-gray-700 dark:text-slate-100"}
                    key={item.id} onClick={() => changeCategory(item.id)}>{item.name}</li>
            ))}
        </ul>
    )
}
export default Category;