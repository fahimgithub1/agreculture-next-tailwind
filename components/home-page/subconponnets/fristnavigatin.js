import Link from "next/link";
import {BiMailSend, BiMap} from 'react-icons/bi';

export default function FristNavigatin(props){

    return(
        <ul className={`${props.classes}`} >
            <li className='flex items-center'> 
                <Link href="mailto:fahim@gmail.com">
                    <div className='flex items-center'>
                        <BiMailSend className='nav-icon-style' />
                        fahim@gmail.com
                    </div>
                </Link>
             </li>

            <li className='flex items-center'> 
                <BiMap className='nav-icon-style' />
                Uttore Dhaka
            </li>
        </ul>
    )
}