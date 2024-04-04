import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./addToCartButton";
import { getBlurDataURL, numberFormat } from "@/utils/helper";

const Card = ({ product }: any) => {
    return (
        <div className='bg-whiteHeader dark:bg-slate-800 border dark:border-0 rounded-lg p-2 text-start space-y-3'>
            <Image src={product.primary_image} alt="img" width={0}
                height={0}
                sizes="100vw"
                blurDataURL={getBlurDataURL()}
                className="hover:rotate-1 transition"
                style={{ width: '100%', height: '200px', borderRadius: '5px' }} />
            <h1 className='font-bold text-gray-700 cursor-pointer hover:text-gray-800 dark:text-slate-100 dark:hover:text-white'>
                <Link href={`${product.slug}`}>
                    {product.name}
                </Link>
            </h1>
            <p className="card-text text-gray-600 dark:text-slate-300">{product.description}</p>
            <hr />
            <div className="flex justify-between items-center pb-1">
                <small className="text-muted text-gray-700 dark:text-slate-100">
                    {numberFormat(product.price)} تومان
                </small>
                <AddToCartButton product={product}/>
            </div>
        </div>
    )
}
export default Card;