import Link from "next/link";
import Image from "next/image";

import Button from "./Button";
import { useState } from "react";

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const showMobileMenuHandler = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <>
            <div className="flex items-center justify-around w-full py-2 shadow sticky top-0 bg-white z-50 sm:hidden md:hidden">
                <div>
                    <Image src={"/logo.png"} width={100} height={100} alt="logo" />
                </div>
                <div>
                    <ul className="flex gap-6 items-center ">
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500 transition-all">ویدیو ها</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500 transition-all">پشتیبانی</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500 transition-all">امور سهام</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500 transition-all">تپسی پک</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500 transition-all">فرصت های شغلی</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500 transition-all">وبلاگ</Link>
                        <Button title="دانلود تپسی" />
                    </ul>
                </div>
            </div>
            <div className="hidden sm:inline md:inline">
                <nav>
                    <div className="navbar">
                        <div className="container nav-container">
                            <input className="checkbox" type="checkbox" onClick={showMobileMenuHandler} />
                            <div className="hamburger-lines">
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                            </div>
                            <div>
                                <Image src={"/logo.png"} width={100} height={100} alt="logo" />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`flex items-center justify-around w-full py-2 shadow sticky top-0 bg-white z-50
                ${showMobileMenu ? "inline" : "hidden"}
                `}>
                    <ul className="flex gap-6 items-start w-full flex-col pr-4 absolute top-0 bg-white z-50 shadow pb-2 ">
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500">ویدیو ها</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500">پشتیبانی</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500">امور سهام</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500">تپسی پک</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500">فرصت های شغلی</Link>
                        <Link href={"#"} className="text-gray-700 hover:text-orange-500">وبلاگ</Link>
                    </ul>
                </div>
            </div>


        </>
    )
}
