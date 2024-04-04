'use client'
import { useEffect, useState } from "react"
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const ChangeTheme = ({ dark, setDark }: any) => {

    const toDarkmode = () => {
        setDark(true)
    }
    const toLightmode = () => {
        setDark(false)
    }
    useEffect(() => {
        if (dark === true) {
            // document.body.classList.add('dark')
            document.getElementsByTagName("html")[0].classList.add('dark');
            if (typeof window !== 'undefined') {
            localStorage.setItem('theme', 'dark')
            }
        } else {
            document.getElementsByTagName("html")[0].classList.remove('dark');
            if (typeof window !== 'undefined') {
            localStorage.removeItem('theme')
            }
        }
    }, [dark])
    return (

            <div className="me-2 bg-searchBox dark:bg-slate-400  rounded-full p-1 hover:bg-yellow-400 cursor-pointer transition">
                {dark ? (
                    <MdOutlineLightMode className="text-3xl text-gray-800 p-1" onClick={toLightmode}/>

                ) : (
                    <MdOutlineDarkMode className="text-3xl text-gray-800 p-1" onClick={toDarkmode} />

                )}

            </div>


    )
}
export default ChangeTheme;