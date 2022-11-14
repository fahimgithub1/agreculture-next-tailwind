import Image from "next/image";
import Link from "next/link";
import ParaGrap from "../layout/paragrap";

export default function ServicePerDiv(props){

    return(
        <div className="lg:w-3/12 md:w-6/12 px-2 text-blacks mb-4 last:mb-0 lg:mb-0 md:mb-4">
            <Link href={props.hrtlink}>
                <div className="p-4 bg-white w-full rounded-lg">
                    <div className="relative h-40"> 
                        <Image src={props.SerImage} height="100" width="100" alt="services Image" className="h-40 w-40 rounded-full m-auto" />
                        <div className=" h-20 w-20 flex justify-center items-center rounded-full absolute top-[70%] left-[35%] bg-lime-700 text-white">
                            <props.SerIcon className="text-5xl" />
                        </div>
                    </div>

                    <h2 className="mt-14 font-medium text-2xl">{props.title}</h2>

                    <ParaGrap textpragrap={props.textpragrap} allparaclass="mb-6" />
                </div>
            </Link>
        </div>
    )
}