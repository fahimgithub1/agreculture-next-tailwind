import Image from "next/image";
import Link from "next/link";
import Button from "../layout/button";

export default function Item(props){
    
    return(
        <div className="flex relative h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Image src={props.ImageCaroul} width="100%" height="auto" alt="carosulimage" className="h-full" />
            <div className="h-full w-full absolute flex justify-center items-center bg-black  bg-opacity-60">
                <div className="text-white text-center">
                    <p className="text-dm font-semibold md:text-xl lg:text-xl">{props.para}</p>

                    <h1 className="text-5xl	font-extrabold md:text-7xl xl:text-9xl lg:text-8xl">{props.hader}</h1>

                    <Link href="./projects">
                        <Button btntext="Discover More" allbtnclass="mt-9" />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}