// import Rapper from "./layout/rapper";
import Image from "next/image";
import InputButon from "../layout/InpuButon";
import qulatyImg from '/public/quality/healthy-food-two-shape-6.png';

const cartTitle = "WE’RE POPULAR LEADER IN AGRICULTURE & ORGANIC MARKET."

export default function CatOn(){

    return(
        <section>
            <div className="lg:flex md:flex justify-between items-center text-center bg-lime-300 common-padding">
                <div className="flex justify-center">
                    <Image src={qulatyImg} className='mr-2 sm:m-auto mb-3 lg:mb-0 md:mb-0' alt="crton image" />
                    </div>
                <p className="text-lg lg:text-2xl font-bold text-gray-600 mr-1 sm:m-auto mb-3 lg:mb-auto md:mb-auto">{cartTitle}</p>
                <InputButon plaehold="Discoer More" />
            </div>
        </section>
    );
}