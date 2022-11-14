import Link from "next/link";
import {BsFacebook, BsWhatsapp, BsInstagram, BsYoutube} from 'react-icons/bs';

export default function FristNavigatinIcon(props){

    return(
        <ul className={`${props.clseesUl}`}>
            <li className={props.classLi}>
                <Link href='https://www.facebook.com/fahim.patowry/'>
                    <BsFacebook />
                </Link>
            </li>

            <li className={props.classLi}>
                <Link href='/'>
                    <BsWhatsapp />
                </Link>
            </li>

            <li className={props.classLi}>
                <Link href='https://www.facebook.com/fahim.patowry/'>
                    <BsInstagram />
                </Link>
            </li>

            <li className={props.classLi}>
                <Link href='https://www.youtube.com/channel/UCqRdFfXYGyHHv_RkCt8a1_w'>
                    <BsYoutube />
                </Link>
            </li>
        </ul>
    )
}