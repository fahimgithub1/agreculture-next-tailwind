import Image from "next/image";
import BolderHeader from "../layout/bolderheader";

export default function  PerProjectThemnel(props){

    return(
        <div className="w-4/12 mb-1 p-3">
            <div className="relative rounded-xl overflow-hidden ">
                <Image src={props.img}  height='200' width="100%" alt="Prject image" className="w-full" />

                <div className="absolute bottom-0 left-0 w-full px-12 py-12 pt-32 text-white bg-gradient-to-t from-lime-900 to-transparent  bg-opacity-10 ">
                    <BolderHeader 
                                    text={props.upertext}
                                    classes="mb-6 pb-1 border-b-4 border-yellow-300 inline"
                    />
                        
                    <BolderHeader 
                                    text={props.text}
                                    classes="text-4xl mt-4 font-thin"
                    />
                </div>
            </div>
        </div>
    )
}