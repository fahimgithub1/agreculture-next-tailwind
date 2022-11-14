import Image from "next/image";
import FristNavigatinIcon from "../home-page/subconponnets/fristnavigatinicon";
import BolderHeader from "../layout/bolderheader";
import ParaGrap from "../layout/paragrap";
import { FaShareAlt } from 'react-icons/fa';
import Link from "next/link";


export default function Farmer(props){

    return(
        <div className="lg:w-4/12 md:w-6/12 px-2 text-blacks mb-4 last:mb-0 lg:mb-0 md:mb-4 fermerhover overflow-hidden">
            {/* <Link href="/aboutus"> */}
                <div className="relative">
                    <Image src={props.framarimg} height="100" width="100" alt="farmer image" className="w-full h-auto mb-3 rounded-t-full rounded-l-full"/>
                    
                    <div className="absolute bottom-0 right-0 p-[1.1rem] bg-yellow-300 text-2xl rounded-t-full rounded-l-full">
                        <FaShareAlt />
                    </div>

                    <div className="absolute h-full w-full top-0 left-0 bg-black rounded-t-full rounded-l-full opacity-40 hidden hover1block">
                    </div>
                            
                    <FristNavigatinIcon clseesUl="bg-lime-700 absolute p-[2px] md:p-3 rounded-t-full rounded-l-full bottom-0 right-0 text-white hidden hover1block" 
                                        classLi="p-2"
                    />
                </div>

                <Link href='/aboutus'>
                    <BolderHeader
                                    text={props.farmername}
                                    classes="text-2xl text-right mb-1"
                    />
                </Link>

                <ParaGrap
                            textpragrap={props.farmertaitel}
                            allparaclass="mt-1 text-right"
                />
            {/* </Link> */}
        </div>

    )
}