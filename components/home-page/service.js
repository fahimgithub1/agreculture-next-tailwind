import SsectionTitel from "../layout/sectiontitel";
import SectionTitleImg from "../layout/sectiontitleimg";
import TopPara from "../layout/toppara";
import ServicePerDiv from "./serviceperdiv";
import {FaTractor} from 'react-icons/fa';

const topparaServices = "What We’re Doing";
const sctiontitleService = "SERVICES WE’RE OFFERING";

const serviceInfo = [
    {
        id: 1,
        title: "Agriculture Products",
        parag: "I was impresed by the agrion services, not lorem ipsum is simply free text.",
        image: require("/public/services/services-one-1.jpg"),
        icon:"FaTractor"
    },
    {
        id: 2,
        title: "Agriculture Products",
        parag: "I was impresed by the agrion services, not lorem ipsum is simply free text.",
        image: require("/public/services/services-one-2.jpg"),
        icon:"BiDrink"
    },
    {
        id: 3,
        title: "Fresh vegetables",
        parag: "I was impresed by the agrion services, not lorem ipsum is simply free text.",
        image: require("/public/services/services-one-3.jpg"),
        icon:"GiCow"
    },
    {
        id: 4,
        title: "Dairy Products",
        parag: "I was impresed by the agrion services, not lorem ipsum is simply free text.",
        image: require("/public/services/services-one-4.jpg"),
        icon:"FaTractor"
    },
]

export default function Services(){

    return(
        <section className="common-padding bg-gray-200">
            <div className="container text-center m-auto">
                <TopPara topparaText={topparaServices} />
                <SsectionTitel sctiontitle={sctiontitleService} allsectonclass = "section-title text-4xl"  />
                <SectionTitleImg alltitleimgclass="mt-3 mb-4 m-auto"/>

                <div className="flex flex-wrap items-center mt-10">

                    {serviceInfo.map((item)=>(
                        <ServicePerDiv key={item.id}
                                       SerImage={item.image} 
                                       SerIcon={FaTractor} 
                                       title={item.title} 
                                       textpragrap={item.parag}
                                       hrtlink = "./services"
                        />

                    ))}

                    {/* <ServicePerDiv SerImage={serciIMg1} 
                                SerIcon={FaTractor} 
                                title={servicestitle} 
                                textpragrap={service1text}
                                hrtlink = "/"
                    /> */}

                </div>
            </div>
        </section>
    )
}