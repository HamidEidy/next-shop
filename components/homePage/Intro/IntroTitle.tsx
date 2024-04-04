import Image from "next/image"

const IntroTitle = () =>{
    return(
        <div className="flex flex-col lg:flex-row flex-rows-2 justify-center items-center">
        <div className="basis-1/2 ">

            <h1 className="text-6xl tst text-center text-gray-700 dark:text-slate-200 font-extrabold mt-12 lg:mt-0">
                پروژه <br />
                وبسایت <br />
                فروشگاهی
                <br />
                فست فود</h1>
        </div>

        <div className="basis-1/2  -mt-[100px] lg:mt-0">
            <Image src="/images/fast-food-outline.svg" width={0} height={0} alt="za"
                style={{
                    width: '100%',
                    height: '400px'
                }}
            />

        </div>

    </div>

    )
}
export default IntroTitle;