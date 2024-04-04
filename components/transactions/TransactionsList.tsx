'use server'
import { getFetch } from "@/utils/fetch";
import { cookies } from "next/headers";
const TransactionsList = async ({ searchParams }: any) => {
    const token = cookies().get('token')
    const params = new URLSearchParams(searchParams)
    const data = await getFetch(`/profile/transactions?${params?.toString()}`, { 'Authorization': `Bearer ${token?.value}` })

    return (
        <div className="w-2/3">

            {data.data.transactions.length > 0 ? (
                <div className="border rounded-lg shadow">
                    <div className="bg-slate-600 py-2 rounded-t-lg text-slate-100">
                        <ul className="flex justify-between">
                            <li className="w-1/4 text-center">شماره تراکنش</li>
                            <li className="w-1/4 text-center">مبلغ</li>
                            <li className="w-1/4 text-center">وضعیت</li>
                            <li className="w-1/4 text-center">تاریخ</li>

                        </ul>
                    </div>
                    <div className="space-y-5 p-5">
                        {data.data.transactions.map((item:any) => (
                            <div key={item.id} className="flex justify-between border-b">
                                <span className="w-1/4 text-center">{item.id}</span>
                                <span className="w-1/4 text-center">{item.amount}</span>
                                <span className={item.status === 'موفق' ? "w-1/4 text-center text-green-700" : "w-1/4 text-center text-red-500"}>{item.status}</span>
                                <span className="w-1/4 text-center">{item.created_at}</span>
                            </div>
                        ))}
                    </div>


                </div>

            ) : (
                <div className="flex justify-center">
                    <p className="tst text-gray-700 text-xl">تراکنشی وجود ندارد!</p>
                </div>
            )}
        </div>
    )
}
export default TransactionsList;