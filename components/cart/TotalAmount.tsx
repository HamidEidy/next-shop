import { numberFormat } from "@/utils/helper"

const TotalAmount = ({datas , coupon}:any) =>{
    return(
        <div className="border rounded-lg p-2">
        <div className="border-b flex justify-between py-2">
            <span>مبلغ کل</span>
            <span>
                {numberFormat(datas.reduce((total: any, product: any) => {
                    return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                }, 0))}
                تومان
            </span>
        </div>
        <div className="border-b flex justify-between py-2">
            <span>{coupon.percent} درصد تخفیف</span>
            <span>
                {numberFormat(((datas.reduce((total: any, product: any) => {
                    return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                }, 0)) * coupon.percent) / 100)}
            </span>
        </div>
        <div className=" flex justify-between py-2">
            <span>مبلغ قابل پرداخت</span>
            <span>

                {numberFormat((datas.reduce((total: any, product: any) => {
                    return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                }, 0)) - (((datas.reduce((total: any, product: any) => {
                    return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
                }, 0)) * coupon.percent) / 100))}
            </span>
        </div>
    </div>
    )
}
export default TotalAmount;