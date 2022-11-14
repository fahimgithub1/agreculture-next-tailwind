import BolderHeader from "../layout/bolderheader";
import Image from "next/image";

export default function Heros(props){

    return(
        <section>
            <div className="relative h-80 sm:h-90 xl:h-[70vh] 2xl:h-[70vh]">
                <Image src={props.herosimag} width="100%" height="auto" alt="herosimage" className="h-full" />
                <div className="h-full w-full absolute flex justify-center items-center bg-black  bg-opacity-60 top-0 left-0">
                    <div className="text-white text-center">
                        <BolderHeader
                                        text = {props.text}
                                        classes = "text-5xl font-amatic" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}