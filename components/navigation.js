import Image from 'next/image';
import Logo1 from "/public/logo-1.png";
import MobilNav from './home-page/subconponnets/mobilnav';
import NavigationBtn from './home-page/subconponnets/navigationbtn';
import NavigationAllItems from './home-page/subconponnets/Navigationallitems';
import { useState } from 'react';
import Link from 'next/link';


export default function Navigarion(){
    const [isMobileNavigationShow, setIsMobileNavigationShow] = useState(false);


    const handelMobileNavigaron = () => {

        if(!isMobileNavigationShow){
            setIsMobileNavigationShow(true);
        }else{
            setIsMobileNavigationShow(false);
        }
    }

    return(
        <nav className="py-2 px-6 bg-white border-gray-200">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className=''>
                    <Link href="/" className="flex items-center">
                        <Image src={Logo1} height='5.5rem' width='100' className="logo-style" alt="Flowbite Logo" />
                    </Link>
                </div>

                <NavigationBtn onNavigationhandle={handelMobileNavigaron} />

                <NavigationAllItems />
            </div>

            {isMobileNavigationShow && <MobilNav onNavigationhandle={handelMobileNavigaron} />}
        </nav>
    )
}