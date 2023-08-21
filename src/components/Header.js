
import HeaderBox from "./HeaderBox"
import Image from "next/image"
import { AiOutlineArrowDown , AiOutlineCar } from "react-icons/ai"
import { SiPwa } from "react-icons/si"
import {MdOutlineSportsMotorsports} from "react-icons/md"

export default function Header() {
    return (
        <>
            <div className="bg-[url('/banner.webp')] bg-cover bg-center  px-24 py-12 relative sm:p-4 md:px-4">
                <div className="w-1/2 bg-b-c rounded-2xl px-12 py-8 flex flex-col gap-8 sm:w-full">
                    <div className="flex flex-col gap-6 text-white">
                        <h1 className="text-[48px] font-bold">تپسی</h1>
                        <h2 className="text-2xl">اپلیکیشن درخواست خودرو و پیک</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1">
                        <HeaderBox icon={<AiOutlineArrowDown />} des="دانلود اپلیکیشن مسافران" style="bg-white text-gray-900 hover:text-gray-600"  />
                        <HeaderBox icon={<SiPwa />} des="وب اپلیکیشن مسافران"  style="text-gray-900 bg-white hover:text-gray-600" />
                        <HeaderBox icon={<AiOutlineCar />} des="ثبت نام راننده خودرو" style="border border-2 text-white hover:text-gray-200"  />
                        <HeaderBox icon={<MdOutlineSportsMotorsports />} des="ثبت نام راننده موتور" style="border border-2 text-white hover:text-gray-200"  />
                        <HeaderBox icon={<AiOutlineArrowDown />} des="دانلود اپلیکیشن رانندگان" style="border border-2 text-white hover:text-gray-200"  />
                    </div>
                </div>
                <Image src={"/mobile-h.webp"} width={460} height={100} className="absolute left-[160px] top-[18%] sm:hidden md:left-[70px]"/>
            </div>
        </>
    )
}
