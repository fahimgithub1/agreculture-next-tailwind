import BolderHeader from "../layout/bolderheader";
import ParaGrap from "../layout/paragrap";
import { FiPhoneCall } from 'react-icons/fi';


export default function ServiceImgContact(){

    return(
        <div className="p-8 mt-6 text-center text-white bg-lime-700 rounded-lg bg-[url('/public/backgroundsorganic-only-bg-img-1.jpg')]">
            <BolderHeader 
                            text="WE’RE SALLING OUR AGRICULTURE PRODUCTS"
                            classes="text-3xl font-light m-auto mb-8 max-w-xs"
            />

            <div className="flex justify-center">
                <span className="bg-yellow-300 text-center p-7 rounded-full text-lime-900 text-5xl">
                    <FiPhoneCall />
                </span>
            </div>

            <ParaGrap
                        textpragrap="Lorem ipsum dolor sit am cons sid"
            />

            <BolderHeader 
                            text="+ 1- (246) 333-0088"
                            classes="text-xl"
            />
        </div>
    )
}