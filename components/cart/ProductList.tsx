import { numberFormat, salePercent } from "@/utils/helper";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { decrement, increment, removeFromCart } from "@/redux/cart/action";
import toast from "react-hot-toast";

const ProductList = ({item}:any) => {
    const dispatch = useDispatch();
    return (
        <tr key={item.id} className="border-b">
            <td className="flex justify-center"><Image src={item.primary_image} width={100} height={0} alt="product-image"
                style={{ maxHeight: '50px' }}
            /></td>
            <td className="text-center">{item.name}</td>
            <td className="text-center">
                {item.is_sale ? (
                    <>
                        <span>{numberFormat(item.sale_price)}</span>
                        <del className="me-1">{numberFormat(item.price)}</del>
                    </>
                ) : (
                    <span>{numberFormat(item.price)}</span>
                )}
                <span>تومان</span>

                {item.is_sale &&
                    <div className="text-danger fs-6">
                        {salePercent(item.price, item.sale_price)}% تخفیف
                    </div>}
            </td>
            <td className="text-center">
                <div className="flex row justify-center">
                    <CiCirclePlus className="text-2xl cursor-pointer" onClick={() => item.qty < item.quantity && dispatch(increment(item.id))} />
                    <span className="px-0 lg:px-3">{item.qty}</span>
                    <IoIosRemoveCircleOutline className="text-2xl cursor-pointer" onClick={() => item.qty > 1 && dispatch(decrement(item.id))} />
                </div>
            </td>
            <td className="text-center">
                {item.is_sale ? (
                    <span>{numberFormat(item.sale_price * item.qty)}</span>
                ) : (<span>{numberFormat(item.price * item.qty)}</span>)}

                <span className="ms-1">تومان</span>
            </td>
            <td>
                <span className="flex justify-center">
                    <TiDeleteOutline className="text-xl cursor-pointer text-red-500"
                        onClick={() => { dispatch(removeFromCart(item.id)); toast.error(`${item.name} از سبد خرید حذف شد !`) }}
                    />
                </span>

            </td>
        </tr>
    )
}
export default ProductList;