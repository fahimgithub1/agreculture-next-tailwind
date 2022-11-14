import Link from "next/link";

export default function MobileItemNav(props){

    return(
        <li className={`${props.classes}`}>
            <Link href={props.pagepath}>
                {props.pagename}
            </Link>
        </li>
    )
}