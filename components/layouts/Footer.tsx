const Footer = (): JSX.Element => {
    return (
        <footer className="bg-slate-800">
            <div className=" text-white container mx-auto w-5/6 lg:w-2/3 py-12">
        <div className="flex justify-center flex-col text-center">
            <div className="space-y-5">
                <h2 className="text-2xl font-bold">
                    وبسایت فروشگاهی فست فود
                </h2>
                <div className="flex justify-center gap-5">
                    <a href="https://www.linkedin.com/in/hamidreza-eidy/" data-toggle="tooltip" title="لینکدین">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/linkedin.png" alt="linkedin"/>
                    </a>
                    <a href="https://github.com/HamidEidy" data-toggle="tooltip" title="گیت هاب">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/github.png" alt="github"/>
                 </a>
                 <a href="mailto:hamidreza.eidy1999@gmail.com" data-toggle="tooltip" title="ایمیل">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/gmail.png" alt="gmail"/>
                     </a>
                    <a href="https://t.me/HamidrezaEidy" data-toggle="tooltip" title="تلگرام">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/telegram-app.png" alt="telegram-app"/>
                    </a>
                    <a href="Tel:+989071749865" data-toggle="tooltip" title="تلفن">
                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/apple-phone.png" alt="apple-phone"/>
                    </a>
                </div>
            </div>
            <p className="mt-3">
                  پیاده سازی توسط  
                <a className="text-yellow-400" href="https://hamideidy.ir/"> حمیدرضا عیدی</a>
            </p>
        </div>
        </div>
    </footer>
    )
}
export default Footer;