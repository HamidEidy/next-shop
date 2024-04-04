'use server'
import ClientAddressForm from "@/components/profile/ClientAdressForm";
import CreateAddressForm from "@/components/profile/CreateAddressForm";
import { getFetch } from "@/utils/fetch";
import { cookies } from "next/headers";

const addresses = async () => {
    const token = cookies().get('token');
    const data = await getFetch('/profile/addresses', { 'Authorization': `Bearer ${token?.value}` })


    return (
        <div>
            {data.data.addresses.length > 0 ? (
                <>
                    <p className="bg-gray-800 text-white tst p-5">آدرس ها</p>
                    <div className="relative flex flex-col p-12">

                        <div className="bg-whiteHeader rounded-lg shadow-lg">
                            <CreateAddressForm provinces={data.data.provinces} cities={data.data.cities} />

                        </div>
                        {data?.data?.addresses.map((address:any) => (
                            <div className="mb-5">
                                <ClientAddressForm provinces={data.data.provinces} cities={data.data.cities} address={address} />

                            </div>
                        ))}

                    </div>
                </>

            ) : (
                <>
                    <p className="bg-gray-800 text-white tst p-5">آدرس ها</p>
                    <div className="relative text-center flex flex-col justify-center space-y-8 p-12">
                        <div className="bg-whiteHeader rounded-lg shadow-lg">
                            <CreateAddressForm provinces={data.data.provinces} cities={data.data.cities} />
                        </div>
                        <span className="tst text-xl text-gray-700">هنوز آدرسی برای دریافت سفارشات خود ایجاد نکرده اید</span>

                    </div>
                </>
            )}
        </div>
    )
}
export default addresses;