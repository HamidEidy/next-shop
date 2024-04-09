
import SuggestionTab from "@/components/SuggestionTab";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import ShowProduct from "@/components/slug/ShowProduct";
import { getFetch } from "@/utils/fetch";
const product = async ({ params }: any) => {
    const slugProduct = await getFetch(`/products/${params.slug}`)
    return (
        <>
            <Header />
            <div className="container mx-auto w-5/6 lg:w-2/3 py-12 mb-12 text-center lg:text-start" dir="rtl">
                <ShowProduct slugProduct={slugProduct} />
            </div>
            <div style={{ height: '100px', width: '100vw' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100px', width: '100vw' }}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ fill: '#eceeef7f' }}></path></svg></div>
            <SuggestionTab />
            <Footer />
        </>
    )
}
export default product;