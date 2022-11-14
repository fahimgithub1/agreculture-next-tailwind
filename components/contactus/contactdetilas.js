import FristNavigatinIcon from "../home-page/subconponnets/fristnavigatinicon";
import PerContect from "./percontect";

const ContactInfo = [
    {
        id: 1,
        paratext : 'Have Question?',
        text:"Free 018243742352"
    },
    {
        id: 2,
        paratext : 'Write Email',
        text:"neep@mail.com"
    },
    {
        id: 3,
        paratext : 'Visit Office',
        text:"30 Broklyn Golden Street. USA"
    }
]

export default function ContactDetilas(){

    return(
        <div className="flex flex-wrap items-center">

            {ContactInfo.map((item)=>(
                <PerContect 
                            key={item.id}
                            textpragrap={item.paratext}
                            text = {item.text}
                />
            ))}

            <div className="w-6/12 lg:w-3/12 md:w-6/12 my-2 md:my-0">
                <FristNavigatinIcon 
                                    clseesUl="flex lg:justify-end items-center"
                                    classLi="mr-3 p-2 bg-gray-300 rounded-full hover:bg-lime-700 hover:text-white text-md"
                />
            </div>

        </div>
    )
}