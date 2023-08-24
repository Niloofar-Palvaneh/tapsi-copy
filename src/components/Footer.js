import Link from "next/link";
import Image from "next/image";

export default function Footer() {

    return (
        <>
            <div className="bg-slate-950 text-white px-24 py-8 flex justify-between sm:flex-col sm:gap-8 sm:px-2">
                <div className="flex flex-col gap-4">
                    <Image src={"/logof.svg"} width={100} height={100}/>
                    <div className="text-[12px] w-[200px] sm:w-full">
                        <h5>اپلیکیشن درخواست خودرو و پیک</h5>
                        <h5 className="text-gray-500">تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.</h5>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h6 className="font-bold text-[20px]">تپسی</h6>
                    <ul className="flex flex-col gap-2 text-gray-200 text-[13px]">
                        <li className="hover:text-red-400">
                            <Link href={"#"}>وبلاگ تپسی</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>فرصت شغلی</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>تماس با ما</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>لوگو و هویت سازمانی</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>معرفی راننده به تپسی</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>استخدام بازاریاب</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h6 className="font-bold text-[20px]">مسافران</h6>
                    <ul className="flex flex-col gap-2 text-gray-200 text-[13px]">
                        <li className="hover:text-red-400">
                            <Link href={"#"}>دانلود اپ مسافر</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>نسخه وب تپسی</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>تماس با ما</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>سوالات متداول مسافران</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>شرایط و قوانین مسافران</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>باشگاه مشتریان</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h6 className="font-bold text-[20px]">رانندگان</h6>
                    <ul className="flex flex-col gap-2 text-gray-200 text-[13px]">
                        <li className="hover:text-red-400">
                            <Link href={"#"}>دانلود اپ سفیر</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>ثبت نام راننده تاکسی اینترنتی</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>باشگاه سفیران</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>سوالات متداول سفیران</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>شرایط و قوانین سفیران</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>ثبت نام راننده موتور</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h6 className="font-bold text-[20px]">کسب و کارها</h6>
                    <ul className="flex flex-col gap-2 text-gray-200 text-[13px]">
                        <li className="hover:text-red-400">
                            <Link href={"#"}>پنل سازمانی تپسی</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>خرید کد اعتبار و تخفیف</Link>
                        </li>
                        <li className="hover:text-red-400">
                            <Link href={"#"}>دریافت API</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-2">
                    <Image className="bg-white rounded" src={"/f1.png"} width={100} height={100} />
                    <Image className="rounded" src={"/f2.png"} width={100} height={100} />
                </div>
            </div>
            <div className="bg-slate-950 text-white px-24 py-8 flex">
                <h5>تپسی در شبکه های اجتماعی</h5>
                <div>
                    
                </div>
            </div>
        </>
    )
}
