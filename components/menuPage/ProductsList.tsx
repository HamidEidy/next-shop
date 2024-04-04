import Card from "@/components/Card";
import NotFoundProduct from "@/components/menuPage/NotFoundProduct";
import { getFetch } from "@/utils/fetch";

const ProductsList = async ({ params }: any) => {
    const data = await getFetch(`/menu?${params}`);
    return (
        <>
            {/* {data.data.products == '' && <NotFoundProduct />} */}
            {data.data.products.length > 0 ? (
                <div className="data lg:basis-3/4 grid grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.data.products.map((product: any) => (
                        <div>
                            <Card product={product} />
                        </div>
                    ))}

                </div>
            ) : (
               <NotFoundProduct />
            )}
        </>

    )
}
export default ProductsList;