'use server'
import { postFetch } from "@/utils/fetch";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function editClientDataForm(state: any, formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    if (name === '' || null) {
        return {
            status: 'nameerror',
            message: 'نام و نام خانوادگی را وارد کنید'
        }
    } else if (email === '' || null) {
        return {
            status: 'emailerror',
            message: 'ایمیل را وارد کنید'
        }
    }

    const token = cookies().get('token')
    const data = await postFetch('/profile/info/edit', { name, email }, { 'Authorization': `Bearer ${token!.value}` })
    if (data.status === 'success') {
        return {
            status: data.status,
            message: 'ویرایش موفقیت آمیز بود'
        }
    }
    else {
        return {
            status: data.status,
            message: data.message
        }
    }

}
const addAddress = async (state: any, formData: FormData) => {
    const token = cookies().get('token')
    const title = formData.get('title')
    const cellphone = formData.get('cellphone')
    const postal_code = formData.get('postal_code')
    const province_id = formData.get('province_id')
    const city_id = formData.get('city_id')
    const address = formData.get('address')
    const data = await postFetch('/profile/addresses/create', {
        title,
        cellphone,
        postal_code,
        province_id,
        city_id,
        address
    }, { 'Authorization': `Bearer ${token!.value}` })
    if (title === '') {
        return {
            status: 'titleerror',
            message: 'عنوان را وارد کنید'
        }
    }
    else if (cellphone === '') {
        return {
            status: 'cellphoneerror',
            message: 'شماره تماس را وارد کنید'
        }
    }
    else if (postal_code === '') {
        return {
            status: 'postal_code',
            message: 'کد پستی را وارد کنید'
        }
    }
    if (province_id === '') {
        return {
            status: 'provinceerror',
            message: 'استان را انتخاب کنید'
        }
    }
    if (city_id === '') {
        return {
            status: 'cityerror',
            message: 'شهر را وارد کنید'
        }
    }
    if (address === '') {
        return {
            status: 'addresserror',
            message: 'آدرس دقیق را وارد کنید'
        }
    }
    if (data.status === 'success') {
        revalidatePath('/profile/addresses')
        return {
            status: data.status,
            message: "آدرس جدید ایجاد شد",
        }
    } else {
        return {
            status: data.status,
            message: data.message
        }
    }

}
const addressEdit = async (state: any, formData: FormData) => {
    const token = cookies().get('token')
    const title = formData.get('title')
    const cellphone = formData.get('cellphone')
    const postal_code = formData.get('postal_code')
    const province_id = formData.get('province_id')
    const city_id = formData.get('city_id')
    const address = formData.get('address')
    const address_id = formData.get('address_id')
    const data = await postFetch('/profile/addresses/edit', {
        title,
        cellphone,
        postal_code,
        province_id,
        city_id,
        address,
        address_id
    }, { 'Authorization': `Bearer ${token!.value}` })
    if (title === '') {
        return {
            status: 'titleerror',
            message: 'عنوان را وارد کنید'
        }
    }
    else if (cellphone === '') {
        return {
            status: 'cellphoneerror',
            message: 'شماره تماس را وارد کنید'
        }
    }
    else if (postal_code === '') {
        return {
            status: 'postal_code',
            message: 'کد پستی را وارد کنید'
        }
    }
    if (province_id === '') {
        return {
            status: 'provinceerror',
            message: 'استان را انتخاب کنید'
        }
    }
    if (city_id === '') {
        return {
            status: 'cityerror',
            message: 'شهر را وارد کنید'
        }
    }
    if (address === '') {
        return {
            status: 'addresserror',
            message: 'آدرس دقیق را وارد کنید'
        }
    }
    if (data.status === 'success') {
        revalidatePath('/profile/addresses')
        return {
            status: data.status,
            message: "آدرس ویرایش شد",
        }
    } else {
        return {
            status: data.status,
            message: data.message
        }
    }

}
const addressDelete = async (id: number) => {
    const token = cookies().get('token')
    const data = await postFetch('/profile/addresses/delete', {address_id:id},  { 'Authorization': `Bearer ${token!.value}` })
    if (data.status === 'success') {
           revalidatePath('/profile/addresses')
        return {
            status: data.status,
            message: "آدرس مورد نظر حذف شد",
        }
    } else {
        return {
            status: data.status,
            message: data.message,
        }
    }
}
const logoutUser = async () =>{
    cookies().delete('token')
}
export { editClientDataForm, addAddress, addressEdit, addressDelete, logoutUser }