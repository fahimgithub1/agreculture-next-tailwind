import Image from "next/image";
import Link from "next/link";
import Logo1 from "/public/logo-1.png";
import project from "/public/projects/project-two-3.jpg";
import project2 from "/public/projects/project-two-4.jpg";
import {BiPhoneCall, BiMailSend, BiLocationPlus} from "react-icons/bi";
import InputButon from "./layout/InpuButon";
import NavigationPages from "./home-page/subconponnets/navigationpages";

export default function Foooter(){

    return(
        <footer>
            <div className="container w-1500 mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                <div className="">
                    <Link href="/">
                        <Image className="mb-2 dm:mb-4 lg:mb-5" alt="logo" src={Logo1} />
                    </Link>

                    <span className="font-bold text-base">Welcome to our Agriculture Farming. Lorem simply text amet cing elit.</span>
                </div>

                <div>
                    <h4 className="font-bold mb-3 sm:mb-4 lg:mb-5">Explore</h4>
                    
                    <NavigationPages />
                </div>

                <div>
                    <h4 className="font-bold mb-3 sm:mb-4 lg:mb-5">Project</h4>
                    
                    <ul>
                        <li>
                            <Link href='/'>
                                <div className="flex items-center">
                                    <div className="items-center mr-2">
                                        <Image src={project} height='20px' width='20px' alt="project1" className="h-20 w-20 rounded-lg"/>
                                    </div>

                                    <div className=" text-[15px] leading-6">
                                        <span className="mb-1 text-yellow-400">20 Jul, 2022</span> <br />
                                        <span className="font-bold text-white" >A Organic Food Gives More Good Taste</span>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href='/'>
                                <div className="flex items-center">
                                    <div className="items-center mr-2">
                                        <Image src={project2} height='20px' width='20px' alt="project1" className="h-20 w-20 rounded-lg"/>
                                    </div>

                                    <div className=" text-[15px] leading-6">
                                        <span className="mb-1 text-yellow-400">20 Jul, 2022</span> <br />
                                        <span className="font-bold text-white" >A Organic Food Gives More Good Taste</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-3 sm:mb-4 lg:mb-5">Contact</h4>
                    
                    <ul>
                        <li>
                            <Link href='tel:01828093765'>
                                <div className="flex items-center">
                                    <BiPhoneCall className="mr-3 text-yellow-400" />
                                    <span>+92 (0088) 6823</span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href='mailto:fahim@gmail.com'>
                                <div className="flex items-center">
                                    <BiMailSend className="mr-3 text-yellow-400" />
                                    <span>fahim@gmail.com</span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href='/'>
                                <div className="flex items-center">
                                    <BiLocationPlus className="mr-3 text-yellow-400" />
                                    <span>uttora Dhaka</span>
                                </div>
                            </Link>
                        </li>
                    </ul>

                    <InputButon plaehold="Email Address" />
                </div>
            </div>
        </footer>
    );
}