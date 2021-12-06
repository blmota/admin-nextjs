import Link from "next/link";

interface ItemProps {
    url?: string,
    text: string,
    icon: any,
    className?: string,
    onClick?: (event: any) => void
}

export default function Item(props: ItemProps) {
    function renderLink() {
        return (
            <a className={`
                    flex flex-col
                    justify-center items-center
                    text-gray-600
                    h-20 w-20 ${props.className}
                `}>
                    {props.icon}
                    <span className={`
                        text-xs font-light
                    `}>
                        {props.text}
                    </span>
                </a>
        )
    }

    return (
        <li onClick={props.onClick}
            className={`
            hover:bg-gray-200 cursor-pointer
            dark:hover:bg-gray-800`}
        >
            {props.url ? (
                <Link href={props.url}>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}
        </li>
    )
}