import SectionTitleImg from "../layout/sectiontitleimg";
import SsectionTitel from "../layout/sectiontitel";
import TopPara from "../layout/toppara";
import ParaGrap from "../layout/paragrap";
import Button from "../layout/button";
import Image from "next/image";

import Image1 from "/public/Overview/about-one-img-1.jpg";
import Image2 from "/public/Overview/about-one-img-2.jpg";
import ParaWithIcon from "../layout/parawithicon";

const paratext = "Get to Know Agrion";
const paratext1 = "We’ve 20 years of agriculture farming experience.";
const textpragrap = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dolore veniam.";
const chakeparatext1 = "There are many variations of passage of lorem." ;
const chakeparatext2 = "Available but the majority alteration." ;

export default function OverView(){

    return(
       <section className="common-padding bg-white flex justify-center">
            <div className="lg:flex md:flex container m-auto">
                <div className="lg:w-6/12 md:w-6/12">
                    <TopPara topparaText={paratext} />

                    <SsectionTitel sctiontitle="AGRION IS THE AGRICULTURE AND ORGANIC FARM"  
                                allsectonclass="text-[2.7rem]" 
                    />

                    <SectionTitleImg alltitleimgclass="mt-3 mb-4"/>

                    <TopPara topparaText={paratext1} allclass="top-para-style font-bold text-2xl" />

                    <ParaGrap textpragrap={textpragrap} />

                    <div className="mt-6 mb-2">
                        <ParaWithIcon chakeparatext={chakeparatext1} 
                                      classes="heors-chake"
                        />
                        <ParaWithIcon chakeparatext={chakeparatext2}
                                      classes="heors-chake" 
                        /> 
                    </div>

                    <Button btntext="About More " allbtnclass="mb-5 text-white mt-6 lg:mb-0 md:mb-0 sm:mb-0"/>
                </div>

                <div className="lg:w-6/12 md:w-6/12 lg:relative md:relative">
                    <Image src={Image1} height="100" width="200" alt="overview image" className="h-auto m-auto w-[95%] lg:h-[100%] lg:w-[60%] md:h-[100%] md:w-[90%] lg:absolute md:absolute right-0 rounded-lg" />
                    <Image src={Image2} height="100" width="200" alt="overview image" className="h-0 lg:h-[70%] lg:w-[45%] lg:absolute md:absolute left-6 bottom-0 rounded-lg" />
                </div>
            </div>
       </section> 
    )
}