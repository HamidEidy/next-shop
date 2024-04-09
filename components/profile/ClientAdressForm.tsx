'use client'

import { useEffect, useState } from "react";
import SubmitButton from "../FormsSubmitButton";
import { useFormState } from "react-dom";
import { addressDelete, addressEdit } from "@/actions/profile";
import toast from "react-hot-toast";

const ClientAddressForm = ({ cities, provinces, address }: any) => {
    const [filterCity, setFiltercity] = useState(cities)
    const [state, editForm] = useFormState<any, any>(addressEdit, {})
    console.log(state);

    const changeCities = (e:any) => {
        setFiltercity(cities.filter((city:any) => city.province_id == e.target.value));
    }
    useEffect(() => {
        if (state.status === 'success') {
            toast.success(state.message)
        }
    }, [state])
    useEffect(() =>{
        document.getElementsByTagName("html")[0].classList.remove('overflow-hidden');
    }, [])
    
    const DeleteAddress = async (e: any) => {
        e.preventDefault();
        const delet = await addressDelete(address.id)
        if (delet.status === 'success') {
            toast.success(delet.message)
        } else {
            console.log(delet.message);

        }
    }
    return (
        <form action={editForm} className="border p-12 flex flex-col w-full space-y-4 rounded-lg shadow ">
            <div className="flex flex-col md:flex-row gap-4">
                <div className=" basis-1/3 flex flex-col">
                    <label htmlFor="name">عنوان</label>
                    <input defaultValue={address.title} type="text" name="title" className="outline-none border rounded-lg ps-2 py-1" />

                </div>
                <div className="basis-1/3 flex flex-col">

                    <label htmlFor="email">شماره تماس</label>
                    <input defaultValue={address.cellphone} type="text" name="cellphone" className="outline-none border rounded-lg ps-2 py-1" />
                </div>
                <div className="basis-1/3 flex flex-col">

                    <label htmlFor="email">کد پستی</label>
                    <input defaultValue={address.postal_code} type="postal_code" name="postal_code" className="outline-none border rounded-lg ps-2 py-1" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="basis-1/2 flex flex-col">

                    <label htmlFor="email">استان</label>
                    <select name="province_id" defaultValue={address.province_id} onChange={changeCities} className="bg-white outline-none border rounded-lg ps-2 py-1">
                        {provinces.map((province:any) => (<option key={province.id} value={province.id}>{province.name}</option>))}
                    </select>

                </div>

                <div className="basis-1/2 flex flex-col">

                    <label htmlFor="email">شهر</label>
                    <select name="city_id" defaultValue={address.city_id} className="bg-white outline-none border rounded-lg ps-2 py-1">
                        {filterCity.map((city:any) => (<option key={city.id} value={city.id}>{city.name}</option>))}
                    </select>
                </div>

            </div>
            <div>
                <div className="flex flex-col">

                    <label htmlFor="address">آدرس</label>
                    <textarea name="address" defaultValue={address.address} className="outline-none border rounded-lg ps-2 py-1" />
                </div>
                <input className="hidden" name="address_id" defaultValue={address.id}></input>
            </div>
            <div className="flex justify-between">
                <SubmitButton title="ویرایش" style="btn w-20" />
                <button className="btn !bg-red-400" onClick={DeleteAddress}>حذف آدرس</button>

            </div>
        </form>

    )
}
export default ClientAddressForm;