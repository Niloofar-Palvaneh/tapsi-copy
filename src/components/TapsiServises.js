
import Title from "./Title"
import Image from "next/image"

import { useState, useEffect } from "react";

export default function TapsiServises() {

    const [opacityBox, setOpacityBox] = useState(1)
    const opasityHandler = () => {
        if (opacityBox < 8) {
            setTimeout(() => {
                setOpacityBox(opacityBox + 1)
            }, 8000);
        }
        else {
            setOpacityBox(1)
        }
    }
    const [tapsiServisesBoxShow, setTapsiServisesBoxShow] = useState(1)
    const tapsiServisesBoxShowHandler = () => {

        if (tapsiServisesBoxShow < 5) {
            setTimeout(() => {
                setTapsiServisesBoxShow(tapsiServisesBoxShow + 1)
            },8000);
        }
        else {
            setTapsiServisesBoxShow(1)
        }
    }

    useEffect(() => {
        opasityHandler()
        tapsiServisesBoxShowHandler()
    });


    return (
        <>
            <div className="mt-[190px] px-32  flex flex-col gap-24 sm:p-0 md:p-8 sm:mt-[110px] md:mt-[150px]">
                <div className="flex flex-col items-start gap-8  w-full">
                    <Title title="سرویس های تپسی" />
                    <div className="grid grid-cols-7 sm:grid-cols-4 sm:gap-4 w-full">
                        <div className={`flex items-center justify-center gap-2 flex-col transition-all hover:opacity-100 ${opacityBox === 1 ? "opacity-100" : "opacity-50"}`}>
                            <Image src={"/1.png"} width={100} height={100} alt="..." />
                            <h5>کلاسیک</h5>
                        </div>
                        <div className={`flex items-center justify-center gap-2 flex-col transition-all hover:opacity-100  ${opacityBox === 2 ? "opacity-100" : "opacity-50"}`}>
                            <Image src={"/2.png"} width={100} height={100} alt="..." />
                            <h5>تپسی تلفنی</h5>
                        </div>
                        <div className={`flex items-center justify-center gap-2 flex-col transition-all hover:opacity-100 ${opacityBox === 3 ? "opacity-100" : "opacity-50"}`}>
                            <Image src={"/3.png"} width={100} height={100} alt="..." />
                            <h5>تپسی لاین</h5>
                        </div>
                        <div className={`flex items-center justify-center gap-2 flex-col transition-all hover:opacity-100  ${opacityBox === 4 ? "opacity-100" : "opacity-50"}`}>
                            <Image src={"/4.png"} width={100} height={100} alt="..." />
                            <h5>موتوپیک</h5>
                        </div>
                        <div className={`flex items-center justify-center gap-2 flex-col transition-all hover:opacity-100 ${opacityBox === 5 ? "opacity-100" : "opacity-50"}`}>
                            <Image src={"/5.png"} width={100} height={100} alt="..." />
                            <h5>اتوپیک</h5>
                        </div>
                        <div className={`flex items-center justify-center gap-2 flex-col transition-all hover:opacity-100  ${opacityBox === 6 ? "opacity-100" : "opacity-50"}`}>
                            <Image src={"/6.png"} width={100} height={100} alt="..." />
                            <h5>تپسی پلاس</h5>
                        </div>
                        <div className={`flex items-center justify-center gap-2 flex-col transition-all hover:opacity-100  ${opacityBox === 7 ? "opacity-100" : "opacity-50"}`}>
                            <Image src={"/7.png"} width={100} height={100} alt="..." />
                            <h5>همیار</h5>
                        </div>
                    </div>
                </div>


                <div className="sm:px-2">
                    <div className={` ${tapsiServisesBoxShow === 1 ? "flex" : "hidden"}`}>
                        <div className="w-3/4 flex flex-col gap-8 sm:w-full">
                            <h3 className="text-2xl">تپسی تلفنی</h3>
                            <p className="text-gray-700 w-4/5 leading-8 sm:w-full">
                                سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید.
                                این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.
                            </p>
                        </div>
                        <Image className="sm:hidden md:w-[200px] h-[200px]" src={"/11.webp"} width={500} height={500} alt="..." />
                    </div>
                    <div className={` ${tapsiServisesBoxShow === 2 ? "flex" : "hidden"}`}>
                        <div className="w-3/4 flex flex-col gap-8 sm:w-full">
                            <h3 className="text-2xl">هم خط</h3>
                            <p className="text-gray-700 w-4/5 leading-8 sm:w-full">
                                سرویس هم‌خط تپسی شما را با مینی‌بوس‌ به مقصد می‌رساند. با استفاده از سرویس هم‌خط بعد از انتخاب مسیر سفر، بلیت‌تان را خریداری کنید
                                و سریع‌تر و راحت‌تر به مقصد برسید. این سرویس خطی بسیار ارزان‌تر از دیگر سرویس‌های تپسی است و شما را سریع‌تر و راحت‌تر از حمل‌ونقل عمومی به مقصدتان می‌رساند. شما می‌توانید از قبل بلیت هم خط را رزرو کنید و با رعایت فاصله اجتماعی به مقصد برسید. سرویس مینی بوس آنلاین فعلا فقط در تهران فعال است.
                            </p>
                        </div>
                        <Image className="sm:hidden  md:w-[200px] h-[200px]" src={"/22.webp"} width={500} height={500} alt="..." />
                    </div>
                    <div className={` ${tapsiServisesBoxShow === 3 ? "flex" : "hidden"}`}>
                        <div className="w-3/4 flex flex-col gap-8 sm:w-full">
                            <h3 className="text-2xl">اتوپیک</h3>
                            <p className="text-gray-700 w-4/5 leading-8">
                                اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما،
                                با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.
                            </p>
                        </div>
                        <Image className="sm:hidden  md:w-[200px] h-[200px]" src={"/33.webp"} width={500} height={500} alt="..." />
                    </div>
                    <div className={` ${tapsiServisesBoxShow === 4 ? "flex" : "hidden"}`}>
                        <div className="w-3/4 flex flex-col gap-8 sm:w-full">
                            <h3 className="text-2xl">تپسی پلاس</h3>
                            <p className="text-gray-700 w-4/5 leading-8 sm:w-full">
                                در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این
                                سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است،
                                امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.
                            </p>
                        </div>
                        <Image className="sm:hidden  md:w-[200px] h-[200px]" src={"/44.webp"} width={500} height={500} alt="..." />
                    </div>
                </div>


                <div className="bg-gray-200 w-full h-[2px]"></div>
            </div>

        </>
    )
}
