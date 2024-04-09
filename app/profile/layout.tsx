'use client'
import { usePathname } from "next/navigation";
import MobileNavbar from "@/components/profile/MobileNavbar";
import DesktopNavbar from "@/components/profile/DesktopNavbar";

const layout = ({ children }: any) => {
    return (
        <>
            <div className="min-h-[100vh] bg-white flex flex-row" dir="rtl">
                {/* desktop navbar */}
                <DesktopNavbar />
                {/* mobile navbar */}
                <MobileNavbar />
                <div className="w-full lg:basis-5/6">
                    {children}
                </div>
            </div>

        </>
    )
}
export default layout;