import { getFetch } from "@/utils/fetch";
import ReactTab from "./ReactTab";
import Title from "../../Title";
const Tabsection = async () => {
    const Product = await getFetch('/products/products-tabs');
    return (
        <div dir="rtl">
            <div style={{ height: '100px', width: '100vw' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100px', width: '100vw' }}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ fill: '#eceeef7f' }}></path></svg></div>
            <div className="bg-svg">
                <div className="container mx-auto w-5/6 lg:w-2/3 pb-12">
                    <section className="flex justify-center flex-col text-center">
                        <Title title={'منوی محصولات'} />
                        <ReactTab tabPanel={Product.data.tabPanel} tabList={Product.data.tabList} />
                    </section >
                </div>
            </div>
        </div>

    )
}
export default Tabsection;