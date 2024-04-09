import { getBlurDataURL, numberFormat } from "@/utils/helper";
import Image from "next/image";
import IncrementProductButton from "@/components/IncrementProductButton";
const ShowProduct = ({slugProduct }:any) =>{
    return(
        <section className="flex lg:items-center justify-center flex-col lg:flex-row lg:gap-x-5">
        <div className="basis-2/4 space-y-4">
            <h1 className="tst text-5xl text-gray-800 dark:text-slate-50">{slugProduct?.data?.name}</h1>
            <p className="text-lg text-gray-600 dark:text-slate-100">{slugProduct?.data?.description}</p>
            <div className="flex justify-between">
                <h5 className="text-xl flex items-center dark:text-slate-50">
                    {slugProduct?.data?.is_sale ? (
                        <>
                            <span>{numberFormat(slugProduct?.data?.sale_price)}</span>
                            <del className="me-1">{numberFormat(slugProduct?.data?.price)}</del>
                        </>
                    ) : (
                        <span className="tst text-4xl text-gray-700 dark:text-slate-50">{numberFormat(slugProduct?.data?.price)}</span>

                    )}
                    <div className="ms-2 text-gray-700 dark:text-slate-200 flex flex-col -space-y-3 text-center">
                        <span>تـــــو</span>
                        <span>مان</span>
                    </div>
                </h5>
                <div className="flex flex-col">
                    <IncrementProductButton product={slugProduct.data} />

                </div>
            </div>
        </div>
        <div className="basis-1/4 flex justify-center">
            <Image className="rounded-lg shadow-lg mt-8 lg:mt-0"
                src={slugProduct?.data?.primary_image}
                blurDataURL={getBlurDataURL()}
                width={300} height={0} alt={'product'}
                style={{height: '200px' }} />
        </div>
    </section>
    )
}
export default ShowProduct;