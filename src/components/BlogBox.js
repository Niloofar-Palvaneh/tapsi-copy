import Link from "next/link";
import Image from "next/image";




export default function BlogBox(props) {

    return (
        <>
            <Link href={"#"} className="flex flex-col gap-4 items-center justify-center hover:shadow-[0px_0px_10px_2px_#00000024] p-8 sm:p-2 ">
                <Image src={props.img} width={400} height={400} alt="..." className="rounded-xl" />
                <div className="flex flex-col gap-4  ">
                    <h6 className="text-xl font-bold px-8 sm:px-2">
                        {props.title}
                    </h6>
                    <p className="w-[400px] text-gray-500 leading-8 line-count px-8 sm:w-full sm:px-2">
                        {props.des}
                    </p>
                </div>
            </Link>
        </>
    )
}