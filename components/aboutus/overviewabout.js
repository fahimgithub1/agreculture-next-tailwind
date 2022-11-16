import Image from "next/image";
import ParaGrap from "../layout/paragrap";
import ParaWithIcon from "../layout/parawithicon";
import SsectionTitel from "../layout/sectiontitel";
import SectionTitleImg from "../layout/sectiontitleimg";
import TopPara from "../layout/toppara";
import Wrapper from "../layout/wrapper";
import PersentegDiv from "./persentegdiv";

import image1 from "/public/resources/about-three-img-1.jpg";
import image2 from "/public/resources/about-three-img-2.jpg";
import image3 from "/public/resources/about-three-img-3.jpg";

const HederText = "WE’RE AGRION EXPERT QUALITY FARMING LEADERS"
const paratext = "Get to Know Agrion";
const textpragrap = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dolore veniamHederText.";
const chakeparatext1 = "Magnis Dis Nascet" ;
const chakeparatext2 = "Libro id Edge" ;
const chakeparataxt11 = "Lorem ipsum is free do sited";

export default function OverviewAbout(){

    return(
        <Wrapper sectionclass='bg-white' comondivclass="lg:flex container m-auto persangatediv">
            <div className="lg:w-6/12 md:h-full md:flex md:mb-3 lg-mb-0 items-center">
                <div className="h-full md:w-[50%] md:pr-5">
                    <Image src={image1} height="200" width="200" alt="over view image" className="h-auto lg:h-80 md:h-80 w-[100%] rounded-lg mb-4" />
                    <Image src={image2} height="100" width="200" alt="over view image" className="h-auto lg:h-80 md:h-80  w-[100%] rounded-lg mb-4 md:mb-0" />
                </div>

                <div className="md:w-[48%] md:pl-2">
                    <Image src={image3} height="100" width="200" alt="over view image" className="w-[100%] lg:h-[100%] lg:w-full md:h-[100%] md:w-[100%] rounded-lg mb-4 md:mb-0" />
                </div>
            </div>

            <div className="lg:w-6/12 lg:pl-3">
                <TopPara topparaText={paratext} />

                <SsectionTitel sctiontitle={HederText}
                            allsectonclass="text-[2.7rem]" 
                />

                <SectionTitleImg alltitleimgclass="mt-3 mb-4"/>

                <ParaGrap textpragrap={textpragrap} />

                <div className="mt-6 mb-2 md:flex justify-between">
                    <div>
                        <ParaWithIcon 
                                        chakeparatext={chakeparatext1}
                                        classes = 'about-heors-chake'
                        />
                        <ParaGrap 
                                    textpragrap={chakeparataxt11} 
                                    allparaclass="mt-3" 
                        />
                    </div>

                    <div>
                        <ParaWithIcon chakeparatext={chakeparatext2}
                                        classes = 'about-heors-chake'
                        />
                        <ParaGrap textpragrap={chakeparataxt11}
                                    allparaclass="mt-3" 
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <PersentegDiv
                                    text= "Agriculture"
                                    persentage= "91"
                                    classes= "persentage1 w-[91%]"
                    />

                    <PersentegDiv
                                text= "Organic"
                                persentage= "60"
                                    classes= "persentage2 w-[60%]"
                    />
                 </div>
            </div>
        </ Wrapper>
    )
}