import Title from "@/components/Title";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import dynamic from "next/dynamic";
interface Branch {
    location: [number, number];
    title: string;
    description: string;
    href: string;
}
const MyAwesomeMap = dynamic(() => import("@/components/branches/BranchesCard"), { ssr: false })
const branches = () => {
    const branches: Branch[] = [
        { location: [35.807190, 51.428987], title: 'تهران، تجریش', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', href: 'https://maps.app.goo.gl/VX46nuFLzZ1BGH4E8' },
        { location: [35.697961, 51.351151], title: 'تهران، آزادی', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', href: 'https://maps.app.goo.gl/w8wzkC76K5yqEGmT8' },
        { location: [35.856968, 50.972541], title: 'کرج، گوهردشت', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', href: 'https://maps.app.goo.gl/UA9RPXWr1g42HxyW7' },
        { location: [32.638031, 51.683974], title: 'اصفهان، خواجو', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.', href: 'https://maps.app.goo.gl/kEZxBXfVZSuZVH1k6' },
    ];
    return (
        <div>
            <Header />
            <div className="container mx-auto w-5/6 lg:w-2/3 py-12">
                <section className="flex justify-center flex-col text-center">
                    <Title title={'لیست شعبه های فعال'} />
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                            {branches.map((branch: any, index: number) => (
                                <div key={index} className="flex flex-row flex-row-reverse border rounded-lg dark:border-0 bg-whiteHeader dark:bg-slate-800 items-center p-2 m-1">
                                    <MyAwesomeMap {...branch} />

                                </div>))
                            }
                    </div>
                </section >
            </div>
            <Footer />
        </div>
    )
}
export default branches;