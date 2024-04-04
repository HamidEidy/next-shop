'use client'
import Image from "next/image";
import * as React from 'react';
import IntroTitle from "./IntroTitle";
import IntroTools from "./IntroTools";


const Intro = () => {

    return (
        <div className="container mx-auto w-5/6 lg:w-2/4">
            <section>

                <IntroTitle />


                <div className="flex justify-center items-center mb-8 -mt-[70px] lg:-mt-[50px]">
                    <Image className="rotate-90 hidden dark:block" src="/dcurve.png" width={100} height={100} alt="arrow" />
                    <Image className="rotate-90 block dark:hidden" src="/curve.png" width={100} height={100} alt="arrow" />
                </div>

                <IntroTools />




            </section>
        </div>

    )
}
export default Intro;