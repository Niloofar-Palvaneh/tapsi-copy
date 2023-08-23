import Link from "next/link";
import Title from "./Title";
import Image from "next/image";



export default function TapsiBest() {
    return (
        <>
            <div className="flex mt-24 justify-between px-32 items-start sm:flex-col-reverse sm:px-4 sm:gap-8 md:flex-col-reverse md:px-4 md:gap-8 xl:flex-col-reverse xl:px-4 xl:gap-8">
                <div className="flex flex-col gap-8 w-1/2 sm:w-full md:w-full xl:w-full">
                    <div className="flex flex-col gap-4">
                        <Title title="مزایای تپسی برای رانندگان تاکسی اینترنتی" />
                        <p className=" leading-8 text-gray-600">رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت دارند.
                            به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h6 className="text-2xl">کسب درآمد روزانه، پایدار و بدون محدودیت</h6>
                        <ul className="text-gray-600 list-decimal leading-8 pr-4">
                            <li> امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز</li>
                            <li>طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه به‌طور دوره‌ای</li>
                            <li>نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h6 className="text-2xl">تضمین امنیت و پشتیبانی رانندگان</h6>
                        <ul className="text-gray-600 list-decimal leading-8 pr-4">
                            <li>پشتیبانی 24 ساعته</li>
                            <li> امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴ ساعته تیم امنیت</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h6 className="text-2xl">واریز سهمیه بنزین ویژه رانندگان تپسی</h6>
                        <ul className="text-gray-600 list-decimal leading-8 pr-4">
                            <li>نمایش میزان پیمایش ماهانه درون اپلیکیشن</li>
                            <li>محاسبه‌ی مسافت طی شده تا مسافر در پیمایش</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h6 className="text-2xl flex items-center gap-2">
                            استفاده از مزایای
                            <Link href={"#"} className="text-blue-500">
                                باشگاه رانندگان تپسی
                            </Link>
                        </h6>
                        <ul className="text-gray-600 list-decimal leading-8 pr-4">
                            <li>تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک و ...</li>
                            <li>تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید اقساطی و...</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-start gap-8 sm:flex-col sm:gap-4 ">
                        <Link href={"#"} className="text-center bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 sm:w-full">
                            ثبت نام راننده تاکسی آنلاین
                        </Link>
                        <Link href={"#"} className="text-center bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 sm:w-full">
                            دانلود برنامه تپسی راننده
                        </Link>
                    </div>
                </div>
                <Image src={"/driver.webp"} width={500} height={500} alt="..." className="rounded-xl sm:w-full md:w-full xl:w-full" />
            </div>
        </>
    )
}
