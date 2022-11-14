import Wrapper from "../layout/wrapper";
import {BsTreeFill} from 'react-icons/bs';
import TotalCountPer from "./totalcountper";

// const bolderheader1 = "6424";
// const sctiontitle1 = "AGRICULTURE PRODUCTS";

const CounteDivInfo = [
    {
        id : 1,
        bolderheader : "6424",
        sctiontitle : "AGRICULTURE PRODUCTS",
        icon : {BsTreeFill}
    },
    {
        id : 2,
        bolderheader : "8888",
        sctiontitle : "PROJECTS PRODUCTS",
        icon : {BsTreeFill}
    },
    {
        id : 3,
        bolderheader : "9865",
        sctiontitle : "SATISFIED PRODUCTS",
        icon : "BsTreeFill"
    },
    {
        id : 4,
        bolderheader : "1020",
        sctiontitle : "EXPERT  PRODUCTS",
        icon : {BsTreeFill}
    },
]

export default function TotalCounter(){

    return(
        <Wrapper sectionclass="bg-white" comondivclass="flex flex-wrap pt-8 lg:pt-0 md:pt-0 ">

            {CounteDivInfo.map((item)=>(
                <TotalCountPer key={item.id}  
                    bolderheader={item.bolderheader}
                    icon={BsTreeFill}
                    sctiontitle={item.sctiontitle}
                />
            ))}

            {/* <TotalCountPer  bolderheader={bolderheader1}
                            icon={BsTreeFill}
                            sctiontitle={sctiontitle1}
            /> */}

        </Wrapper>
    )
}