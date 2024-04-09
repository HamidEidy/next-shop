import Chart from "./Chart";

const IntroTools = () => {

    return (
        <div className="flex flex-col lg:flex-row lg:flex-row-reverse flex-rows-2 items-center">
            <div className="basis-1/2">
                <h1 className="text-6xl tst text-center text-gray-700 dark:text-slate-200 font-extrabold">
                    ابزار های <br />
                    مورد <br />
                    استفاده

                </h1>
            </div>
            <div className="basis-1/2">
                <Chart />
            </div>

        </div>
    )
}
export default IntroTools;