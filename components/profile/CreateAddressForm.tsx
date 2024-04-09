'use client'
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import SubmitButton from "../FormsSubmitButton";
import { useFormState } from "react-dom";
import { addAddress } from "@/actions/profile";
import toast from "react-hot-toast";
const CreateAddressForm = ({ cities, provinces }: any) => {
    const [filterCity, setFiltercity] = useState(cities)
    const [state, createAddress] = useFormState<any, any>(addAddress, {})


    const changeCities = (e:any) => {
        setFiltercity(cities.filter((city:any) => city.province_id == e.target.value));
    }
    const ref = useRef<HTMLFormElement>(null);
    useEffect(() => {
        if (state.status === 'success') {
            toast.success(state.message)
            ref.current?.reset();
          setActive(false)
          document.getElementsByTagName("html")[0].classList.remove('overflow-hidden');
        }
    }, [state])
    const [active , setActive] = useState(false)
    const openModal = () =>{
        setActive(true)
        document.getElementsByTagName("html")[0].classList.add('overflow-hidden');
    }
    const closeMenu = () => {
        setActive(false)
        document.getElementsByTagName("html")[0].classList.remove('overflow-hidden');

    }
    return (

        <>
            <div className="absolute  left-0 -top-[45px]">
            <button onClick={openModal} className=" tst text-white me-5 border-b">افزودن آدرس جدید</button>
            </div>
            <form ref={ref} action={createAddress} className={active ? "lg:w-[20vw] -translate-x-[0] absolute z-[100] !h-[100vh] bg-slate-800 !top-0 !left-0 p-12 flex flex-col space-y-4  mb-8  transition duration-[.5s]" : "lg:w-[20vw] -translate-x-[100%] absolute z-[100] !h-[100vh] bg-indigo-300 !top-0 !left-0 p-12 flex flex-col space-y-4  mb-8  transition duration-[.5s]"}>
            <span className="absolute top-0 left-0 p-5" onClick={closeMenu}>
                    <IoCloseOutline className="cursor-pointer text-2xl text-white" />
                </span>
                <div className="flex flex-col gap-4">

                    <label htmlFor="name" className="text-white">عنوان</label>
                    <input type="text" name="title" className="outline-none border rounded-lg ps-2 py-1" />
                    {state.status === 'titleerror' && <p className="text-red-500">{state.message}</p>}


                    <label htmlFor="email"  className="text-white">شماره تماس</label>
                    <input type="text" name="cellphone" className="outline-none border rounded-lg ps-2 py-1" />
                    {state.status === 'cellphoneerror' && <p className="text-red-500">{state.message}</p>}
                    {state.status === 'error' && <p className="text-red-500">{state.message?.cellphone}</p>}



                    <label htmlFor="email" className="text-white">کد پستی</label>
                    <input type="postal_code" name="postal_code" className="outline-none border rounded-lg ps-2 py-1" />
                    {state.status === 'postal_code' && <p className="text-red-500">{state.message}</p>}
                    {state.status === 'error' && <p className="text-red-500">{state.message?.postal_code}</p>}



                    <label htmlFor="email" className="text-white">استان</label>
                    <select name="province_id" onChange={changeCities} className="bg-white outline-none border rounded-lg ps-2 py-1">
                        {provinces.map((province:any) => (<option key={province.id} value={province.id}>{province.name}</option>))}
                    </select>
                    {state.status === 'provinceerror' && <p className="text-red-500">{state.message}</p>}

                    <label htmlFor="email" className="text-white">شهر</label>
                    <select name="city_id" className="bg-white outline-none border rounded-lg ps-2 py-1">
                        {filterCity.map((city:any) => (<option key={city.id} value={city.id}>{city.name}</option>))}
                    </select>
                    {state.status === 'cityerror' && <p className="text-red-500">{state.message}</p>}

                    <div>
                        <div className="flex flex-col">

                            <label htmlFor="address" className="text-white">آدرس</label>
                            <textarea name="address" className="outline-none border rounded-lg ps-2 py-1" />
                            {state.status === 'addresserror' && <p className="text-red-500">{state.message}</p>}
                        </div>
                    </div>
                    <SubmitButton title="ایجاد" style="btn w-20" />
                </div>
            </form>
        </>

    )
}
export default CreateAddressForm;