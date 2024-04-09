import { MdOutlineRemoveShoppingCart } from "react-icons/md";
const EmptyCartAlert = () =>{
    return(
        <div className="container mx-auto w-5/6 lg:w-2/3 py-12 mb-12" dir="rtl">
                    <section className="flex justify-center flex-col text-center">
                        <div className="flex justify-center my-8">
                            <MdOutlineRemoveShoppingCart className="text-6xl dark:text-slate-100" />
                        </div>
                        <p className="dark:text-slate-200 text-2xl">سبد خرید خالی است</p>
                    </section>

                </div>
    )
}
export default EmptyCartAlert;