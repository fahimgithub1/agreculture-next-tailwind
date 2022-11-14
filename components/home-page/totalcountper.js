import Image from "next/image";
import image1 from "/public/shapes/counter-one-shape-1.png";
import image2 from "/public/shapes/counter-one-shape-2.png";
import BolderHeader from "../layout/bolderheader";
import SsectionTitel from "../layout/sectiontitel";


export default function TotalCountPer(props){

    return(
        <div className="w-2/4 lg:w-1/4 md:w-1/4 sm-2/4 justify-center text-center mb-8 md:mb-0 lg:mb-0">
            <div className="flex mb-4 justify-center">
                <Image src={image1} height="30px" width="10px"  alt="counter image" />
                <props.icon className="text-7xl text-lime-700" />
                <Image src={image2} height="30px" width="10px"  alt="counter image"  />
            </div>

            <BolderHeader text={props.bolderheader} classes="text-5xl" />
            <SsectionTitel sctiontitle={props.sctiontitle} allsectonclass="text-[1.2rem]"/>
        </div>
    )
}