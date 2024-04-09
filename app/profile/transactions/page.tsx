import OrdersList from "@/components/transactions/TransactionsList";
const transactions = async () => {
    return (
        <>
            <p className="bg-gray-800 text-white tst p-5">تراکنش ها</p>
            <div className="flex justify-center p-2 lg:p-12">
                <OrdersList />
            </div>
        </>
    )
}
export default transactions;