import Image from "next/image";
import BolderHeader from "../layout/bolderheader";
import ParaWithIcon from "../layout/parawithicon";
import SeviceRightImgDaties from "./sevicerightimgdaties";
import ServiceImgContact from "./serviceimgcontact";

import Img1 from "/public/services/services-details-img-1.jpg";
import Img2 from "/public/services/services-details-img-2.jpg";
import Img3 from "/public/services/services-details-img-3.jpg";
import Img4 from "/public/services/services-details-img-4.jpg";
import Img from "/public/services/service-details-benefit-img.jpg";


const setvicetitle1 = "Agriculture Products";
const setvicetitle2 = "Organic Products";
const setvicetitle3 = "Fresh Vegetables";
const setvicetitle4 = "Dairy Products";

export default function SerciceRightSide(props){


    return(
        <div className="w-full lg:w-8/12 lg:pl-4 mt-6 lg:mt-0 ">
            {
                props.showService1 && 
                <SeviceRightImgDaties 
                                        taitel={setvicetitle1}
                                        image={Img1}
                />
            }

            {
                props.showService2 && 
                <SeviceRightImgDaties 
                                        taitel={setvicetitle2}
                                        image={Img2}
                />
            }

            {
                props.showService3 && 
                <SeviceRightImgDaties 
                                        taitel={setvicetitle3}
                                        image={Img3}
                />
            }
            
            {
                props.showService4 && 
                <SeviceRightImgDaties 
                                        taitel={setvicetitle4}
                                        image={Img4}
                />
            }

            <div className="lg:flex gap-7 mt-6">
                <div>
                    <Image src={Img} alt="why chooce us" className="h-auto w-full rounded-lg lg:h-56 lg:w-[540px]"/>
                </div>

                <div>
                    <BolderHeader 
                                    text="Why Choose?"
                                    classes="text-3xl mt-6 lg:mt-0"
                    />
                    <BolderHeader 
                                    text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
                                    classes="mt-2 text-lime-900"
                    />
                    

                    <div>
                        <ParaWithIcon 
                                        chakeparatext="Refresing to get such a touch"   
                                        allparaicon="text-[15px] mt-2"
                                        classes="bg-yellow-400 p-[2px] rounded-full text-white"
                        />

                        <ParaWithIcon 
                                        chakeparatext="Duis aute irure dolor in in voluptate"   
                                        allparaicon="text-[15px] mt-2"
                                        classes="bg-yellow-400 p-[2px] rounded-full text-white"
                        />
                        
                        <ParaWithIcon 
                                        chakeparatext="Velit esse cillum eu fugiat pariatur"   
                                        allparaicon="text-[15px] mt-2"
                                        classes="bg-yellow-400 p-[2px] rounded-full text-white"
                        />
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                <ServiceImgContact />
            </div>
        </div>
    )
}