
import Link from "next/link"

export default function Button(props) {
    return (
        <>
            <Link href={"#"} className="text-center bg-orange-500 text-white rounded  py-2 px-4 hover:translate-y-0 hover:scale-110 ">
               {props.title}
            </Link>
        </>
    )
}
