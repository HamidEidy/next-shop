'use server'
import { getFetch, postFetch } from "@/utils/fetch"
import { cookies } from "next/headers"

const checkCoupon = async (state:any, formData:any) => {
    const code = formData.get('code')
    if (code === '') {
        return {
            status: 'empty',
            message: 'کد تخفیف را وارد کنید'
        }
    }
    const token = cookies().get('token')
    const data = await postFetch('/check-coupon', { code }, { 'Authorization': `Bearer ${token?.value}` })
    if (data.status === 'success') {
        console.log('coup :', data);

        return {
            status: data.status,
            message: 'کد تخفیف اعمال شد',
            percent: data.data.percentage,
            code
        }
    } else {
        return {
            status: 'error',
            message: 'کد تخفیف صحیح نیست'
        }
    }
}

const getAddresses = async () => {
    const token = cookies().get('token');
    const data = await getFetch('/user/addresses', { 'Authorization': `Bearer ${token?.value}` })
    return data.data;

}

const payment = async (state:any, formData:any) => {
    const cart = formData.get('cart')
    const coupon = formData.get('coupon')
    const address_id = formData.get('address_id')
    const token = cookies().get('token')
    const data = await postFetch('/payment/send', { cart: JSON.parse(cart), coupon, address_id }, { 'Authorization': `Bearer ${token?.value}` })

    if (address_id === '') {
        return {
            status: 'address',
            message: 'وارد کردن آدرس الزامی است'
        }
    } else if (data.status === 'error') {
        return {
            status: data.status,
            message: data.message
        }
    } else if (data.status === 'success') {
        return {
            status: data.status,
            message: 'درحال انتقال به درگاه پرداخت',
            url: data.data.url,
        }
    } else {
        return {
            status: state.status,
            message: state.message
        }
    }
}

const paymentVerify = async (trackId:any, status:any) => {
    const token = cookies().get('token')

    const data = await postFetch('/payment/verify', { token: trackId, status }, { 'Authorization': `Bearer ${token?.value}` })
    
    if (data.status === 'success') {
        return {
            status: data.status,
            payment: data.data,
        }
        
    }
    else {
        return {
            status: data.status,
            message: 'خطایی رخ داد، دوباره تلاش کنید'
        }
    }
}
export { checkCoupon, getAddresses, payment, paymentVerify }