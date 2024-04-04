import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Pagination from "@/components/menuPage/Pagination";
import { getFetch } from "@/utils/fetch";
import { Suspense } from "react";
import ProductsList from "../../components/menuPage/ProductsList";
import Loading from "@/components/Loading";
import Category from "@/components/menuPage/Category";
import SortFilters from "@/components/menuPage/SortFilters";
import Search from "@/components/menuPage/Search";

const menu = async ({ searchParams }: any) => {
    const params = new URLSearchParams(searchParams)

    const data = await getFetch(`/menu?${params.toString()}`)
    const category = await getFetch('/categories')


    return (
        <div>
            <Header />
            <div className="container mx-auto w-5/6 lg:w-2/3 py-12 mb-12" dir="rtl">
                <section className="flex justify-center flex-col lg:flex-row lg:gap-x-5">
                    <div className="options  space-y-5 lg:basis-1/4">
                        <div className="category py-6 space-y-5 justify-between items-center bg-whiteHeader dark:bg-slate-800 dark:text-white p-4  rounded-lg shadow-lg">
                            <p className="text-xl tst text-gray-700 dark:text-slate-50">دسته بندی</p>
                            <hr />
                            <Category category={category} />
                        </div>
                        <div className="filters  py-6 !mb-5 space-y-5 justify-between items-center bg-whiteHeader dark:bg-slate-800 dark:text-white p-4  rounded-lg shadow-lg">
                            <p className="text-xl tst text-gray-700 dark:text-slate-50">مرتب سازی بر اساس</p>
                            <hr />
                            <SortFilters />
                        </div>
                        <div className="filters  py-6 !mb-5 space-y-5 justify-between items-center bg-whiteHeader dark:bg-slate-800 dark:text-white p-4  rounded-lg shadow-lg">
                            <p className="text-xl tst text-gray-700 dark:text-slate-50">جستجو در منوی محصولات</p>
                  <Search />
                       </div>
                    </div>

                    <Suspense key={params.toString()} fallback={<Loading />}>
                        <ProductsList params={params.toString()} />
                    </Suspense>

                </section>
                <Pagination links={data.data.meta.links} />
            </div>
            <Footer />
        </div>
    )
}
export default menu;