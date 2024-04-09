'use server'
import { postFetch } from "@/utils/fetch";
import { cookies } from "next/headers";

const login = async (loginState:any, formData:any) => {

    const cellphone = formData.get('cellphone')
    if (cellphone === '' || null) {
        return {
            status: 'error',
            message: 'شماره تماس را وارد کنید'
        }
    }
    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone)) {
        return {
            status: 'error',
            message: "شماره تماس صحیح نیست"
        }
    }
    try {
        const data = await postFetch('/auth/login', { cellphone });
        if (data.status === 'success') {
            cookies().set({
                name: 'login_token',
                value: data.data.login_token,
                httpOnly: true,
                path: '/'
            });
            return {
                status: 'send-otp',
                message: 'کد ورود ارسال شد'
            }
        } else {
            return {
                status: data.status,
                message: data.message
            }
        }
    } catch (error) {
        return {
            status: 'error',
            message: 'خطایی رخ داد، دوباره تلاش کنید'
        }

    }
}
const checkOtp = async (otpState: number, formData: FormData) => {
    try {
        const otp = formData.get('otp');
        const logintoken = cookies().get('login_token');
        const login_token = logintoken!.value
        const data = await postFetch('/auth/check-otp', { otp, login_token })
     
        if (data.status === 'success') {
            cookies().delete({
                name: 'login_token',
                path: '/',
            });
            cookies().set({
                name: 'token',
                value: data.data.token,
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7, 
                path: '/'
            });
            return {
                status: 'checked-otp',
                message: 'ورود موفقیت آمیز بود',
                data: data.data.user
            };
        }else{
            return{
                status: data.status,
                message: data.message
            }
        }

    } catch (error) {
        return {
            status: 'error',
            message: 'ورود ناموفق، دوباره تلاش کنید'
        }

    }
}
const resendOtp = async (stateResendOtp: null, formData: any) => {
    try {
        const login_token = cookies().get('login_token');
        if (!login_token) {
            return {
                status: 'error',
                message: 'یکبار دیگر تلاش کنید'
            };
        }
        const data = await postFetch('/auth/resend-otp', { login_token: login_token.value });
        if (data.status === 'success') {
            cookies().set({
                name: 'login_token',
                value: data.data.login_token,
                httpOnly: true,
                path: '/'
            });
            return {
                status: 'reSend-otp',
                message: 'کد ورود دوباره برای شما ارسال شد',
            };
        } else {
            return {
                status: data.status,
                message: data.message,
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: 'error',
            message: 'خطایی رخ داده است. لطفا دوباره تلاش کنید.'
        };
    }
}
async function me() {
    const token = cookies().get('token')

    if (!token) {
        return {
            error: 'Not Authorized'
        }
    }

    const data = await postFetch('/auth/me', {}, {'Authorization': `Bearer ${token.value}`});

    if (data.status === 'success') {
        return {
            user: data.data
        }
    } else {
        return {
            error: "User Forbidden"
        }
    }

}
export { login, checkOtp,resendOtp, me };