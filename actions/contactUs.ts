'use server'

import { postFetch } from "@/utils/fetch";

const contactUs = async(state:any, formData:any) =>{
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const text = formData.get('text');
    if (name === '') {
        return {
            status: 'name',
            message: "نام خود را وارد کنید"
        }
    }
        if (email === '') {
        return {
            status: 'email',
            message: "ایمیل خود را وارد کنید"
        }
    }
        if (subject === '') {
        return {
            status: 'subject',
            message: "موضوع پیام را وارد کنید"
        }
    }
    if (text === '') {
        return {
            status: 'text',
            message: "متن پیام را وارد کنید"
        }
    }
    
    const data = await postFetch('/contact-us', { name, email, subject, text });

    if (data.status === 'success') {
        return {
            status: data.status,
            message: "پیام شما با موفقیت ثبت شد",
        
        }
    } else {
        return {
            status: data.status,
            message:'خطا رخ داد، دوباره تلاش کنید',
        }
    }
}

export {contactUs}