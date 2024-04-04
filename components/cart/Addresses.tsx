'use client'
import { getAddresses } from "@/actions/cart";
import Link from "next/link";
import { useEffect, useState } from "react";

const Addresses = ({ setAddressId }:any) => {
    const [addresses, setAddresses] = useState<any>([])
    useEffect(() => {
        const fetchAddresses = async () => {
            const data = await getAddresses();
            setAddresses(data)
        }
        fetchAddresses()
    }, []);
    return (
        <div className="flex items-center justify-center mt-8 lg:mt-0">
            {addresses.length > 0 ? (
                <>
                    <p className="me-2 dark:text-slate-50">انتخاب آدرس :</p>
                    <select onChange={(e) => setAddressId(e.target.value)} className="bg-white dark:bg-slate-400 py-1 px-5 border rounded-lg" name="address">
                      <option defaultValue="" disabled>انتخاب آدرس</option>
                        {addresses.map((item:any) => (
                            <option key={item.id} value={item.id}>{item.title}</option>
                        ))}
                    </select>
                </>
            ) : (
                <Link className="btn" href={'/profile/addresses'}>ایجاد آدرس</Link>

            )}




        </div>
    )
}
export default Addresses;