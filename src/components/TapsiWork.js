
import Image from "next/image"
import Button from "./Button"
import Title from "./Title"
import Link from "next/link"
import { HiOutlineArrowSmLeft } from "react-icons/hi"


export default function TapsiWork() {

    return (
        <>
            <div className="mt-[190px] px-32  flex items-center justify-center flex-col gap-[150px] sm:p-0 md:p-8 sm:mt-[110px] md:mt-[150px]">

                <div className="flex sm:flex-col-reverse md:flex-col-reverse sm:gap-8 md:flex-col md:gap-4 md:items-center xl:items-center xl:justify-centermd:justify-center xl:flex-col-reverse">
                    <div className="flex flex-col items-start gap-8 sm:gap-4  w-full xl:items-center xl:justify-center md:items-center md:justify-center">
                        <Title title="خدمات تپسی ویژه کسب‌وکارها" />
                        <p className="text-gray-700 w-4/5 leading-8 sm:w-full sm:p-2 md:w-full">
                            پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها
                            و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.
                        </p>
                        <div className="flex flex-col gap-4 sm:w-full">
                            <div>
                                <Link href={"#"} className="flex items-center justify-center gap-2 text-orange-500">
                                    اطلاعات بیشتر سرویس سازمانی
                                    <HiOutlineArrowSmLeft />
                                </Link>
                            </div>
                            <Button title="ورود و ثبت نام پنل سازمانی" />
                        </div>
                    </div>
                    <Image src={"/work.webp"} width={500} height={500} className="sm:w-full md:w-full" />
                </div>

                <div className="flex gap-32 w-full sm:flex-col sm:gap-4 md:flex-col xl:items-center xl:justify-center md:gap-4 md:items-center md:justify-center xl:flex-col">
                    <Image src={"/by.webp"} width={500} height={500} className="sm:w-full md:w-full" />
                    <div className="flex flex-col items-start gap-8  w-full md:items-center md:justify-center  xl:items-center xl:justify-center
                    ">
                        <Title title="خرید کد اعتبار تپسی" />
                        <p className="text-gray-700 w-4/5 leading-8 sm:w-full sm:p-2 md:w-full">
                            کد اعتبار تپسی امکان استفاده از تخفیف یک تا ده درصدی سفر با تپسی را برای کاربران، کسب و کارها و سازمان‌ها فراهم می‌کند.
                            تنها با صرف چند دقیقه می‌توانید این کد را تهیه کنید تا هزینه سفرهایتان با تپسی را کاهش دهید یا آن را در اختیار کارکنان و مشتریانتان بگذارید.
                        </p>
                        <div className="flex flex-col sm:w-full">
                            <Button title="خرید کد اعتبار و تخفیف" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24">
                <div className="text-white">
                    <ul role="list "
                        className="flex items-center justify-center bg-[url('/city.jpeg')] bg-center bg-cover bg-no-repeat bg-fixed py-8
                       sm:flex-col sm:gap-4 md:flex-col md:gap-8
                       ">
                        <li class="group/item  flex items-center justify-center flex-col">
                            <h5 className="font-bold text-2xl">
                                بسته امنیت سفر
                            </h5>
                            <p className="group/edit invisible mt-2  group-hover/item:visible  text-center px-8">
                                امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم متخصصین امنیت تپسی
                            </p>
                        </li>
                        <div className="bg-white w-[3px] h-[100px] rounded sm:hidden md:hidden"></div>
                        <li class="group/item  flex items-center justify-center flex-col">
                            <h5 className="font-bold text-2xl">
                                درخواست تلفنی
                            </h5>
                            <p className="group/edit invisible mt-2  group-hover/item:visible  text-center px-8">
                                امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰
                            </p>
                        </li>
                        <div className="bg-white w-[3px] h-[100px] rounded  sm:hidden md:hidden"></div>
                        <li class="group/item  flex items-center justify-center flex-col">
                            <h5 className="font-bold text-2xl">
                                دسترس‌پذیری برای توان‌یابان
                            </h5>
                            <p className="group/edit invisible mt-2  group-hover/item:visible  text-center px-8">
                                امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر کمیسیون از سفر مسافران ویلچردار                            </p>
                        </li>
                        <div className="bg-white w-[3px] h-[100px] rounded  sm:hidden md:hidden"></div>
                        <li class="group/item flex items-center justify-center flex-col">
                            <h5 className="font-bold text-2xl">
                                امکانات هوشمندط
                            </h5>
                            <p className="group/edit invisible mt-2  group-hover/item:visible text-center px-8">
                                سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و پیشنهادهای ویژه شما
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
