import Image from 'next/image';
import Logo1 from "/public/logo-1.png";
import Link from "next/link";
import { ImCross } from 'react-icons/im';
import { BiMailSend, BiPhoneCall } from 'react-icons/bi';
import NavigationPages from './navigationpages';
import FristNavigatinIcon from './fristnavigatinicon';


export default function MobilNav(props){

    return (
        <>
            <div className='mobile-nav-bg' onClick={props.onNavigationhandle}>
                
            </div>

            <div className="mobile-navigation">
                <div className='flex justify-between items-start'>
                    <Link  href='/' className="flex items-center">
                        <Image src={Logo1} height='7rem' width='100' className="logo-style" alt="Flowbite Logo" />
                    </Link>

                    <button className='text-white' onClick={props.onNavigationhandle}>
                        <ImCross />
                    </button>
                </div>

                <div className='mt-7 text-white'>
                    <NavigationPages itemclass ="py-2 border-x-0 border-y" />
                </div>

                <div className='mt-4 text-white mb-7'>
                    <ul>
                        <li className='flex'>
                            <Link href="mailto:fahim@gmail.com">
                                <div className='flex items-center'>
                                    <div className='bg-lime-900 rounded-full p-1 text-xl mr-2'>
                                        <BiMailSend />
                                    </div>

                                    <div className='text-lg font-semibold'>
                                        fahim@gmail.com
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li className='mt-3'>
                            <Link href="tel:03434538">
                                <div className='flex items-center'>
                                    <div className='bg-lime-900 rounded-full p-1 text-xl mr-2'>
                                        <BiPhoneCall />
                                    </div>

                                    <div className='text-lg font-semibold'>
                                        03434538
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <FristNavigatinIcon clseesUl='flex space-x-4 mt-4' />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}