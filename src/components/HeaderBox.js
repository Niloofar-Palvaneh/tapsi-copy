import Link from "next/link";

export default function HeaderBox(props) {
    return (
        <>
            <Link href={"#"} className={`flex items-center gap-2 justify-center
            px-4 py-4 rounded-xl  sm:px-2
             ${props.style}`}>
                <div className="text-2xl">
                    {props.icon}
                </div>
                <h2>{props.des}</h2>
            </Link>
        </>
    )
}
