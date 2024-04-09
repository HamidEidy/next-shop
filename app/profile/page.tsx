import ClientDataForm from "@/components/profile/ClientDataForm";
import { getFetch } from "@/utils/fetch";
import { cookies } from "next/headers";

const profile = async () => {
    const token = cookies().get('token');
    const user = await getFetch('/profile/info', { 'Authorization': `Bearer ${token?.value}` })
    return (
            <ClientDataForm user={user} />
    )
}
export default profile;